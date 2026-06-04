import { Link } from "react-router-dom";
import { classesSystemGuide } from "../data/classesSystemGuide";

const quickGuideCards = [
    {
        id: "beginner",
        icon: "🚀",
        title: "Débuter",
        description: "Les bases essentielles pour comprendre le système de classes.",
        href: "#debuter",
    },
    {
        id: "characters",
        icon: "👥",
        title: "Personnages",
        description: "Comparer les rôles, styles de combat et difficultés.",
        href: "#personnages",
    },
    {
        id: "progression",
        icon: "📈",
        title: "Progression",
        description: "Comprendre les étapes d’avancement de job.",
        href: "#progression",
    },
    {
        id: "mechanics",
        icon: "⚙️",
        title: "Mécaniques",
        description: "Identifier les systèmes importants de chaque personnage.",
        href: "#personnages",
    },
    {
        id: "builds",
        icon: "⚔️",
        title: "Configurations",
        description: "Préparer l’optimisation après le choix de classe.",
        href: "/builds",
        isRoute: true,
    },
];

function GuidesPage() {
    const {
        title,
        intro,
        characterOverview = [],
        beginnerRecommendations,
        jobProgression = [],
    } = classesSystemGuide;

    return (
        <main className="page guides-page">
            <section className="guides-premium-hero">
                <div className="guides-hero-content">
                    <div className="guides-hero-copy">
                        <span className="guides-hero-badge">Guides ElCore</span>
                        <h1>{title || "Système de classes"}</h1>
                        {intro && <p>{intro}</p>}

                        <div className="guides-hero-actions">
                            <a className="guides-btn guides-btn-primary" href="#debuter">
                                Commencer le guide
                            </a>
                            <Link className="guides-btn guides-btn-secondary" to="/personnages">
                                Voir les personnages
                            </Link>
                        </div>
                    </div>

                    <div className="guides-hero-visual" aria-hidden="true">
                        <div className="guides-ariel-glow" />
                        <img
                            className="guides-ariel-image"
                            src="/images/home/ariel.webp"
                            alt=""
                        />
                        <span className="guides-floating-card guides-floating-card-1">Guides</span>
                        <span className="guides-floating-card guides-floating-card-2">Personnages</span>
                        <span className="guides-floating-card guides-floating-card-3">Progression</span>
                    </div>
                </div>
            </section>

            <section className="guides-quick-grid" aria-label="Accès rapide aux guides">
                {quickGuideCards.map((card) =>
                    card.isRoute ? (
                        <Link className="guides-quick-card" to={card.href} key={card.id}>
                            <span>{card.icon}</span>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </Link>
                    ) : (
                        <a className="guides-quick-card" href={card.href} key={card.id}>
                            <span>{card.icon}</span>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </a>
                    )
                )}
            </section>

            {characterOverview.length > 0 && (
                <section className="guide-section guides-character-section" id="personnages">
                    <div className="guide-section-header">
                        <span>Personnages</span>
                        <h2>Les personnages en un coup d'œil</h2>
                    </div>

                    <div className="guides-character-grid">
                        {characterOverview.map((character) => (
                            <article className="guides-character-card" key={character.character}>
                                <div className="guides-character-card-header">
                                    <h3>{character.character}</h3>
                                    <span>{character.difficulty}</span>
                                </div>

                                <div className="guides-character-details">
                                    <p>
                                        <strong>Rôle</strong>
                                        {character.role}
                                    </p>
                                    <p>
                                        <strong>Style de combat</strong>
                                        {character.combatStyle}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {beginnerRecommendations && (
                <section className="guide-section guides-beginner-section" id="debuter">
                    <article className="guides-recommendation-card">
                        <div className="guides-card-glow" />
                        <span>Débuter</span>
                        <h2>{beginnerRecommendations.title}</h2>
                        <p>{beginnerRecommendations.text}</p>
                    </article>
                </section>
            )}

            {jobProgression.length > 0 && (
                <section className="guide-section guides-progression-section" id="progression">
                    <div className="guide-section-header">
                        <span>Progression</span>
                        <h2>Le système d'avancement de job</h2>
                    </div>

                    <div className="guides-timeline">
                        {jobProgression.map((step) => (
                            <article className="guides-timeline-step" key={`${step.stage}-${step.level}`}>
                                <div className="guides-step-marker">
                                    <span>{step.level}</span>
                                </div>
                                <div className="guides-step-content">
                                    <h3>{step.stage}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}

export default GuidesPage;