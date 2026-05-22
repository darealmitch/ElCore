import { Link } from "react-router-dom";
import { characterThemes } from "../../data/characterThemes";

function CharacterCard({ character, compact = false })  {
    const theme = characterThemes[character.id];

    return (
        <article className={compact ? "character-card compact" : "character-card"} style={{borderColor: theme.primary, boxShadow: `0 0 24px ${theme.glow}`}}>
            <div className="character-card-visual">
                <img className="character-card-image" src={character.image} alt={character.name}/>
            </div>
            <div className="character-card-content">
        <span className="character-role" style={{backgroundColor: theme.glow, color: theme.primary}}>
          {character.role}
        </span>
                <h2 style={{ color: theme.primary }}>{character.name}</h2>
                <p>{character.description}</p>
                <div className="character-info">
                    <span>{character.type}</span>
                    <span>{character.weapon}</span>
                    <span>{character.age}</span>
                    <span>{character.gender}</span>
                </div>
                <strong className="character-featured-class">
                    {character.featuredClass}
                </strong>
                <div className="class-list">
                    {character.classes.map((className) => (
                        <span key={className} className="class-badge" style={{borderColor: theme.primary, color: theme.primary}}>
                            {className}
                        </span>
                    ))}
                </div>
                <Link to={`/personnages/${character.id}`} className="character-card-link" style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`}}>
                    Voir le guide
                </Link>
            </div>
        </article>
    );
}
export default CharacterCard;