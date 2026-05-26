import { Link, useParams } from "react-router-dom";
import BuildCard from "../components/ui/BuildCard";
import { builds } from "../data/builds";
import { classImages } from "../data/classImages";
import { characterThemes } from "../data/characterThemes";
import { masterSymbols } from "../data/masterSymbols";
import { toClassSlug, getClassUrl } from "../utils/classRoutes";
import { classLore } from "../data/classLore";
import { classDescriptions } from "../data/classDescriptions";
import SkillTree from "../components/ui/SkillTree";
import { classSkills } from "../data/classSkills";

const stageLabels = {
    job1: "1re Spécialisation",
    job2: "2e Spécialisation",
    job3: "3e Spécialisation",
    master: "Classe de Maître",
};

function getMasterLogo(classItem) {
    if (classItem.jobStage !== "master") return null;

    return masterSymbols[classItem.characterId] || null;
}
function ClassNavigationCard({ item, direction, disabled = false, theme }) {
    const label = direction === "previous" ? "Classe précédente" : "Classe suivante";
    const arrow = direction === "previous" ? "←" : "→";

    if (disabled || !item) {
        return (
            <div className={`class-nav-card ${direction} disabled`}>
                <span className="class-nav-direction">{label}</span>
                <strong>{direction === "previous" ? "Début du catalogue" : "Fin du catalogue"}</strong>
                <small>
                    {direction === "previous"
                        ? "Aucune classe avant celle-ci"
                        : "Aucune classe après celle-ci"}
                </small>
            </div>
        );
    }
    return (
        <Link className={`class-nav-card ${direction}`} to={getClassUrl(item)} style={{borderColor: theme.primary,}}>
            <div className="class-nav-copy">
                <span className="class-nav-direction">{label}</span>
                <strong>{item.classNameFr || item.className}</strong>
                <small>
                    {item.character} — {item.pathNameFr || item.pathName}
                </small>
            </div>
            <div className="class-nav-visual">
                <img src={item.localPath} alt={item.alt} />
            </div>
            <span className="class-nav-arrow" style={{color: theme.primary,}}>
                {arrow}
            </span>
        </Link>
    );
}
function getResolvedSkillIds(skillTree, allSkillTrees) {
    if (!skillTree) return [];

    const inheritedSkillIds = (skillTree.extends || []).flatMap((parentId) => {
        const parentTree = allSkillTrees.find((item) => item.id === parentId);
        return getResolvedSkillIds(parentTree, allSkillTrees);
    });

    return [...new Set([...inheritedSkillIds, ...(skillTree.skillIds || [])])];
}

function ClassDetailPage() {
    const { characterId, classId, stage } = useParams();
    const classItem = classImages.find((item) => {
        const sameCharacter = item.characterId === characterId;
        const sameClass = toClassSlug(item.className) === classId;
        const requestedMaster = stage === "master";

        if (!sameCharacter || !sameClass) return false;

        if (requestedMaster) {
            return item.jobStage === "master";
        }

        return item.jobStage !== "master";
    });
    if (!classItem) {
        return (
            <main className="page">
                <section className="page-hero">
                    <span>Erreur</span>
                    <h1>Classe introuvable</h1>
                    <p>La spécialisation demandée n’existe pas encore dans la base ElCore.</p>
                    <Link className="btn-primary" to="/classes">
                        Retour aux classes
                    </Link>
                </section>
            </main>
        );
    }
    const theme = characterThemes[classItem.characterId];
    const masterLogo = getMasterLogo(classItem);
    const skillTree = classSkills.find(
        (item) =>
            item.characterId === classItem.characterId &&
            item.jobStage === classItem.jobStage &&
            (
                item.className === classItem.className ||
                item.classNameFr === classItem.classNameFr ||
                item.pathName === classItem.pathName ||
                item.pathNameFr === classItem.pathNameFr
            )
    );
    const resolvedSkillTree = skillTree
        ? {
            ...skillTree,
            skillIds: getResolvedSkillIds(skillTree, classSkills),
            masterLogo: masterLogo?.image || skillTree.masterLogo || "",
        }
        : null;
    const relatedBuilds = builds.filter(
        (build) =>
            build.characterId === classItem.characterId &&
            build.className === classItem.className
    );
    const lore = classLore.find(
        (item) =>
            item.characterId === classItem.characterId &&
            item.className === classItem.className &&
            item.jobStage === classItem.jobStage
    );
    const description = classDescriptions.find((item) => {
        const sameCharacter = item.characterId === classItem.characterId;
        const samePath =
            item.pathName === classItem.pathName ||
            item.pathNameFr === classItem.pathNameFr ||
            item.className === classItem.pathName ||
            item.classNameFr === classItem.pathNameFr ||
            item.path?.includes(classItem.className) ||
            item.path?.includes(classItem.classNameFr);
        return sameCharacter && samePath;
    });
    const currentClassIndex = classImages.findIndex(
        (item) =>
            item.characterId === classItem.characterId &&
            item.className === classItem.className &&
            item.jobStage === classItem.jobStage
    );
    const previousClass =
        currentClassIndex > 0 ? classImages[currentClassIndex - 1] : null;
    const nextClass =
        currentClassIndex >= 0 && currentClassIndex < classImages.length - 1
            ? classImages[currentClassIndex + 1]
            : null;

    return (
        <main className="page">
            <section className="class-detail-hero" style={{borderColor: theme.primary, boxShadow: `0 0 38px ${theme.glow}`,}}>
                <Link className="back-link class-detail-back-link" to="/classes">
                    ← Retour aux classes
                </Link>
                <div className="class-detail-content">
                        <span className="class-stage-label class-detail-stage-label" style={{backgroundColor: theme.glow, color: theme.primary,}}>
                            {stageLabels[classItem.jobStage] || classItem.jobStage}
                        </span>
                    <h1 style={{ color: theme.primary }}>
                        {classItem.classNameFr || classItem.className}
                    </h1>
                    <p className="class-detail-subtitle">
                        {classItem.character} — {classItem.pathNameFr || classItem.pathName}
                    </p>
                    <p>
                        Nom international : <strong>{classItem.className}</strong>
                    </p>
                    <p>
                        Cette fiche sert à détailler le rôle, les compétences, les builds,
                        les rotations et les conseils de progression de cette spécialisation.
                    </p>
                </div>
                <div className="class-detail-visual">
                    {masterLogo && (
                        <img
                            className="master-class-logo large"
                            src={masterLogo.image}
                            alt={masterLogo.alt}
                        />
                    )}
                    <img className="class-detail-image" src={classItem.localPath} alt={classItem.alt}/>
                </div>
            </section>
            <section className="detail-grid class-detail-layout">
                <section className="class-detail-navigation">
                    <ClassNavigationCard item={previousClass} direction="previous" disabled={!previousClass} theme={theme}/>
                    <ClassNavigationCard item={nextClass} direction="next" disabled={!nextClass} theme={theme}/>
                </section>
                <article className="detail-card identity-card">
                    <h2>Identité</h2>
                    <div className="detail-stats">
                        <div>
                            <span>Personnage</span>
                            <strong>{classItem.character}</strong>
                        </div>
                        <div>
                            <span>Chemin</span>
                            <strong>{classItem.pathNameFr || classItem.pathName}</strong>
                        </div>
                        <div>
                            <span>Étape</span>
                            <strong>{stageLabels[classItem.jobStage] || classItem.jobStage}</strong>
                        </div>
                        <div>
                            <span>Classe</span>
                            <strong>{classItem.classNameFr || classItem.className}</strong>
                        </div>
                    </div>
                </article>
                <article className="detail-card progression-card">
                    <h2>Progression</h2>
                    <p>
                        Cette fiche appartient au chemin{" "}
                        <strong>{classItem.pathNameFr || classItem.pathName}</strong>.
                        Elle sera utilisée pour afficher l’évolution complète du personnage.
                    </p>
                </article>
                {description && description.presentation && (
                    <article className="detail-card wide class-description-card">
                        {description.title && <h2>{description.title}</h2>}
                        {description.path?.length > 0 && (
                            <div className="class-lore-path">
                                {description.path.map((step, index) => (
                                    <span key={step}>
                                                {step}
                                        {index < description.path.length - 1 ? " → " : ""}
                                            </span>
                                ))}
                            </div>
                        )}
                        <p>{description.presentation}</p>
                        <div className="detail-stats">
                            {description.attackType && (
                                <div>
                                    <span>Type d'attaque</span>
                                    <strong>{description.attackType}</strong>
                                </div>
                            )}
                            {description.attackRange && (
                                <div>
                                    <span>Portée d'attaque</span>
                                    <strong>{description.attackRange}</strong>
                                </div>
                            )}
                        </div>
                    </article>
                )}
                {lore && (
                    <article className="detail-card wide lore-card">
                        <h2>{lore.title}</h2>
                        <div className="class-lore-path">
                            <span>{lore.fromClassFr || lore.fromClass}</span>
                            <span>→</span>
                            <span>{lore.toClassFr || lore.toClass}</span>
                        </div>
                        {lore.quote && (
                            <blockquote className="class-quote">
                                “{lore.quote}”
                            </blockquote>
                        )}
                        <p>{lore.text}</p>
                        {lore.themes?.length > 0 && (
                            <div className="class-lore-tags">
                                {lore.themes.map((theme) => (
                                    <span key={theme}>{theme}</span>
                                ))}
                            </div>
                        )}
                    </article>
                )}
                <article className="detail-card wide builds-card">
                    <h2>Builds liés à cette classe</h2>
                    {relatedBuilds.length > 0 ? (
                        <div className="related-builds-grid">
                            {relatedBuilds.map((build) => (
                                <BuildCard key={build.id} build={build} />
                            ))}
                        </div>
                    ) : (
                        <p>Aucun build n’a encore été ajouté pour cette classe.</p>
                    )}
                </article>
                <article className="detail-card wide skills-card">
                    {resolvedSkillTree ? (
                        <SkillTree data={resolvedSkillTree} />
                    ) : (
                        <>
                            <h2>Compétences</h2>
                            <p>Les compétences principales seront ajoutées quand les données seront prêtes.</p>
                        </>
                    )}
                </article>
            </section>
        </main>
    );
}

export default ClassDetailPage;