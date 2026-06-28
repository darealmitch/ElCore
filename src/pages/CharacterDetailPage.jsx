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
        <aside className="cd-mech">
            <span className="cd-mech-label">Particularité</span>
            <h3 className="cd-mech-title">{characterMechanic.title}</h3>

            {characterMechanic.subtitle && <strong className="cd-mech-sub">{characterMechanic.subtitle}</strong>}

            {mainText && <p className="cd-mech-text">{renderAuraText(mainText)}</p>}

            {characterMechanic.note && (
                <p className="cd-mech-note">{renderAuraText(characterMechanic.note)}</p>
            )}

            {details.length > 0 && (
                <ul className="cd-mech-details">
                    {details.map((detail) => <li key={detail}>{renderAuraText(detail)}</li>)}
                </ul>
            )}

            {characterMechanic.auras?.length > 0 && (
                <div className="cd-aura-list">
                    {characterMechanic.auras.map((aura) => (
                        <article className={`cd-aura cd-aura-${aura.color}`} key={aura.id}>
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
    const previousCharacter = characters[(characterIndex - 1 + characters.length) % characters.length];
    const nextCharacter = characters[(characterIndex + 1) % characters.length];
    const theme = characterThemes[character.id];
    const characterBuilds = builds.filter((build) => build.characterId === character.id);
    const baseSkillTree = classSkills.find((item) => item.characterId === character.id && item.jobStage === "base");
    const characterMechanic = characterMechanics.find((item) => item.characterId === character.id);
    const stats = character.stats;

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
                        <div><div className="k">Âge</div><div className="v">{character.age}</div></div>
                        <div><div className="k">Genre</div><div className="v">{character.gender}</div></div>
                        <div><div className="k">Arme</div><div className="v">{character.weapon}</div></div>
                        <div><div className="k">Type</div><div className="v">{character.type}</div></div>
                        <div><div className="k">Rôle</div><div className="v">{character.role}</div></div>
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
                <section className="cd-overview">
                    <article className="cd-panel">
                        <span className="cd-panel-label">Rôle général</span>
                        <p>{character.description}</p>
                    </article>

                    <article className="cd-panel">
                        <span className="cd-panel-label">Statistiques</span>

                        <div className="cd-stats">

                            {/* Gauche */}
                            <div className="cd-stats-left">
                                <div className="row">
                                    <span className="k">Vitesse</span>
                                    <span className="v">{stats?.speed}</span>
                                </div>

                                <div className="row">
                                    <span className="k">Portée</span>
                                    <span className="v">{stats?.range}</span>
                                </div>

                                <div className="row">
                                    <span className="k">Difficulté</span>
                                    <span className="v">{stats?.difficulty}</span>
                                </div>
                            </div>

                            {/* Droite */}
                            <div className="cd-stats-right">
                                {stats?.pictureType && (
                                    <img
                                        className="attack-icon"
                                        src={stats.pictureType}
                                        alt="type d'attaque"
                                    />
                                )}

                                <span className="attack-value">{stats?.attackType}</span>
                                <span className="attack-label">Type d'attaque</span>
                            </div>

                        </div>
                    </article>
                </section>

                {(baseSkillTree || characterMechanic) && (
                    <section className="detail-section cd-skills">
                        <div className="cd-skills-layout">
                            <div className="cd-skills-tree">
                                {baseSkillTree ? (
                                    <SkillTree data={baseSkillTree} />
                                ) : (
                                    <div className="skill-tree-section">
                                        <h2 className="skill-tree-title">Compétences de base</h2>
                                        <p>Les compétences de base de ce personnage seront ajoutées plus tard.</p>
                                    </div>
                                )}
                            </div>

                            <CharacterMechanicCard characterMechanic={characterMechanic} />
                        </div>
                    </section>
                )}

                <div className="section-header" id="specialisations">
                    <span>Classes</span>
                    <h2>Informations de classes</h2>
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