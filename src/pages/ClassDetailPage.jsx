import { Link, useParams } from "react-router-dom";
import { characters } from "../data/characters";
import BuildCard from "../components/ui/BuildCard";
import { builds } from "../data/builds";
import { classImages } from "../data/classImages";
import { characterThemes } from "../data/characterThemes";
import { masterSymbols } from "../data/masterSymbols";
import { toClassSlug, getClassUrl } from "../utils/classRoutes";
import { contrastTextFor } from "../utils/contrast";
import { classLore } from "../data/classLore";
import { classDescriptions } from "../data/classDescriptions";
import SkillTree from "../components/ui/SkillTree";
import { classSkills } from "../data/skills/index.js";

const stageLabels = {
    job1: "1re Spécialisation",
    job2: "2e Spécialisation",
    job3: "3e Spécialisation",
    master: "Classe de Maître",
};

const stageShort = {
    job1: "01",
    job2: "02",
    job3: "03",
    master: "M",
};

const stageOrder = { job1: 0, job2: 1, job3: 2, master: 3 };

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
        if (requestedMaster) return item.jobStage === "master";
        return item.jobStage !== "master";
    });

    if (!classItem) {
        return (
            <main className="page">
                <section className="page-hero">
                    <span>Erreur</span>
                    <h1>Classe introuvable</h1>
                    <p>La spécialisation demandée n’existe pas encore dans la base ElCore.</p>
                    <Link className="btn-primary" to="/classes">Retour aux classes</Link>
                </section>
            </main>
        );
    }

    const theme = characterThemes[classItem.characterId];
    const masterLogo = classItem.jobStage === "master" ? masterSymbols[classItem.characterId] : null;
    const baseCharacter = characters.find((character) => character.id === classItem.characterId);

    const lineageStages = classImages
        .filter((item) => item.characterId === classItem.characterId && item.pathName === classItem.pathName)
        .sort((a, b) => stageOrder[a.jobStage] - stageOrder[b.jobStage]);

    const skillTree = classSkills.find((item) =>
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

    const relatedBuilds = builds.filter((build) => build.characterId === classItem.characterId && build.className === classItem.className);

    const lore = classLore.find((item) =>
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
    const stats = description?.stats;
    const allPaths = [...new Map(
        classImages.map(item => [
            item.characterId + ":" + item.pathName,
            { characterId: item.characterId, pathName: item.pathName }
        ])
    ).values()];

    const currentPathIndex = allPaths.findIndex(
        p => p.characterId === classItem.characterId &&
            p.pathName === classItem.pathName
    );

    const previousPath =
        allPaths[(currentPathIndex - 1 + allPaths.length) % allPaths.length];

    const nextPath =
        allPaths[(currentPathIndex + 1) % allPaths.length];

    const previousClass = classImages.find(item =>
        item.characterId === previousPath.characterId &&
        item.pathName === previousPath.pathName &&
        item.jobStage === "master"
    );

    const nextClass = classImages.find(item =>
        item.characterId === nextPath.characterId &&
        item.pathName === nextPath.pathName &&
        item.jobStage === "job1"
    );
    return (
        <main className="page" style={{ "--theme-primary": theme.primary, "--theme-contrast": contrastTextFor(theme.primary) }}>
            <section className="class-detail-hero">
                <Link className="class-detail-back" to="/classes">← Retour aux classes</Link>

                <div className="class-detail-main">
                    <div className="class-detail-content">
                        <span className="class-detail-kicker">
                            {stageLabels[classItem.jobStage] || classItem.jobStage}
                        </span>

                        <h1>{classItem.classNameFr || classItem.className}</h1>
                        <span className="class-detail-accent" style={{ background: theme.primary }} aria-hidden="true" />

                        <p className="class-detail-byline">
                            {baseCharacter ? (
                                <Link to={`/personnages/${baseCharacter.id}`}>{classItem.character}</Link>
                            ) : (
                                classItem.character
                            )}
                            {" / Voie "}
                            {classItem.pathNameFr || classItem.pathName}
                        </p>

                        <p className="class-detail-meta">International : {classItem.className}</p>

                        {stats && (
                            <dl className="class-detail-stats">
                                <div>
                                    <dt>Vitesse</dt>
                                    <dd>{stats.speed}</dd>
                                </div>
                                <div>
                                    <dt>Portée</dt>
                                    <dd>{stats.range}</dd>
                                </div>
                                <div>
                                    <dt>Difficulté</dt>
                                    <dd>{stats.difficulty}</dd>
                                </div>
                                <div>
                                    <dt>Type d'attaque</dt>
                                    <dd>
                                        {stats.pictureType && <img src={stats.pictureType} alt="" />}
                                        {stats.attackType}
                                    </dd>
                                </div>
                            </dl>
                        )}

                        {baseCharacter && (
                            <Link className="btn-primary class-detail-character-btn" to={`/personnages/${baseCharacter.id}`}>
                                Voir la fiche de {baseCharacter.name} →
                            </Link>
                        )}
                    </div>

                    <div className="class-detail-visual">
                        {masterLogo && <img className="class-detail-master-symbol" src={masterLogo.image} alt={masterLogo.alt} />}
                        <img className="class-detail-image" src={classItem.localPath} alt={classItem.alt} />
                    </div>
                </div>

                <nav className="class-detail-lineage" aria-label="Progression de la voie">
                    {lineageStages.map((item) => {
                        const isCurrent = item.jobStage === classItem.jobStage;
                        const content = (
                            <>
                                <span className="class-detail-lineage-num">{stageShort[item.jobStage]}</span>
                                <span>{item.classNameFr || item.className}</span>
                            </>
                        );

                        if (isCurrent) {
                            return (
                                <span className="class-detail-lineage-step current" key={item.jobStage} aria-current="page">
                                    {content}
                                </span>
                            );
                        }

                        return (
                            <Link className="class-detail-lineage-step" to={getClassUrl(item)} key={item.jobStage}>
                                {content}
                            </Link>
                        );
                    })}
                </nav>
            </section>

            <nav className="class-detail-flip" aria-label="Navigation entre les classes">
                <Link className="class-flip-link" to={getClassUrl(previousClass)}>
                    ← {previousClass.classNameFr || previousClass.className}
                </Link>

                <Link className="class-flip-link" to={getClassUrl(nextClass)}>
                    {nextClass.classNameFr || nextClass.className} →
                </Link>
            </nav>

            <section className="class-detail-sections">
                {description?.presentation && (
                    <article className="class-detail-card">
                        <span className="class-detail-card-kicker">Présentation</span>
                        {description.title && <h2>{description.title}</h2>}

                        {description.path?.length > 0 && (
                            <p className="class-detail-path">
                                {description.path.map((step, index) => (
                                    <span key={step}>
                                        {step}
                                        {index < description.path.length - 1 && <span className="sep"> → </span>}
                                    </span>
                                ))}
                            </p>
                        )}

                        <p>{description.presentation}</p>

                        {!stats && (description.attackType || description.attackRange) && (
                            <dl className="class-detail-stats">
                                {description.attackType && (
                                    <div>
                                        <dt>Type d'attaque</dt>
                                        <dd>{description.attackType}</dd>
                                    </div>
                                )}
                                {description.attackRange && (
                                    <div>
                                        <dt>Portée d'attaque</dt>
                                        <dd>{description.attackRange}</dd>
                                    </div>
                                )}
                            </dl>
                        )}
                    </article>
                )}

                {lore && (
                    <article className="class-detail-card">
                        <span className="class-detail-card-kicker">Lore</span>
                        <h2>{lore.title}</h2>

                        <p className="class-detail-path">
                            <span>{lore.fromClassFr || lore.fromClass}</span>
                            <span className="sep"> → </span>
                            <span>{lore.toClassFr || lore.toClass}</span>
                        </p>

                        {lore.quote && <blockquote className="class-quote">“{lore.quote}”</blockquote>}
                        <p>{lore.text}</p>

                        {lore.themes?.length > 0 && (
                            <div className="class-detail-tags">
                                {lore.themes.map((item) => <span key={item}>{item}</span>)}
                            </div>
                        )}
                    </article>
                )}

                <article className="class-detail-card">
                    {resolvedSkillTree ? (
                        <SkillTree data={resolvedSkillTree} />
                    ) : (
                        <>
                            <span className="class-detail-card-kicker">Compétences</span>
                            <h2>Compétences</h2>
                            <p>Les compétences principales seront ajoutées quand les données seront prêtes.</p>
                        </>
                    )}
                </article>

                <article className="class-detail-card">
                    <span className="class-detail-card-kicker">Builds</span>
                    <h2>Configurations liées à cette classe</h2>
                    {relatedBuilds.length > 0 ? (
                        <div className="related-builds-grid">
                            {relatedBuilds.map((build) => <BuildCard key={build.id} build={build} />)}
                        </div>
                    ) : (
                        <p>Aucun build n’a encore été ajouté pour cette classe.</p>
                    )}
                </article>
            </section>
        </main>
    );
}

export default ClassDetailPage;
