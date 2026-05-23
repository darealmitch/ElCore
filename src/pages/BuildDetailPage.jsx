import { Link, useParams } from "react-router-dom";
import { builds } from "../data/builds";
import { characterThemes } from "../data/characterThemes";

function BuildDetailPage() {
    const { id } = useParams();
    const build = builds.find((item) => item.id === id);

    if (!build) {
        return (
            <main className="page">
                <section className="page-hero">
                    <span>Erreur</span>
                    <h1>Build introuvable</h1>
                    <p>Le build demandé n’existe pas dans la base ElCore.</p>
                    <Link className="btn-primary" to="/builds">
                        Retour aux builds
                    </Link>
                </section>
            </main>
        );
    }
    const theme = characterThemes[build.characterId];

    return (
        <main className="page">
            <section className="build-detail-hero" style={{borderColor: theme.primary, boxShadow: `0 0 38px ${theme.glow}`}}>
                <Link className="back-link" to="/builds">
                    ← Retour aux builds
                </Link>
                <span className="build-detail-mode" style={{backgroundColor: theme.glow, color: theme.primary}}>
          {build.mode}
        </span>
                <h1 style={{ color: theme.primary }}>{build.title}</h1>

                <p className="build-detail-class">
                    {build.character} — {build.classNameFr || build.className}
                </p>

                <p>Nom international : <strong>{build.className}</strong></p>
                <p>{build.notes}</p>
            </section>
            <section className="build-detail-grid">
                <article className="detail-card">
                    <h2>Résumé</h2>
                    <div className="detail-stats">
                        <div>
                            <span>Rôle</span>
                            <strong>{build.role}</strong>
                        </div>
                        <div>
                            <span>Difficulté</span>
                            <strong>{build.difficulty}</strong>
                        </div>
                        <div>
                            <span>Mode</span>
                            <strong>{build.mode}</strong>
                        </div>
                        <div>
                            <span>Classe</span>
                            <strong>{build.classNameFr || build.className}</strong>
                        </div>
                    </div>
                </article>
                <article className="detail-card">
                    <h2>Stats prioritaires</h2>
                    <div className="pill-list">
                        {(build.statsFr || build.stats).map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </article>
                <article className="detail-card">
                    <h2>Compétences</h2>
                    <div className="pill-list">
                        {(build.skillsFr || build.skills).map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </article>
                <article className="detail-card">
                    <h2>Traits</h2>
                    <ul className="clean-list">
                        {(build.traitsFr || build.traits).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
                <article className="detail-card">
                    <h2>Équipement</h2>
                    <ul className="clean-list">
                        {(build.equipmentFr || build.equipment).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
                <article className="detail-card">
                    <h2>Rotation</h2>
                    <ol className="clean-list">
                        {build.rotation.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </article>
                <article className="detail-card">
                    <h2>Forces</h2>
                    <ul className="clean-list">
                        {build.strengths.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
                <article className="detail-card">
                    <h2>Faiblesses</h2>
                    <ul className="clean-list">
                        {build.weaknesses.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
                <article className="detail-card wide">
                    <h2>Notes de source</h2>
                    <p>{build.sourceNotes}</p>
                </article>
            </section>
        </main>
    );
}

export default BuildDetailPage;