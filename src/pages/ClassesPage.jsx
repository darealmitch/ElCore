import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { classImages } from "../data/classImages";
import { characters } from "../data/characters";
import { characterThemes } from "../data/characterThemes";
import { masterSymbols } from "../data/masterSymbols";
import { getClassUrl } from "../utils/classRoutes";
import { contrastTextFor } from "../utils/contrast";

const stageTags = {
    job1: "01 / 1re spé",
    job2: "02 / 2e spé",
    job3: "03 / 3e spé",
    master: "M / Maître",
};

const stageOrder = { job1: 0, job2: 1, job3: 2, master: 3 };

const characterSections = characters
    .map((character, index) => {
        const entries = classImages.filter((item) => item.characterId === character.id);
        const voies = [];

        entries.forEach((item) => {
            let voie = voies.find((v) => v.pathName === item.pathName);

            if (!voie) {
                voie = {
                    pathName: item.pathName,
                    pathNameFr: item.pathNameFr,
                    number: String(voies.length + 1).padStart(2, "0"),
                    stages: [],
                };
                voies.push(voie);
            }

            voie.stages.push(item);
        });

        voies.forEach((voie) => {
            voie.stages.sort((a, b) => stageOrder[a.jobStage] - stageOrder[b.jobStage]);
        });

        return {
            character,
            number: String(index + 1).padStart(2, "0"),
            voies,
            classCount: entries.length,
        };
    })
    .filter((section) => section.voies.length > 0);

const totalVoies = characterSections.reduce((sum, section) => sum + section.voies.length, 0);

function normalize(text) {
    return (text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function ClassesPage() {
    const [query, setQuery] = useState("");
    const [activeCharacter, setActiveCharacter] = useState(characterSections[0]?.character.id);
    const sectionRefs = useRef({});

    const visibleSections = useMemo(() => {
        const needle = normalize(query.trim());

        if (!needle) return characterSections;

        return characterSections
            .map((section) => ({
                ...section,
                voies: section.voies.filter((voie) =>
                    normalize(voie.pathNameFr || voie.pathName).includes(needle) ||
                    voie.stages.some(
                        (stage) =>
                            normalize(stage.classNameFr).includes(needle) ||
                            normalize(stage.className).includes(needle)
                    )
                ),
            }))
            .filter((section) => section.voies.length > 0);
    }, [query]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCharacter(entry.target.dataset.characterId);
                    }
                });
            },
            { rootMargin: "-25% 0px -65% 0px" }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [visibleSections]);

    const jumpToCharacter = (characterId) => {
        setActiveCharacter(characterId);
        sectionRefs.current[characterId]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main className="page">
            <section className="page-hero">
                <span>Classes</span>
                <h1>Spécialisations</h1>
                <p className="classes-hero-count">
                    {characterSections.length} personnages — {totalVoies} voies — {classImages.length} classes
                </p>
            </section>

            <nav className="classes-index" aria-label="Aller à un personnage">
                <div className="classes-index-strip">
                    {characterSections.map((section) => {
                        const theme = characterThemes[section.character.id];

                        return (
                            <button
                                key={section.character.id}
                                className={
                                    activeCharacter === section.character.id
                                        ? "classes-index-item active"
                                        : "classes-index-item"
                                }
                                style={{
                                    "--theme-primary": theme.primary,
                                    "--theme-contrast": contrastTextFor(theme.primary),
                                }}
                                onClick={() => jumpToCharacter(section.character.id)}
                            >
                                <span>{section.number}</span> {section.character.name}
                            </button>
                        );
                    })}
                </div>

                <input
                    className="classes-search"
                    type="search"
                    placeholder="Rechercher une classe"
                    aria-label="Rechercher une classe"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </nav>

            {visibleSections.map((section) => {
                const theme = characterThemes[section.character.id];

                return (
                    <section
                        key={section.character.id}
                        className="lineage-section"
                        data-character-id={section.character.id}
                        style={{
                            "--theme-primary": theme.primary,
                            "--theme-contrast": contrastTextFor(theme.primary),
                        }}
                        ref={(el) => (sectionRefs.current[section.character.id] = el)}
                    >
                        <header className="lineage-section-head">
                            <span className="lineage-section-number">{section.number}</span>

                            <div className="lineage-section-title">
                                <h2>{section.character.name}</h2>
                                <span
                                    className="lineage-section-accent"
                                    style={{ background: theme.primary }}
                                    aria-hidden="true"
                                />
                            </div>

                            <span className="lineage-section-meta">
                                {section.voies.length} {section.voies.length > 1 ? "voies" : "voie"} — {section.classCount} classes
                            </span>
                        </header>

                        {section.voies.map((voie) => (
                            <article className="lineage" key={voie.pathName}>
                                <div className="lineage-head">
                                    <span className="lineage-name">
                                        Voie {voie.number} / {voie.pathNameFr || voie.pathName}
                                    </span>
                                    <span className="lineage-steps" aria-hidden="true">
                                        01 → 02 → 03 → M
                                    </span>
                                </div>

                                <div className="lineage-row">
                                    {voie.stages.map((stage, stageIndex) => {
                                        const masterSymbol =
                                            stage.jobStage === "master" ? masterSymbols[stage.characterId] : null;

                                        return (
                                            <Fragment key={stage.jobStage}>
                                                {stageIndex > 0 && (
                                                    <span className="lineage-connector" aria-hidden="true" />
                                                )}

                                                <Link
                                                    to={getClassUrl(stage)}
                                                    className={
                                                        stage.jobStage === "master"
                                                            ? "lineage-card master"
                                                            : "lineage-card"
                                                    }
                                                >
                                                    <div className="lineage-card-image">
                                                        {masterSymbol && (
                                                            <img
                                                                className="lineage-master-symbol"
                                                                src={masterSymbol.image}
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        )}

                                                        <img
                                                            className="lineage-card-render"
                                                            src={stage.localPath}
                                                            alt={stage.alt}
                                                            loading="lazy"
                                                        />
                                                    </div>

                                                    <div className="lineage-card-footer">
                                                        <span className="lineage-card-stage">
                                                            {stageTags[stage.jobStage] || stage.jobStage}
                                                        </span>
                                                        <span className="lineage-card-name">
                                                            {stage.classNameFr || stage.className}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </Fragment>
                                        );
                                    })}
                                </div>
                            </article>
                        ))}
                    </section>
                );
            })}

            {visibleSections.length === 0 && (
                <p className="classes-empty">Aucune classe ne correspond à « {query.trim()} ».</p>
            )}
        </main>
    );
}

export default ClassesPage;
