import { Link } from "react-router-dom";
import { loreChapters, lorePageIntro } from "../data/loreChapters";

function LorePage() {
    const orderedChapters = [...loreChapters].sort((a, b) => a.order - b.order);

    return (
        <main className="page lore-page">
            <section className="lore-hero">
                <span>{lorePageIntro.subtitle}</span>
                <h1>{lorePageIntro.title}</h1>
                <p>{lorePageIntro.text}</p>
            </section>

            <section className="lore-chapters-section">
                <div className="section-header">
                    <span>Chapitres</span>
                    <h2>Comprendre l’histoire dans l’ordre</h2>
                </div>

                <div className="lore-chapters-grid">
                    {orderedChapters.map((chapter) => (
                        <Link
                            className="lore-chapter-card"
                            to={`/lore/${chapter.id}`}
                            key={chapter.id}
                        >
                            <span className="lore-chapter-order">
                                {String(chapter.order).padStart(2, "0")}
                            </span>

                            <div className="lore-chapter-content">
                                <span className="lore-chapter-eyebrow">{chapter.eyebrow}</span>
                                <h3>{chapter.title}</h3>
                                <p>{chapter.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default LorePage;