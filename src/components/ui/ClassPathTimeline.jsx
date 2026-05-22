import { classImages } from "/src/data/classImages.js";
import { characterThemes } from "/src/data/characterThemes";
import { Link } from "react-router-dom";

const stageLabels = {
    job1: "1re évolution",
    job2: "2e évolution",
    job3: "3e évolution",
    master: "Master Class"
};

const stageOrder = ["job1", "job2", "job3", "master"];
function toClassSlug(className) {
    return className.toLowerCase().replaceAll(":", "").replaceAll(" ", "-");
}
function groupClassImagesByPath(characterId) {
    const characterClasses = classImages.filter((item) => item.characterId === characterId);

    return characterClasses.reduce((groups, item) => {
        const existingGroup = groups.find((group) => group.pathName === item.pathName);
        if (existingGroup) {
            existingGroup.stages.push(item);
            return groups;
        }
        return [
            ...groups,
            {
                pathName: item.pathName,
                stages: [item]
            }
        ];
    }, []);
}
function ClassPathTimeline({ characterId }) {
    const theme = characterThemes[characterId];
    const paths = groupClassImagesByPath(characterId);
    if (paths.length === 0) {
        return (
            <article className="detail-card">
                <h2>Chemins de spécialisation</h2>
                <p>Aucune spécialisation n’a encore été ajoutée pour ce personnage.</p>
            </article>
        );
    }
    return (
        <section className="class-paths-section">
            {paths.map((path) => {
                const sortedStages = [...path.stages].sort(
                    (a, b) => stageOrder.indexOf(a.jobStage) - stageOrder.indexOf(b.jobStage)
                );
                return (
                    <article className="class-path-card" key={path.pathName}
                        style={{borderColor: theme.primary, boxShadow: `0 0 24px ${theme.glow}`}}>
                        <div className="class-path-header">
                            <span style={{color: theme.primary}}>Chemin</span>
                            <h3>{path.pathName}</h3>
                        </div>
                        <div className="class-stage-grid">
                            {sortedStages.map((stage) => (
                                <Link to={`/classes/${stage.characterId}/${toClassSlug(stage.className)}`} className="class-stage-card" key={`${stage.pathName}-${stage.jobStage}`}>
                                    <div className="class-stage-image-wrap">
                                        <img className="class-stage-image" src={stage.localPath} alt={stage.alt}/>
                                    </div>
                                <div className="class-stage-content">
                    <span className="class-stage-label" style={{backgroundColor: theme.glow, color: theme.primary}}>
                      {stageLabels[stage.jobStage] || stage.jobStage}
                    </span>
                                    <strong>{stage.className}</strong>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default ClassPathTimeline