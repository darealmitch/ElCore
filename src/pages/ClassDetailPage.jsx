import { Link, useParams } from "react-router-dom";
import BuildCard from "../components/ui/BuildCard";
import { builds } from "../data/builds";
import { classImages } from "../data/classImages";
import { characterThemes } from "../data/characterThemes";
import { masterSymbols } from "../data/masterSymbols";
import { toClassSlug } from "../utils/classRoutes";
import { classLore } from "../data/classLore";

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

    return (
        <main className="page">
            <section
                className="class-detail-hero"
                style={{
                    borderColor: theme.primary,
                    boxShadow: `0 0 38px ${theme.glow}`,
                }}
            >
                <div className="class-detail-content">
                    <Link className="back-link" to="/classes">
                        ← Retour aux classes
                    </Link>
                    <span className="class-stage-label" style={{backgroundColor: theme.glow, color: theme.primary,}}>
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
                        <img className="master-class-logo large" src={masterLogo.image} alt={masterLogo.alt}/>
                    )}
                    <img className="class-detail-image" src={classItem.localPath} alt={classItem.alt}/>
                </div>
            </section>

            <section className="detail-grid">
                <article className="detail-card">
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
                        {lore && (
                            <article className="detail-card wide">
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
                    </div>
                </article>

                <article className="detail-card wide">
                    <h2>Builds liés</h2>

                    {relatedBuilds.length > 0 ? (
                        <div className="related-builds-grid">
                            {relatedBuilds.map((build) => (
                                <BuildCard key={build.id} build={build} />
                            ))}
                        </div>
                    ) : (
                        <p>Aucun build n’a encore été ajouté pour cette spécialisation.</p>
                    )}
                </article>

                <article className="detail-card">
                    <h2>Compétences</h2>
                    <p>Les compétences principales seront ajoutées quand les données seront prêtes.</p>
                </article>

                <article className="detail-card">
                    <h2>Progression</h2>
                    <p>
                        Cette fiche appartient au chemin{" "}
                        <strong>{classItem.pathNameFr || classItem.pathName}</strong>.
                        Elle sera utilisée pour afficher l’évolution complète du personnage.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default ClassDetailPage;