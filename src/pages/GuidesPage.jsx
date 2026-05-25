import { classesSystemGuide } from "../data/classesSystemGuide";

function GuidesPage() {
    const {
        title,
        intro,
        characterOverview = [],
        beginnerRecommendations,
        jobProgression = [],
    } = classesSystemGuide;

    return (
        <main className="page guides-page">
            <section className="page-hero guides-hero">
                <span>Guides</span>
                <h1>{title || "Système de classes"}</h1>
                {intro && <p>{intro}</p>}
            </section>
            {characterOverview.length > 0 && (
                <section className="detail-card wide guide-section">
                    <div className="guide-section-header">
                        <span>Personnages</span>
                        <h2>Les personnages en un coup d'œil</h2>
                    </div>
                    <div className="guide-character-table-wrap">
                        <table className="guide-character-table">
                            <thead>
                            <tr>
                                <th>Personnage</th>
                                <th>Rôle</th>
                                <th>Style de combat</th>
                                <th>Difficulté</th>
                            </tr>
                            </thead>
                            <tbody>
                            {characterOverview.map((character) => (
                                <tr key={character.character}>
                                    <td>{character.character}</td>
                                    <td>{character.role}</td>
                                    <td>{character.combatStyle}</td>
                                    <td>{character.difficulty}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}
            {beginnerRecommendations && (
                <section className="detail-card wide guide-section">
                    <div className="guide-section-header">
                        <span>Débuter</span>
                        <h2>{beginnerRecommendations.title}</h2>
                    </div>
                    <p>{beginnerRecommendations.text}</p>
                </section>
            )}
            {jobProgression.length > 0 && (
                <section className="detail-card wide guide-section">
                    <div className="guide-section-header">
                        <span>Progression</span>
                        <h2>Le système d'avancement de job</h2>
                    </div>
                    <div className="job-progression-list">
                        {jobProgression.map((step) => (
                            <article className="job-progression-card" key={`${step.stage}-${step.level}`}>
                                <div>
                                    <span>{step.level}</span>
                                    <h3>{step.stage}</h3>
                                </div>
                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
export default GuidesPage;