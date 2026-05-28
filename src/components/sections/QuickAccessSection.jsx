import { BookOpen, ChartColumnStacked, Telescope, User } from "lucide-react";
import { Link } from "react-router-dom";

const quickAccessItems = [
    {
        title: "Guides",
        description: "Apprends les bases, la progression et les mécaniques importantes d’Elsword.",
        to: "/guides",
        icon: BookOpen,
        colorClass: "quick-access-purple",
    },
    {
        title: "Lore",
        description: "Découvre l’univers d’Élios, l’El, les régions et les grands événements.",
        to: "/lore",
        icon: Telescope,
        colorClass: "quick-access-cyan",
    },
    {
        title: "Personnages",
        description: "Explore les héros jouables, leurs rôles et leurs mécaniques uniques.",
        to: "/personnages",
        icon: User,
        colorClass: "quick-access-pink",
    },
    {
        title: "Classes",
        description: "Parcours les spécialisations, chemins d’évolution et classes de maître.",
        to: "/classes",
        icon: ChartColumnStacked,
        colorClass: "quick-access-lavender",
    },
];

function QuickAccessSection() {
    return (
        <>
            <section className="home-section quick-access-section" id="quick-access">
                <div className="section-header">

                    <section className="home-section home-intent-section">
                        <article className="home-intent-banner">
                            <div className="home-intent-orb" aria-hidden="true" />

                            <div className="home-intent-copy">
                                <span>Comprendre ElCore</span>
                                <h2>Une lecture claire pour mieux avancer dans Elsword.</h2>
                                <p>
                                    ElCore ne sert pas seulement à lister des personnages. Le site t’aide à lire
                                    Elsword dans le bon ordre : comprendre les systèmes, identifier le rôle d’un
                                    personnage, puis comparer les spécialisations avant d’optimiser ton build.
                                </p>
                            </div>

                            <div className="home-intent-flow" aria-label="Logique d’utilisation d’ElCore">
                                <div className="home-intent-flow-item">
                                    <strong>01</strong>
                                    <span>Comprendre</span>
                                </div>

                                <div className="home-intent-flow-line" />

                                <div className="home-intent-flow-item">
                                    <strong>02</strong>
                                    <span>Comparer</span>
                                </div>

                                <div className="home-intent-flow-line" />

                                <div className="home-intent-flow-item">
                                    <strong>03</strong>
                                    <span>Optimiser</span>
                                </div>
                            </div>
                        </article>
                    </section>

                    <span>Explorer ElCore</span>
                    <h2>Choisis ton point de départ</h2>
                </div>
                <div className="quick-access-grid">
                    {quickAccessItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.title}
                                to={item.to}
                                className={`quick-access-card ${item.colorClass}`}
                            >
                                <div className="quick-access-icon">
                                    <Icon size={26} strokeWidth={2.4} />
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Link>
                        );
                    })}
                </div>
            </section>

        </>
    );
}

export default QuickAccessSection;