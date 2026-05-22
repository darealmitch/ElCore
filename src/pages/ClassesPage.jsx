import {useMemo, useState} from "react";
import {classImages} from "../data/classImages";
import {characters} from "../data/characters";
import {characterThemes} from "../data/characterThemes";

const stageLabels = {
    job1: "1re évolution",
    job2: "2e évolution",
    job3: "3e évolution",
    master: "Master Class"
};

function ClassesPage() {
    const [activeCharacter, setActiveCharacter] = useState("all");

    const filteredClasses = useMemo(() => {
        if (activeCharacter === "all") return classImages;
        return classImages.filter((item) => item.characterId === activeCharacter);
    }, [activeCharacter]);

    return (
        <main className="page">
            <section className="page-hero">
                <span>Classes</span>
                <h1>Spécialisations</h1>
                <p>
                    Consulte les chemins d’évolution, spécialisations et Master Class
                    déjà ajoutés à ElCore.
                </p>
            </section>
            <section className="filter-bar">
                <button className={activeCharacter === "all" ? "filter-button active" : "filter-button"}
                        onClick={() => setActiveCharacter("all")}>
                    Tous
                </button>
                {characters.map((character) => (
                    <button key={character.id}
                            className={activeCharacter === character.id ? "filter-button active" : "filter-button"}
                            onClick={() => setActiveCharacter(character.id)}>
                        {character.name}
                    </button>
                ))}
            </section>
            <section className="classes-grid">
                {filteredClasses.map((classItem) => {
                    const theme = characterThemes[classItem.characterId];
                    return (
                        <article className="class-card" key={`${classItem.characterId}-${classItem.pathName}-${classItem.jobStage}`} style={{borderColor: theme.primary, boxShadow: `0 0 20px ${theme.glow}`}}>
                            <div className="class-card-image-wrap">
                                <img className="class-card-image" src={classItem.localPath} alt={classItem.alt}/>
                            </div>
                            <div className="class-card-content">
                                <span className="class-stage-label" style={{backgroundColor: theme.glow, color: theme.primary}}>
                                    {stageLabels[classItem.jobStage] || classItem.jobStage}
                                </span>
                                <h2 style={{color: theme.primary}}>{classItem.className}</h2>
                                <p>{classItem.character} — {classItem.pathName}</p>
                            </div>
                        </article>
                    );
                })}
            </section>
        </main>
    );
}

export default ClassesPage;