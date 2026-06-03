import { Link, useParams } from "react-router-dom";
import { characters } from "../data/characters";
import { characterThemes } from "../data/characterThemes";
import ClassPathTimeline from "/src/components/ui/ClassPathTimeline";
import BuildCard from "../components/ui/BuildCard";
import { builds } from "../data/builds";
import SkillTree from "../components/ui/SkillTree";
import { characterMechanics } from "../data/characterMechanics";
import { classSkills } from "../data/skills/index.js";

function renderAuraText(text) {
    if (!text) return null;

    const parts = text.split(/(vitalité|destruction|tempête)/gi);

    return parts.map((part, index) => {
        const normalizedPart = part.toLowerCase();

        if (normalizedPart === "vitalité" || normalizedPart === "tempête") {
            return <span key={`${part}-${index}`} className="elsword-aura-word vitality">{part}</span>;
        }

        if (normalizedPart === "destruction") {
            return <span key={`${part}-${index}`} className="elsword-aura-word destruction">{part}</span>;
        }

        return part;
    });
}

function CharacterMechanicCard({ characterMechanic }) {
    if (!characterMechanic) return null;

    const mainText = characterMechanic.text || characterMechanic.description;
    const details = characterMechanic.details || characterMechanic.notes || [];

    return (
        <aside className="character-mechanic-card">
            <span>Particularité</span>
            <h3>{characterMechanic.title}</h3>

            {characterMechanic.subtitle && <strong>{characterMechanic.subtitle}</strong>}

            {mainText && <p>{renderAuraText(mainText)}</p>}

            {characterMechanic.note && (
                <p className="character-mechanic-note">
                    {renderAuraText(characterMechanic.note)}
                </p>
            )}

            {details.length > 0 && (
                <ul className="character-mechanic-details">
                    {details.map((detail) => <li key={detail}>{renderAuraText(detail)}</li>)}
                </ul>
            )}

            {characterMechanic.auras?.length > 0 && (
                <div className="character-aura-list">
                    {characterMechanic.auras.map((aura) => (
                        <article className={`character-aura-card character-aura-card-${aura.color}`} key={aura.id}>
                            <h4>{aura.title}</h4>
                            <p>{renderAuraText(aura.description)}</p>

                            {aura.bonuses?.length > 0 && (
                                <ul>
                                    {aura.bonuses.map((bonus) => <li key={bonus}>{renderAuraText(bonus)}</li>)}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            )}
        </aside>
    );
}

function CharacterDetailPage() {
    const { id } = useParams();
    const character = characters.find((item) => item.id === id);

    if (!character) {
        return (
            <main className="page">
                <section className="page-hero">
                    <span>Erreur</span>
                    <h1>Personnage introuvable</h1>
                    <p>Le personnage demandé n’existe pas dans la base ElCore.</p>
                    <Link className="btn-primary" to="/personnages">Retour aux personnages</Link>
                </section>
            </main>
        );
    }
    const characterIndex = characters.findIndex((item) => item.id === character.id);
    const previousCharacter = characterIndex > 0 ? characters[characterIndex - 1] : null;
    const nextCharacter = characterIndex < characters.length - 1 ? characters[characterIndex + 1] : null;
    const theme = characterThemes[character.id];
    const characterBuilds = builds.filter((build) => build.characterId === character.id);
    const baseSkillTree = classSkills.find((item) => item.characterId === character.id && item.jobStage === "base");
    const characterMechanic = characterMechanics.find((item) => item.characterId === character.id);

    return (
        <main className="page">
            <section className="character-detail-hero" style={{ borderColor: theme.primary, boxShadow: `0 0 40px ${theme.glow}` }}>
                <div className="character-detail-content">
                    <Link className="back-link character-detail-back-link" to="/personnages">← Retour aux personnages</Link>
                    <nav className="character-switch-nav" aria-label="Navigation entre personnages">
                        {previousCharacter ? (
                            <Link className="character-switch-link previous" to={`/personnages/${previousCharacter.id}`}>← {previousCharacter.name}</Link>
                        ) : (
                            <span className="character-switch-link disabled">← Précédent</span>
                        )}

                        {nextCharacter ? (
                            <Link className="character-switch-link next" to={`/personnages/${nextCharacter.id}`}>{nextCharacter.name} →</Link>
                        ) : (
                            <span className="character-switch-link disabled">Suivant →</span>
                        )}
                    </nav>
                    <span className="character-role character-detail-role-badge" style={{ backgroundColor: theme.glow, color: theme.primary }}>
                        {character.role}
                    </span>
                    <h1 style={{ color: theme.primary }}>{character.name}</h1>
                    <p className="full-name">{character.fullName}</p>
                    <p className="character-lore">{character.lore}</p>
                </div>

                <div className="character-detail-visual">
                    <img className="character-detail-image" src={character.image} alt={character.name} />
                </div>
            </section>

            <section className="detail-section">
                <section className="detail-grid">
                    <article className="detail-card">
                        <h2>Informations</h2>
                        <div className="detail-stats">
                            <div>
                                <span>Âge</span>
                                <strong>{character.age}</strong>
                            </div>
                            <div>
                                <span>Genre</span>
                                <strong>{character.gender}</strong>
                            </div>
                            <div>
                                <span>Type</span>
                                <strong>{character.type}</strong>
                            </div>
                            <div>
                                <span>Arme</span>
                                <strong>{character.weapon}</strong>
                            </div>
                        </div>
                    </article>

                    <article className="detail-card">
                        <h2>Classes disponibles</h2>
                        <div className="class-list">
                            {character.classes.map((className) => (
                                <span key={className} className="class-badge" style={{ borderColor: theme.primary, color: theme.primary }}>
                                    {className}
                                </span>
                            ))}
                        </div>
                    </article>

                    <article className="detail-card">
                        <h2>Classe mise en avant</h2>
                        <p><strong>{character.featuredClass}</strong> est actuellement mise en avant sur ElCore pour ce personnage.</p>
                    </article>

                    <article className="detail-card">
                        <h2>Rôle général</h2>
                        <p>{character.description}</p>
                    </article>
                </section>

                {(baseSkillTree || characterMechanic) && (
                    <section className="detail-section character-base-skills-section">
                        <article className="detail-card wide skills-card character-skills-card">
                            <div className="character-skills-layout">
                                {baseSkillTree ? (
                                    <SkillTree data={baseSkillTree} />
                                ) : (
                                    <div className="skill-tree-section">
                                        <h2 className="skill-tree-title">Compétences de base</h2>
                                        <p>Les compétences de base de ce personnage seront ajoutées plus tard.</p>
                                    </div>
                                )}

                                <CharacterMechanicCard characterMechanic={characterMechanic} />
                            </div>
                        </article>
                    </section>
                )}

                <div className="section-header">
                    <span>Classes</span>
                    <h2>Chemins de spécialisation</h2>
                </div>

                <ClassPathTimeline characterId={character.id} />
            </section>

            <section className="detail-section">
                <div className="section-header">
                    <span>Builds</span>
                    <h2>Builds disponibles</h2>
                </div>

                {characterBuilds.length > 0 ? (
                    <div className="related-builds-grid">
                        {characterBuilds.map((build) => <BuildCard key={build.id} build={build} />)}
                    </div>
                ) : (
                    <article className="detail-card">
                        <p>Aucun build n’a encore été ajouté pour ce personnage.</p>
                    </article>
                )}
            </section>
        </main>
    );
}

export default CharacterDetailPage;