import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { classImages } from "../data/classImages";
import { characters } from "../data/characters";
import { characterThemes } from "../data/characterThemes";
import { masterSymbols } from "../data/masterSymbols";
import { getClassUrl } from "../utils/classRoutes";

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

function ClassesPage() {
    const [activeCharacter, setActiveCharacter] = useState("all");
    const [activeStage, setActiveStage] = useState("all");

    const filteredClasses = useMemo(() => {
        return classImages.filter((item) => {
            const matchesCharacter =
                activeCharacter === "all" || item.characterId === activeCharacter;

            const matchesStage =
                activeStage === "all" || item.jobStage === activeStage;

            return matchesCharacter && matchesStage;
        });
    }, [activeCharacter, activeStage]);

    return (
        <main className="page">
            <section className="page-hero">
                <span>Classes</span>
                <h1>Spécialisations</h1>
                <p>
                    Consulte les chemins d’évolution, spécialisations et classes de maître
                    déjà ajoutés à ElCore.
                </p>
            </section>

            <section className="classes-controls">
                <div className="classes-filter-group">
                    <span className="classes-filter-label">Personnage</span>

                    <div className="classes-character-strip" aria-label="Filtrer par personnage">
                        <button
                            className={activeCharacter === "all" ? "filter-chip active" : "filter-chip"}
                            onClick={() => setActiveCharacter("all")}
                        >
                            Tous
                        </button>

                        {characters.map((character) => (
                            <button
                                key={character.id}
                                className={activeCharacter === character.id ? "filter-chip active" : "filter-chip"}
                                onClick={() => setActiveCharacter(character.id)}
                            >
                                {character.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="classes-filter-group">
                    <span className="classes-filter-label">Étape</span>

                    <div className="classes-stage-tabs" aria-label="Filtrer par étape">
                        <button
                            className={activeStage === "all" ? "stage-tab active" : "stage-tab"}
                            onClick={() => setActiveStage("all")}
                        >
                            Toutes
                        </button>

                        {Object.entries(stageLabels).map(([stage, label]) => (
                            <button
                                key={stage}
                                className={activeStage === stage ? "stage-tab active" : "stage-tab"}
                                onClick={() => setActiveStage(stage)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="classes-grid">
                {filteredClasses.map((classItem) => {
                    const theme = characterThemes[classItem.characterId];
                    const masterLogo = getMasterLogo(classItem);

                    return (
                        <Link
                            to={getClassUrl(classItem)}
                            className={classItem.jobStage === "master" ? "class-card master-stage" : "class-card"}
                            key={`${classItem.characterId}-${classItem.pathName}-${classItem.jobStage}`}
                            style={{
                                borderColor: theme.primary,
                            }}
                        >
                            <div className="class-card-image-wrap">
                                {masterLogo && (
                                    <img
                                        className="master-class-logo"
                                        src={masterLogo.image}
                                        alt={masterLogo.alt}
                                    />
                                )}

                                <img
                                    className="class-card-image"
                                    src={classItem.localPath}
                                    alt={classItem.alt}
                                />
                            </div>

                            <div className="class-card-content">
                                <span
                                    className="class-stage-label"
                                    style={{
                                        backgroundColor: theme.glow,
                                        color: theme.primary,
                                    }}
                                >
                                    {stageLabels[classItem.jobStage] || classItem.jobStage}
                                </span>

                                <h2 style={{ color: theme.primary }}>
                                    {classItem.classNameFr || classItem.className}
                                </h2>

                                <p className="class-card-path">
                                    <strong>{classItem.character}</strong>
                                    <span>{classItem.pathNameFr || classItem.pathName}</span>
                                </p>

                                <small className="class-card-international-name">
                                    International : {classItem.className}
                                </small>

                                {masterLogo && (
                                    <small className="master-symbol-name">
                                        Symbole : {masterLogo.nameFr || masterLogo.name}
                                    </small>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </section>
        </main>
    );
}

export default ClassesPage;