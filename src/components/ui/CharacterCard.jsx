import { Link } from "react-router-dom";
import { characterThemes } from "../../data/characterThemes";

function CharacterCard({ character, compact = false }) {
    const theme = characterThemes[character.id];

    const visibleClasses = compact
        ? character.classes.slice(0, 3)
        : character.classes;

    return (
        <article
            className={compact ? "character-card compact" : "character-card"}
            style={{
                color: theme.primary,
                borderColor: theme.primary,
                boxShadow: compact ? undefined : `0 0 24px ${theme.glow}`,
                "--theme-primary": theme.primary,
                "--theme-glow": theme.glow
            }}
        >
            <div className="character-card-aura" />
            <div className="character-card-visual">
                <img
                    className="character-card-image"
                    src={character.image}
                    alt={character.name}
                    loading="lazy"
                />
            </div>
            <div className="character-card-content">
                <div className="character-card-heading">
                    <span className="character-role" style={{backgroundColor: theme.glow, color: theme.primary,}}>
                        {character.role}
                    </span>
                    <h2 style={{ color: theme.primary }}>{character.name}</h2>
                    {character.fullName && character.fullName !== character.name && (
                        <small className="character-full-name">
                            {character.fullName}
                        </small>
                    )}
                </div>
                <p>{character.description}</p>
                <div className="class-list">
                    {visibleClasses.map((className, index) => {
                        const classNameFr = character.classesFr?.[index] || className;
                        return (
                            <span key={className} className="class-badge" style={{borderColor: theme.primary, color: theme.primary,}}
                                title={classNameFr ? `International : ${className}` : undefined}>
                                {classNameFr || className}
                            </span>
                        );
                    })}
                </div>
                <Link to={`/personnages/${character.id}`} className="character-card-link" style={{
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,}}>
                    Voir le guide
                </Link>
            </div>
        </article>
    );
}
export default CharacterCard;