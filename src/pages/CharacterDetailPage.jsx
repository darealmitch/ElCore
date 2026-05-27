import { Link, useParams } from "react-router-dom";
import { characters } from "../data/characters";
import { characterThemes } from "../data/characterThemes";
import ClassPathTimeline from "/src/components/ui/ClassPathTimeline";
import BuildCard from "../components/ui/BuildCard";
import { builds } from "../data/builds";
import SkillTree from "../components/ui/SkillTree";
import { elswordClassSkills } from "../data/classSkills/elswordClassSkills.js";
import { characterMechanics } from "../data/characterMechanics";

function renderElswordAuraText(text) {
    if (!text) return null;

    const parts = text.split(/(vitalité|destruction)/gi);

    return parts.map((part, index) => {
        const normalizedPart = part.toLowerCase();

        if (normalizedPart === "vitalité") {
            return (
                <span
                    key={`${part}-${index}`}
                    className="elsword-aura-word vitality"
                >
                    {part}
                </span>
            );
        }

        if (normalizedPart === "destruction") {
            return (
                <span
                    key={`${part}-${index}`}
                    className="elsword-aura-word destruction"
                >
                    {part}
                </span>
            );
        }

        return part;
    });
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
    const theme = characterThemes[character.id];
    const characterBuilds = builds.filter(
        (build) => build.characterId === character.id
    );
    const baseSkillTree = elswordClassSkills.find(
        (item) =>
            item.characterId === character.id &&
            item.jobStage === "base"
    );
    const characterMechanic = characterMechanics.find(
        (item) => item.characterId === character.id
    );

    return (
        <main className="page">
            <section className="character-detail-hero" style={{borderColor: theme.primary, boxShadow: `0 0 40px ${theme.glow}`}}>
                <div className="character-detail-content">
                    <Link className="back-link character-detail-back-link" to="/personnages">← Retour aux personnages</Link>
                    <span className="character-role character-detail-role-badge" style={{backgroundColor: theme.glow, color: theme.primary}}>
                        {character.role}
                    </span>
                    <h1 style={{ color: theme.primary }}>{character.name}</h1>
                    <p className="full-name">{character.fullName}</p>
                    <p className="character-lore">{character.lore}</p>
                </div>
                <div className="character-detail-visual">
                    <img className="character-detail-image" src={character.image} alt={character.name}/>
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
                                <span key={className} className="class-badge" style={{borderColor: theme.primary, color: theme.primary}}>
                                {className}
                            </span>
                            ))}
                        </div>
                    </article>
                    <article className="detail-card">
                        <h2>Classe mise en avant</h2>
                        <p>
                            <strong>{character.featuredClass}</strong> est actuellement mise en avant sur ElCore pour ce personnage.
                        </p>
                    </article>
                    <article className="detail-card">
                        <h2>Rôle général</h2>
                        <p>{character.description}</p>
                    </article>
                </section>
                {baseSkillTree && (
                    <section className="detail-section character-base-skills-section">
                        <article className="detail-card wide skills-card character-skills-card">
                            <div className="character-skills-layout">
                                <SkillTree data={baseSkillTree} />
                                {characterMechanic && (
                                    <aside className="character-mechanic-card">
                                        <span>Particularité</span>
                                        <h3>{characterMechanic.title}</h3>

                                        {characterMechanic.subtitle && (
                                            <strong>{characterMechanic.subtitle}</strong>
                                        )}
                                        <p>{renderElswordAuraText(characterMechanic.text)}</p>
                                        {characterMechanic.note && (
                                            <p className="character-mechanic-note">
                                                {renderElswordAuraText(characterMechanic.note)}
                                            </p>
                                        )}
                                        {characterMechanic.auras?.length > 0 && (
                                            <div className="character-aura-list">
                                                {characterMechanic.auras.map((aura) => (
                                                    <article
                                                        className={`character-aura-card character-aura-card-${aura.color}`}
                                                        key={aura.id}
                                                    >
                                                        <h4>{aura.title}</h4>
                                                        <p>{renderElswordAuraText(aura.description)}</p>

                                                        {aura.bonuses?.length > 0 && (
                                                            <ul>
                                                                {aura.bonuses.map((bonus) => (
                                                                    <li key={bonus}>{bonus}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </article>
                                                ))}
                                            </div>
                                        )}
                                    </aside>
                                )}
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
                        {characterBuilds.map((build) => (
                            <BuildCard key={build.id} build={build} />
                        ))}
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