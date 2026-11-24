import { supabase } from "./supabaseClient";

export interface BaseEntity {
  id: number;
}

export interface QueryFilter<T> {
  column: keyof T & string;
  value: string | number | boolean;
}

export interface QueryOrder<T> {
  column: keyof T & string;
  ascending: boolean;
}

export class DatabaseService<T extends object> {
  private readonly tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  // Obtener todos los registros activos con orden opcional
  async getAll(
    orderBy: keyof T & string = "id" as keyof T & string,
    ascending = true
  ): Promise<T[]> {
    const orderColumn: string = orderBy;

    const { data, error } = await supabase
      .from(this.tableName)
      .select("*")
      .eq("state", true)
      .order(orderColumn, { ascending });

    if (error) {
      console.error(`Error en getAll de la tabla ${this.tableName}:`, error.message);
      throw error;
    }

    return (data ?? []) as T[];
  }

  // Obtener registros activos con filtros exactos, orden múltiple y límite opcional
  async getFiltered(options?: {
    filters?: QueryFilter<T>[];
    orders?: QueryOrder<T>[];
    limit?: number;
  }): Promise<T[]> {
    let query = supabase
      .from(this.tableName)
      .select("*")
      .eq("state", true);

    if (options?.filters) {
      for (const filter of options.filters) {
        const filterColumn: string = filter.column;
        query = query.eq(filterColumn, filter.value);
      }
    }

    if (options?.orders && options.orders.length > 0) {
      for (const order of options.orders) {
        const orderColumn: string = order.column;
        query = query.order(orderColumn, { ascending: order.ascending });
      }
    } else {
      query = query.order("id", { ascending: true });
    }

    if (typeof options?.limit === "number" && options.limit > 0) {
      query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error(`Error en getFiltered de la tabla ${this.tableName}:`, error.message);
      throw error;
    }

    return (data ?? []) as T[];
  }

  async getByDateRange(
    startDate: string,
    endDate: string,
    dateColumn: keyof T & string,
    orderBy: keyof T & string = "id" as keyof T & string,
    ascending = false
  ): Promise<T[]> {
    const targetDateColumn: string = dateColumn;
    const targetOrderColumn: string = orderBy;

    const nextDay = new Date(`${endDate}T00:00:00`);
    nextDay.setDate(nextDay.getDate() + 1);

    const { data, error } = await supabase
      .from(this.tableName)
      .select("*")
      .eq("state", true)
      .gte(targetDateColumn, `${startDate}T00:00:00`)
      .lt(targetDateColumn, nextDay.toISOString())
      .order(targetOrderColumn, { ascending });

    if (error) {
      console.error(
        `Error en getByDateRange de la tabla ${this.tableName}:`,
        error.message
      );
      throw error;
    }

    return (data ?? []) as T[];
  }

  async getByField(
    column: keyof T & string,
    value: string | number | boolean
  ): Promise<T | null> {
    const targetColumn: string = column;

    const { data, error } = await supabase
      .from(this.tableName)
      .select("*")
      .eq(targetColumn, value)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      console.error(`Error en getByField en ${this.tableName}:`, error.message);
      throw error;
    }

    return data as T;
  }

  async create(item: Omit<T, "id" | "created_at" | "updated_at">): Promise<T> {
    const { data, error } = await supabase
      .from(this.tableName)
      .insert([item] as never)
      .select()
      .single();

    if (error) {
      console.error(`Error en create de la tabla ${this.tableName}:`, error.message);
      throw error;
    }

    return data as T;
  }

  async update(
    column: keyof T & string,
    value: string | number | boolean,
    updates: Partial<Omit<T, "id">>
  ): Promise<T | null> {
    const targetColumn: string = column;

    const { data, error } = await supabase
      .from(this.tableName)
      .update(updates as never)
      .eq(targetColumn, value)
      .select()
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      console.error(`Error en update de la tabla ${this.tableName}:`, error.message);
      throw error;
    }

    return data as T;
  }

  async delete(
    column: keyof T & string,
    value: string | number | boolean
  ): Promise<boolean> {
    const targetColumn: string = column;

    const { error } = await supabase
      .from(this.tableName)
      .delete()
      .eq(targetColumn, value);

    if (error) {
      console.error(`Error en delete de la tabla ${this.tableName}:`, error.message);
      return false;
    }

    return true;
  }

  async searchByField(
    column: keyof T & string,
    searchTerm: string,
    orderBy: keyof T & string = "id" as keyof T & string,
    ascending = true
  ): Promise<T[]> {
    const targetColumn: string = column;
    const targetOrderColumn: string = orderBy;

    const { data, error } = await supabase
      .from(this.tableName)
      .select("*")
      .eq("state", true)
      .ilike(targetColumn, `%${searchTerm}%`)
      .order(targetOrderColumn, { ascending });

    if (error) {
      console.error(`Error en searchByField en ${this.tableName}:`, error.message);
      throw error;
    }

    return (data ?? []) as T[];
  }

  // Obtener registros activos con una relación anidada (ej. categories con sus certifications)
  async getWithRelation<R>(
    relationSelect: string,
    orderBy: keyof T & string = "id" as keyof T & string,
    ascending = true
  ): Promise<R[]> {
    const orderColumn: string = orderBy;

    const { data, error } = await supabase
      .from(this.tableName)
      .select(`*, ${relationSelect}`)
      .eq("state", true)
      .order(orderColumn, { ascending });

    if (error) {
      console.error(
        `Error en getWithRelation (${relationSelect}) de ${this.tableName}:`,
        error.message
      );
      throw error;
    }

    return (data ?? []) as R[];
  }
}

export async function uploadProductImage(file: File): Promise<string | null> {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `products/${fileName}`;

    const { error } = await supabase.storage
      .from("product-images")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    return null;
  }
}

export async function uploadImageToSupabase(
  base64String: string,
  folder: string = "products",
  fileName?: string
): Promise<string> {
  const base64Data = base64String.split(",")[1] ?? "";
  const mimeType = base64String.match(/data:(image\/\w+);/)?.[1] || "image/jpeg";
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const extension = mimeType.split("/")[1] || "jpg";
  const finalFileName =
    fileName ||
    `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${extension}`;
  const filePath = `${folder}/${finalFileName}`;

  const { error } = await supabase.storage
    .from("product-images")
    .upload(filePath, bytes, {
      contentType: mimeType,
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    throw new Error(`Error al subir imagen: ${error.message}`);
  }

  const { data: publicUrlData } = supabase.storage
    .from("product-images")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

