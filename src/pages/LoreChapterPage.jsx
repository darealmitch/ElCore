import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loreChapters } from "../data/loreChapters";

function LoreChapterPage() {
    const { chapterId } = useParams();
    const chapter = loreChapters.find((item) => item.id === chapterId);
    const [activeImage, setActiveImage] = useState(null);
    const [isSectionNavOpen, setIsSectionNavOpen] = useState(false);

    useEffect(() => {
        if (!activeImage) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setActiveImage(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeImage]);

    if (!chapter) {
        return (
            <main className="page lore-page">
                <section className="lore-hero">
                    <span>Erreur</span>
                    <h1>Chapitre introuvable</h1>
                    <p>Le chapitre demandé n’existe pas encore dans le lore d’ElCore.</p>
                    <Link className="btn-primary" to="/lore">
                        Retour au lore
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main
            className="page lore-page lore-chapter-page"
            style={{
                "--lore-page-bg": `url(${chapter.mapBackground})`,
            }}
        >
            <section className="lore-chapter-detail-hero">
                <Link className="back-link lore-back-link" to="/lore">
                    ← Retour au lore
                </Link>

                <div className="lore-chapter-detail-content">
                    <span>{chapter.eyebrow}</span>
                    <h1>{chapter.title}</h1>
                    <p>{chapter.summary}</p>
                </div>
            </section>
            {chapter.sections.some((section) => section.id) && (
                <nav
                    className={`lore-section-selector ${isSectionNavOpen ? "open" : ""}`}
                    aria-label="Sélection rapide des villages"
                >
                    <button
                        className="lore-section-selector-toggle"
                        type="button"
                        onClick={() => setIsSectionNavOpen((current) => !current)}
                        aria-expanded={isSectionNavOpen}
                    >
                        Sélectionner un village
                        <span aria-hidden="true">{isSectionNavOpen ? "×" : "→"}</span>
                    </button>

                    <div className="lore-section-selector-list">
                        {chapter.sections
                            .filter((section) => section.id)
                            .map((section) => (
                                <a
                                    className="lore-section-selector-link"
                                    href={`#${section.id}`}
                                    key={section.id}
                                    onClick={() => setIsSectionNavOpen(false)}
                                >
                                    {section.title}
                                </a>
                            ))}
                    </div>
                </nav>
            )}
            <section className="lore-chapter-detail-body">
                {chapter.sections.map((section, index) => {
                    const hasImage = Boolean(section.image);
                    const imagePositionClass =
                        hasImage && index % 2 === 1 ? "image-left" : "image-right";


                    return (
                        <article
                            className={`lore-text-block ${hasImage ? imagePositionClass : ""}`}
                            id={section.id}
                            key={section.title}
                        >
                            <div className="lore-text-copy">
                                <h2>{section.title}</h2>

                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}

                                {section.note && (
                                    <p className="lore-section-note">{section.note}</p>
                                )}
                            </div>

                            {section.image && (
                                <figure className="lore-section-image">
                                    <button
                                        className="lore-section-image-button"
                                        type="button"
                                        onClick={() => setActiveImage(section.image)}
                                        aria-label={`Agrandir l’image : ${section.image.alt}`}
                                    >
                                        <img src={section.image.src} alt={section.image.alt} />
                                        <span className="lore-image-zoom-label">Agrandir</span>
                                    </button>

                                    {section.image.caption && (
                                        <figcaption>{section.image.caption}</figcaption>
                                    )}
                                </figure>
                            )}
                        </article>
                    );
                })}
            </section>

            {activeImage && (
                <div className="lore-image-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt} onClick={() => setActiveImage(null)}>
                    <button className="lore-image-lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Fermer l’image agrandie">
                        ×
                    </button>

                    <figure className="lore-image-lightbox-content" onClick={(event) => event.stopPropagation()}>
                        <img src={activeImage.src} alt={activeImage.alt} />

                        {activeImage.caption && (
                            <figcaption>{activeImage.caption}</figcaption>
                        )}
                    </figure>
                </div>
            )}
        </main>
    );
}

export default LoreChapterPage;