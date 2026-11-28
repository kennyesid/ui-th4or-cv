// ==========================================
// 1. TIPOS TYPESCRIPT (interfaces/types)
// ==========================================
import React, { useEffect, useMemo, useState } from "react";
import { DatabaseService } from "../../lib/database/databaseService";

export interface CategoryEntity {
    id: number;
    name: string;
    description: string | null;
    sort_order: number;
    image_bussiness_url: string | null;
    image_logo: string | null;
    state: boolean;
}

export interface CertificationEntity {
    id: number;
    category_id: number;
    title: string;
    issued_at: string; // YYYY-MM-DD
    hours: number | null;
    credential_id: string | null;
    credential_url: string | null;
    certificate_url: string | null;
    skills: string[];
    is_featured: boolean;
    branch: string;
    state: boolean;
}

// Estructura anidada que devuelve Supabase con select("*, certifications(*)")
export interface CategoryWithCertifications extends CategoryEntity {
    certifications: CertificationEntity[];
}

// Certificación enriquecida con el nombre de su categoría para renderizar más rápido
export interface FlattenedCertification extends CertificationEntity {
    categoryName: string;
    image_bussiness_url: string;
    image_logo: string;
}

export type FilterMode = "all" | "category" | "branch";

export interface CertificationsProps {
    language?: {
        language?: string;
        navbar?: {
            home?: string;
        };
    };
}

const LATEST_LIMIT = 9;
const categoriesService = new DatabaseService<CategoryEntity>("categories");

// ==========================================
// 2. COMPONENTE CON COMENTARIOS CLAVE
// ==========================================
const Certifications: React.FC<CertificationsProps> = ({ language }) => {
    const isSpanish =
        language?.language === "Español" || language?.navbar?.home === "Inicio";

    const [categoriesWithCerts, setCategoriesWithCerts] = useState<
        CategoryWithCertifications[]
    >([]);
    const [filterMode, setFilterMode] = useState<FilterMode>("all");
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
        null
    );
    const [selectedBranch, setSelectedBranch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Carga ÚNICA: trae categorías activas con sus certificados relacionados
    useEffect(() => {
        let isMounted = true;

        const loadAllDataOnce = async () => {
            setLoading(true);
            setErrorMessage(null);

            try {
                const rows = await categoriesService.getWithRelation<CategoryWithCertifications>(
                    "certifications(*)",
                    "sort_order",
                    true
                );
                console.log('data::', JSON.stringify(rows));
                if (isMounted) {
                    setCategoriesWithCerts(rows);
                }
            } catch (err) {
                console.error("Error al cargar categorías y certificados:", err);
                if (isMounted) {
                    setErrorMessage(
                        isSpanish
                            ? "No se pudieron cargar los certificados."
                            : "Could not load certifications."
                    );
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        loadAllDataOnce();

        return () => {
            isMounted = false;
        };
    }, [isSpanish]);

    // Lista plana de todos los certificados activos, ordenados por fecha de emisión DESC
    const allCertificationsSorted = useMemo<FlattenedCertification[]>(() => {
        const flat: FlattenedCertification[] = [];

        for (const category of categoriesWithCerts) {
            if (!category.state) continue;

            const certs = Array.isArray(category.certifications)
                ? category.certifications
                : [];

            for (const cert of certs) {
                if (!cert.state) continue;
                flat.push({
                    ...cert,
                    categoryName: category.name,
                    image_bussiness_url: category.image_bussiness_url ?? '',
                    image_logo: category.image_logo ?? ''
                });
            }
        }

        return flat.sort((a, b) => {
            const dateDiff =
                new Date(`${b.issued_at}T00:00:00`).getTime() -
                new Date(`${a.issued_at}T00:00:00`).getTime();
            if (dateDiff !== 0) return dateDiff;
            return b.id - a.id;
        });
    }, [categoriesWithCerts]);

    // Ramas únicas de TODO el catálogo cargado en memoria
    const availableBranches = useMemo<string[]>(() => {
        const unique = new Set<string>();
        for (const cert of allCertificationsSorted) {
            if (cert.branch && cert.branch.trim().length > 0) {
                unique.add(cert.branch.trim());
            }
        }
        return Array.from(unique).sort((a, b) => a.localeCompare(b));
    }, [allCertificationsSorted]);

    // Filtrado 100% en memoria (sin nuevas consultas a Supabase)
    const visibleCertifications = useMemo<FlattenedCertification[]>(() => {
        if (filterMode === "category" && selectedCategoryId !== null) {
            return allCertificationsSorted.filter(
                (cert) => cert.category_id === selectedCategoryId
            );
        }

        if (filterMode === "branch" && selectedBranch) {
            return allCertificationsSorted.filter(
                (cert) => cert.branch.trim() === selectedBranch
            );
        }

        // Por defecto ("all"): últimos 8 certificados según issued_at
        console.log('review:: ', JSON.stringify(allCertificationsSorted.slice(0, LATEST_LIMIT))) // 318
        return allCertificationsSorted.slice(0, LATEST_LIMIT);
    }, [allCertificationsSorted, filterMode, selectedCategoryId, selectedBranch]);

    const handleSelectAll = () => {
        setFilterMode("all");
        setSelectedCategoryId(null);
        setSelectedBranch("");
    };

    const handleSelectCategory = (categoryId: number) => {
        setFilterMode("category");
        setSelectedCategoryId(categoryId);
        setSelectedBranch("");
    };

    const handleSelectBranch = (branch: string) => {
        if (!branch) {
            handleSelectAll();
            return;
        }
        setFilterMode("branch");
        setSelectedBranch(branch);
        setSelectedCategoryId(null);
    };

    const getCertificateLink = (cert: FlattenedCertification): string | null => {
        if (cert.certificate_url && cert.certificate_url.trim().length > 0) {
            return cert.certificate_url.trim();
        }
        if (cert.credential_url && cert.credential_url.trim().length > 0) {
            return cert.credential_url.trim();
        }
        return null;
    };

    const formatDate = (dateStr: string): string => {
        const parsed = new Date(`${dateStr}T00:00:00`);
        if (Number.isNaN(parsed.getTime())) return dateStr;
        return parsed.toLocaleDateString(isSpanish ? "es-BO" : "en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        });
    };

    return (
        <div className="cert-container">
            <div className="cert-header">
                <h2 className="cert-title">
                    {isSpanish ? "Mis" : "My"}{" "}
                    <span>{isSpanish ? "Certificados" : "Certifications"}</span>{" "}
                    <span className="cert-total-wrapper">
                        - {isSpanish ? "Total" : "Total"}
                        <span className="cert-cart-bubble" style={{ color: '#02253d' }}>
                            {allCertificationsSorted.length}
                        </span>
                    </span>
                </h2>
                <p className="cert-subtitle">
                    {filterMode === "all"
                        ? isSpanish
                            ? `Mostrando los últimos ${LATEST_LIMIT} certificados obtenidos según fecha de emisión.`
                            : `Showing the latest ${LATEST_LIMIT} certifications by issue date.`
                        : isSpanish
                            ? "Certificados filtrados por criterio seleccionado."
                            : "Certifications filtered by selected criteria."}
                </p>
            </div>

            {/* Barra de filtros + contador en una misma fila */}
            <div
                className="cert-toolbar"
                role="region"
                aria-label="Certification filters"
            >
                <div className="cert-filters">
                    <button
                        type="button"
                        onClick={handleSelectAll}
                        className={`cert-filter-btn ${filterMode === "all" ? "is-active" : ""}`}
                    >
                        {isSpanish
                            ? `Todos (Últimos ${LATEST_LIMIT})`
                            : `All (Latest ${LATEST_LIMIT})`}
                    </button>

                    {categoriesWithCerts.map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleSelectCategory(cat.id)}
                            className={`cert-filter-btn ${filterMode === "category" && selectedCategoryId === cat.id
                                ? "is-active"
                                : ""
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}

                    <select
                        aria-label={isSpanish ? "Filtrar por rama" : "Filter by branch"}
                        value={filterMode === "branch" ? selectedBranch : ""}
                        onChange={(e) => handleSelectBranch(e.target.value)}
                        className={`cert-branch-select ${filterMode === "branch" ? "is-active" : ""
                            }`}
                    >
                        <option value="">
                            {isSpanish ? "Filtrar por rama..." : "Filter by branch..."}
                        </option>
                        {availableBranches.map((branch) => (
                            <option key={branch} value={branch}>
                                {branch}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {loading && (
                <div className="cert-state-box">
                    {isSpanish ? "Cargando certificados..." : "Loading certifications..."}
                </div>
            )}

            {!loading && errorMessage && (
                <div className="cert-state-box cert-error">{errorMessage}</div>
            )}

            {!loading && !errorMessage && visibleCertifications.length === 0 && (
                <div className="cert-state-box">
                    {isSpanish
                        ? "No hay certificados para el filtro seleccionado."
                        : "No certifications match the selected filter."}
                </div>
            )}

            {!loading && !errorMessage && visibleCertifications.length > 0 && (
                <div className="cert-grid">
                    {visibleCertifications.map((cert) => {
                        const link = getCertificateLink(cert);

                        return (
                            <article key={cert.id} className="cert-card">
                                {cert.image_bussiness_url && (
                                    <img
                                        src={cert.image_bussiness_url}
                                        alt=""
                                        aria-hidden="true"
                                        className="cert-card-bg-img"
                                    />
                                )}
                                {/* <div className="cert-card-top">
                                    <span className="cert-badge cert-badge-category">
                                        {cert.categoryName}
                                    </span>
                                    <span className="cert-badge cert-badge-branch">
                                        {cert.branch}
                                    </span>
                                </div> */}

                                <h3 className="cert-card-title">{cert.title}</h3>
                                <br />
                                {/* <div className="cert-meta">
                                    <span>{formatDate(cert.issued_at)}</span>
                                </div> */}

                                {
                                    cert.skills && cert.skills.length > 0 && (
                                        <div className="cert-skills">
                                            {cert.skills.slice(0, 4).map((skill) => (
                                                <span
                                                    key={`${cert.id}-${skill}`}
                                                    className="cert-skill-tag"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )
                                }

                                <div className="cert-card-footer">
                                    {link ? (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-link-btn"
                                        >
                                            {isSpanish ? "Ver certificado" : "View certificate"}
                                        </a>
                                    ) : (
                                        <span className="cert-no-link">
                                            {isSpanish ? "Sin enlace" : "No link"}
                                        </span>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            )
            }
        </div >
    );
};

export default Certifications;