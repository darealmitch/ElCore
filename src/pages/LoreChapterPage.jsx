import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loreChapters } from "../data/loreChapters";

function LoreChapterPage() {
    const { chapterId } = useParams();
    const chapter = loreChapters.find((item) => item.id === chapterId);
    const [activeImage, setActiveImage] = useState(null);
    const [isSectionNavOpen, setIsSectionNavOpen] = useState(false);
    const [showNextChapterButton, setShowNextChapterButton] = useState(false);
    const sortedChapters = [...loreChapters].sort((a, b) => a.order - b.order);
    const currentChapterIndex = sortedChapters.findIndex((item) => item.id === chapterId);
    const nextChapter = currentChapterIndex >= 0 ? sortedChapters[currentChapterIndex + 1] : null;

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

    useEffect(() => {
        const handleScroll = () => {
            const body = document.querySelector(".lore-chapter-detail-body");

            if (!body) {
                setShowNextChapterButton(false);
                return;
            }
            const bodyBottom = body.getBoundingClientRect().bottom;
            const triggerPoint = window.innerHeight + 80;

            setShowNextChapterButton(bodyBottom <= triggerPoint);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [chapterId]);

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
                <nav className={`lore-section-selector ${isSectionNavOpen ? "open" : ""}`} aria-label="Navigation rapide du chapitre">
                    <button className="lore-section-selector-toggle" type="button" onClick={() => setIsSectionNavOpen((current) => !current)} aria-expanded={isSectionNavOpen}>
                        Explorer les sections
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
                    const sectionImages = section.images || (section.image ? [section.image] : []);
                    const hasImage = sectionImages.length > 0;
                    const hasMultipleImages = sectionImages.length > 1;
                    const imagePositionClass = hasMultipleImages
                        ? "image-gallery"
                        : hasImage && index % 2 === 1
                            ? "image-left"
                            : "image-right";

                    return (
                        <article className={`lore-text-block ${hasImage ? imagePositionClass : ""}`} id={section.id} key={section.id || section.title}>
                            <div className="lore-text-copy">
                                <h2>{section.title}</h2>
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                                {section.note && <p className="lore-section-note">{section.note}</p>}
                            </div>
                            {hasImage && (
                                <div className={`lore-section-images ${hasMultipleImages ? "multiple" : "single"}`}>
                                    {sectionImages.map((image) => (
                                        <figure className="lore-section-image" key={image.src}>
                                            <button className="lore-section-image-button" type="button" onClick={() => setActiveImage(image)} aria-label={`Agrandir l’image : ${image.alt}`}>
                                                <img src={image.src} alt={image.alt} />
                                                <span className="lore-image-zoom-label">Agrandir</span>
                                            </button>
                                            {image.caption && <figcaption>{image.caption}</figcaption>}
                                        </figure>
                                    ))}
                                </div>
                            )}
                        </article>
                    );
                })}
            </section>

            {nextChapter && (
                <Link
                    className={`lore-next-chapter-button ${showNextChapterButton ? "visible" : ""}`} to={`/lore/${nextChapter.id}`} aria-label={`Aller au chapitre suivant : ${nextChapter.title}`}>
                    <span>Chapitre suivant</span>
                    <strong>{nextChapter.title}</strong>
                    <small aria-hidden="true">→</small>
                </Link>
            )}

            {activeImage && (
                <div className="lore-image-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt} onClick={() => setActiveImage(null)}>
                    <button className="lore-image-lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Fermer l’image agrandie">
                        ×
                    </button>

                    <figure className="lore-image-lightbox-content" onClick={(event) => event.stopPropagation()}>
                        <img src={activeImage.src} alt={activeImage.alt} />
                        {activeImage.caption && <figcaption>{activeImage.caption}</figcaption>}
                    </figure>
                </div>
            )}
        </main>
    );
}

export default LoreChapterPage;