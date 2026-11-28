import { createClient } from '@supabase/supabase-js';

// ROJO ROJO CAMBIAR DESPUES DE LAS PRUEBAS A ESTO
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const supabaseUrl = "https://zsnhjdizoanbejvnzgyu.supabase.co";
const supabaseAnonKey = "sb_publishable_3Dn2tyJcDQq-fg89HF0KWQ_qtTQyMzu";

// 2. Control de seguridad: Validamos que las variables existan para evitar errores silenciosos
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Faltan las variables de entorno NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY en el archivo .env.local'
  );
}

// 3. Inicializamos el cliente único que usará toda la aplicación
export const supabase = createClient(supabaseUrl, supabaseAnonKey);