import { characterThemes } from "../../data/characterThemes";

function BuildCard({ build }) {
    const theme = characterThemes[build.characterId];

    return (
        <article className="build-card" style={{borderColor: theme.primary, boxShadow: `0 0 22px ${theme.glow}`}}>
            <div className="build-card-top">
                <span style={{ color: theme.primary }}>{build.mode}</span>
                <strong>{build.difficulty}</strong>
            </div>
            <h3 style={{ color: theme.primary }}>{build.title}</h3>
            <p className="build-character">{build.character} — {build.className}</p>
            <p>{build.description}</p>
            <div className="stat-list">
                {build.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                ))}
            </div>
            <button
                className="build-card-button"
                style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                }}
            >
                Voir le build
            </button>
        </article>
    );
}
export default BuildCard;