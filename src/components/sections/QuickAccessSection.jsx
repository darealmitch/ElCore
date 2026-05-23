import { User, Wrench, BarChart3, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const quickAccessItems = [
    {
        title: "Classes",
        description: "Fiches personnages et voies d’évolution.",
        to: "/classes",
        icon: User,
        colorClass: "quick-access-purple",
    },
    {
        title: "Builds",
        description: "Optimisation des équipements et compétences.",
        to: "/builds",
        icon: Wrench,
        colorClass: "quick-access-cyan",
    },
    {
        title: "Tier List",
        description: "Classement de la meta actuelle.",
        to: "/tier-list",
        icon: BarChart3,
        colorClass: "quick-access-pink",
    },
    {
        title: "Guides",
        description: "Tutoriels de donjons, raids et mécaniques.",
        to: "/guides",
        icon: BookOpen,
        colorClass: "quick-access-lavender",
    },
];
function QuickAccessSection() {
    return (
        <section className="home-section">
            <div className="section-header">
                <span>Navigation</span>
                <h2>Accès rapide</h2>
            </div>
            <div className="quick-access-grid">
                {quickAccessItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link key={item.title} to={item.to} className={`quick-access-card ${item.colorClass}` }>
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
    );
}
export default QuickAccessSection;