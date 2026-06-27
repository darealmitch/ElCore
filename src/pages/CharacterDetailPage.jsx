import { Link, useParams } from "react-router-dom";
import { characters } from "../data/characters";
import { characterThemes } from "../data/characterThemes";
import Portrait from "../components/ui/Portrait";
import ClassPathTimeline from "../components/ui/ClassPathTimeline";
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
        <main className="page character-detail" style={{ "--theme-primary": theme.primary, "--theme-glow": theme.glow }}>
            <section className="cd-hero" style={{ "--c": theme.primary, "--c2": theme.secondary, "--glow": theme.glow }}>
                <div className="cd-hero-text">
                    <div className="cd-hero-top">
                        <Link className="cd-back" to="/personnages">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M11 18l-6-6 6-6" />
                            </svg>
                            Personnages
                        </Link>
                        <nav className="cd-switch" aria-label="Navigation entre personnages">
                            {previousCharacter ? (
                                <Link to={`/personnages/${previousCharacter.id}`}>← {previousCharacter.name}</Link>
                            ) : (
                                <span className="disabled">← Précédent</span>
                            )}
                            {nextCharacter ? (
                                <Link to={`/personnages/${nextCharacter.id}`}>{nextCharacter.name} →</Link>
                            ) : (
                                <span className="disabled">Suivant →</span>
                            )}
                        </nav>
                    </div>

                    <span className="cd-pill">{character.featuredClassFr || character.featuredClass}</span>
                    <h1 className="cd-name">{character.name}</h1>
                    {character.fullName && character.fullName !== character.name && (
                        <span className="cd-fullname">{character.fullName}</span>
                    )}

                    <div className="cd-meta">
                        <div><div className="k">Rôle</div><div className="v">{character.role}</div></div>
                        <div><div className="k">Arme</div><div className="v">{character.weapon}</div></div>
                        <div><div className="k">Âge</div><div className="v">{character.age}</div></div>
                        <div><div className="k">Type</div><div className="v">{character.type}</div></div>
                    </div>

                    <div className="cd-classes">
                        {character.classes.map((className, index) => (
                            <span key={className} title={`International : ${className}`}>
                                {character.classesFr?.[index] || className}
                            </span>
                        ))}
                    </div>

                    <p className="cd-lore">{character.lore}</p>

                    <a className="cd-cta" href="#specialisations">
                        Voir les spécialisations
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                </div>

                <div className="cd-hero-visual">
                    <Portrait src={character.image} alt={character.name} eager mode="contain" />
                </div>
            </section>

            <section className="detail-section">
                <section className="detail-grid">
                    <article className="detail-card detail-card-role">
                        <h2>Rôle général</h2>
                        <p>{character.description}</p>
                    </article>

                    <article className="detail-card detail-card-featured">
                        <h2>Classe mise en avant</h2>
                        <p><strong>{character.featuredClass}</strong> est actuellement mise en avant sur ElCore pour ce personnage.</p>
                    </article>

                    <article className="detail-card detail-card-classes">
                        <h2>Classes disponibles</h2>
                        <div className="class-list">
                            {character.classes.map((className) => (
                                <span key={className} className="class-badge" style={{ borderColor: theme.primary, color: theme.primary }}>
                                    {className}
                                </span>
                            ))}
                        </div>
                    </article>

                    <article className="detail-card detail-card-info">
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

                <div className="section-header" id="specialisations">
                    <span>Classes</span>
                    <h2>Chemins de spécialisation</h2>
                </div>

                <ClassPathTimeline characterId={character.id} />
            </section>

            <section className="detail-section">
                <div className="section-header">
                    <span>Configurations</span>
                    <h2>Configurations disponibles</h2>
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