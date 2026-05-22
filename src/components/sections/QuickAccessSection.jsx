import SectionHeader from "../ui/SectionHeader";

const quickLinks = [
    {
        icon: "⚔",
        title: "Personnages",
        description: "Consulte les fiches, rôles, classes et forces de chaque personnage.",
        path: "/personnages"
    },
    {
        icon: "✦",
        title: "Builds",
        description: "Trouve des builds PvE, raid ou débutant adaptés à ton style.",
        path: "/builds"
    },
    {
        icon: "▣",
        title: "Tier List",
        description: "Compare les classes selon les modes de jeu et leur utilité.",
        path: "/tier-list"
    },
    {
        icon: "☰",
        title: "Guides",
        description: "Apprends les bases, optimise ta progression et évite les erreurs.",
        path: "/guides"
    }
];
function QuickAccessSection() {
    return (
        <section className="home-section">
            <SectionHeader
                eyebrow="Accès rapide"
                title="Tout ce qu’il te faut pour progresser"
            />

            <div className="quick-access-grid">
                {quickLinks.map((link) => (
                    <a className="quick-access-card" href={link.path} key={link.title}>
                        <span className="quick-access-icon">{link.icon}</span>
                        <h3>{link.title}</h3>
                        <p>{link.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
export default QuickAccessSection;