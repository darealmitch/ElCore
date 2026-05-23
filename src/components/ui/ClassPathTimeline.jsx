import { Link } from "react-router-dom";
import { classImages } from "../../data/classImages";
import { characterThemes } from "../../data/characterThemes";
import { masterSymbols } from "../../data/masterSymbols";

const stageLabels = {
    job1: "1re Spécialisation",
    job2: "2e Spécialisation",
    job3: "3e Spécialisation",
    master: "Classe de Maître",
};
const stageOrder = ["job1", "job2", "job3", "master"];

function toClassSlug(className) {
    return className.toLowerCase().replaceAll(":", "").replaceAll(" ", "-");
}
function getMasterLogo(stage) {
    if (stage.jobStage !== "master") return null;
    return masterSymbols[stage.characterId] || null;
}
function getClassImagePath(stage) {
    return stage.localPath;
}
function groupClassImagesByPath(characterId) {
    const characterClasses = classImages.filter(
        (item) => item.characterId === characterId
    );
    return characterClasses.reduce((groups, item) => {
        const existingGroup = groups.find(
            (group) => group.pathName === item.pathName
        );
        if (existingGroup) {
            existingGroup.stages.push(item);
            return groups;
        }
        return [
            ...groups,
            {
                pathName: item.pathName,
                pathNameFr: item.pathNameFr,
                stages: [item]
            }
        ];
    }, []);
}
function getClassUrl(classItem) {
    const baseUrl = `/classes/${classItem.characterId}/${toClassSlug(classItem.className)}`;

    if (classItem.jobStage === "master") {
        return `${baseUrl}/master`;
    }

    return baseUrl;
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
                    (a, b) =>
                        stageOrder.indexOf(a.jobStage) - stageOrder.indexOf(b.jobStage)
                );

                return (
                    <article className="class-path-card" key={path.pathName} style={{borderColor: theme.primary, boxShadow: `0 0 24px ${theme.glow}`}}>
                        <div className="class-path-header">
                            <span style={{color: theme.primary}}>Chemin</span>
                            <h3>{path.pathNameFr || path.pathName}</h3>
                        </div>
                        <div className="class-stage-grid">
                            {sortedStages.map((stage) => {
                                const masterLogo = getMasterLogo(stage);
                                const imagePath = getClassImagePath(stage);

                                return (
                                    <Link to={getClassUrl(stage)} className={
                                        stage.jobStage === "master" ? "class-stage-card master-stage" : "class-stage-card"}
                                          key={`${stage.pathName}-${stage.jobStage}`}>
                                        <div className="class-stage-image-wrap">
                                            {masterLogo && (
                                                <img className="master-class-logo" src={masterLogo.image} alt={masterLogo.alt}/>
                                            )}
                                            <img className="class-stage-image" src={imagePath} alt={stage.alt}/>
                                        </div>
                                        <div className="class-stage-content">
                                        <span className="class-stage-label" style={{backgroundColor: theme.glow, color: theme.primary}}>
                                            {stageLabels[stage.jobStage] || stage.jobStage}
                                        </span>
                                            <strong>{stage.classNameFr || stage.className}</strong>
                                            <small>{stage.className}</small>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
export default ClassPathTimeline;