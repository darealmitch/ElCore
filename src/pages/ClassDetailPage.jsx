import { Link, useParams } from "react-router-dom";
import { classImages } from "../data/classImages";
import { characterThemes } from "../data/characterThemes";
import BuildCard from "../components/ui/BuildCard";
import { builds } from "../data/builds";

const stageLabels = {
    job1: "1re Spécialisation",
    job2: "2e Spécialisation",
    job3: "3e Spécialisation",
    master: "Classe de Maître",
};

function ClassDetailPage() {
    const { characterId, classId } = useParams();

    const classItem = classImages.find(
        (item) =>
            item.characterId === characterId &&
            item.className.toLowerCase().replaceAll(":", "").replaceAll(" ", "-") === classId
    );

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
    const relatedBuilds = builds.filter(
        (build) =>
            build.characterId === classItem.characterId &&
            build.className === classItem.className
    );
    return (
        <main className="page">
            <section className="class-detail-hero" style={{borderColor: theme.primary, boxShadow: `0 0 38px ${theme.glow}`}}>
                <div className="class-detail-content">
                    <Link className="back-link" to="/classes">
                        ← Retour aux classes
                    </Link>
                    <span className="class-stage-label" style={{backgroundColor: theme.glow, color: theme.primary}}>
                        {stageLabels[classItem.jobStage] || classItem.jobStage}
                    </span>
                    <h1 style={{ color: theme.primary }}>{classItem.className}</h1>
                    <p className="class-detail-subtitle">
                        {classItem.character}
                    </p>
                    <p>
                        Cette fiche servira à détailler le rôle, les compétences, les builds,
                        les rotations et les conseils de progression de cette spécialisation.
                    </p>
                </div>
                <div className="class-detail-visual">
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
                            <strong>{classItem.pathName}</strong>
                        </div>
                        <div>
                            <span>Étape</span>
                            <strong>{stageLabels[classItem.jobStage] || classItem.jobStage}</strong>
                        </div>
                        <div>
                            <span>Classe</span>
                            <strong>{classItem.className}</strong>
                        </div>
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
                        Cette fiche appartient au chemin <strong>{classItem.pathName}</strong>.
                        Elle sera utilisée pour afficher l’évolution complète du personnage.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default ClassDetailPage;