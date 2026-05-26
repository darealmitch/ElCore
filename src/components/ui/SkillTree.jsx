import { useMemo, useState } from "react";
import { skills, SKILL_TYPE_COLORS, ELSWORD_AURA_COLORS, ELSWORD_AURA_LABELS, SKILL_BADGE_LABELS, SKILL_BADGE_COLORS } from "../../data/skills";

function getSafeLevels(levels) {
    return Array.isArray(levels) ? levels : [];
}
function getLevelCellPosition(level, levels) {
    const safeLevels = getSafeLevels(levels);
    const levelIndex = safeLevels.indexOf(level);
    if (levelIndex < 0 || safeLevels.length === 0) return null;

    return ((levelIndex + 0.5) / safeLevels.length) * 100;
}

function getLevelBoundaryPosition(level, levels) {
    const safeLevels = getSafeLevels(levels);
    const levelIndex = safeLevels.indexOf(level);
    if (levelIndex <= 0 || safeLevels.length === 0) return null;

    return (levelIndex / safeLevels.length) * 100;
}

function getNodePosition(skill, treeSkills, levels) {
    const safeLevels = getSafeLevels(levels);
    const columnStart = skill.type === "passive" ? 60 : 0;
    const columnWidth = skill.type === "passive" ? 40 : 60;
    const y = getLevelCellPosition(skill.level, safeLevels) ?? 50;

    const skillsAtSameLevelAndType = treeSkills.filter((item) => item.level === skill.level && item.type === skill.type);
    const skillIndex = skillsAtSameLevelAndType.findIndex((item) => item.id === skill.id);
    const count = skillsAtSameLevelAndType.length;
    const localX = count <= 1 ? 50 : 18 + (skillIndex / (count - 1)) * 64;
    const x = columnStart + (localX / 100) * columnWidth;

    return { x, y };
}
function getSectionPosition(section, levels) {
    const safeLevels = getSafeLevels(levels);
    const betweenLevels = section.id === "transcendence" ? [65, 70] : section.betweenLevels;

    if (betweenLevels?.length === 2) {
        const startIndex = safeLevels.indexOf(betweenLevels[0]);
        const endIndex = safeLevels.indexOf(betweenLevels[1]);
        if (startIndex < 0 || endIndex < 0 || safeLevels.length === 0) return null;

        return ((startIndex + 1) / safeLevels.length) * 100;
    }

    return getLevelBoundaryPosition(section.level, safeLevels);
}
function renderSkillDescription(description) {
    if (!description) return <p>La description de cette compétence sera ajoutée plus tard.</p>;
    if (typeof description === "string") return <p>{description}</p>;

    return (
        <div className="skill-description-block">
            {description.title && <strong>{description.title}</strong>}
            {description.lines?.map((line) => <p key={line}>{line}</p>)}
        </div>
    );
}
function SkillTreeRows({ data, treeSkills, selectedSkillId, setSelectedSkillId }) {
    const selectedSkill = treeSkills.find((skill) => skill.id === selectedSkillId) || null;
    const selectedSkillBadge = selectedSkill?.badge || (selectedSkill?.level >= 65 ? "hyperActive" : "");

    return (
        <section className="skill-tree-section skill-tree-rows-section">
            <h2 className="skill-tree-title">{data.title || "Skills"}</h2>

            <div className="skill-rows-layout">
                <div className="skill-rows-board classic-look">
                    <div className="skill-rows-headers">
                        <div>Skills</div>
                        <div>Passives</div>
                    </div>

                    <div className="skill-rows-body">
                        {data.levels.map((level) => {
                            const skillsAtLevel = treeSkills.filter((skill) => skill.level === level);
                            const sectionBeforeLevel = data.sections?.find((section) => section.id === "transcendence" && level === 70);

                            return (
                                <div key={level} className="skill-row-group">
                                    {sectionBeforeLevel && (
                                        <div className="skill-row-divider">
                                            <span>{sectionBeforeLevel.label}</span>
                                        </div>
                                    )}

                                    <div className="skill-row">
                                        <div className="skill-row-content">
                                            <div className="skill-row-column">
                                                {skillsAtLevel.filter((skill) => skill.type !== "passive").map((skill) => (
                                                    <button
                                                        key={skill.id}
                                                        type="button"
                                                        className={selectedSkillId === skill.id ? "skill-node row-node active" : "skill-node row-node"}
                                                        style={{
                                                            "--skill-border": SKILL_TYPE_COLORS[skill.type] || "#facc15",
                                                            "--skill-aura": skill.auraType ? ELSWORD_AURA_COLORS[skill.auraType] : "transparent",
                                                        }}
                                                        onClick={() => setSelectedSkillId((currentSkillId) => currentSkillId === skill.id ? null : skill.id)}
                                                        aria-label={skill.nameFr || skill.name}
                                                    >
                                                        <img src={skill.image} alt={skill.nameFr || skill.name} />
                                                        <span className="skill-tooltip">{skill.nameFr || skill.name}</span>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="skill-row-column passive">
                                                {skillsAtLevel.filter((skill) => skill.type === "passive").map((skill) => (
                                                    <button
                                                        key={skill.id}
                                                        type="button"
                                                        className={selectedSkillId === skill.id ? "skill-node row-node active" : "skill-node row-node"}
                                                        style={{
                                                            "--skill-border": SKILL_TYPE_COLORS[skill.type] || "#60a5fa",
                                                            "--skill-aura": skill.auraType ? ELSWORD_AURA_COLORS[skill.auraType] : "transparent",
                                                        }}
                                                        onClick={() => setSelectedSkillId((currentSkillId) => currentSkillId === skill.id ? null : skill.id)}
                                                        aria-label={skill.nameFr || skill.name}
                                                    >
                                                        <img src={skill.image} alt={skill.nameFr || skill.name} />
                                                        <span className="skill-tooltip">{skill.nameFr || skill.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <aside className="skill-tree-levels rows-levels" aria-label="Niveaux" style={{ "--level-count": data.levels.length }}>
                    {data.levels.map((level) => <span key={level}>Lv {level}</span>)}
                </aside>
            </div>

            {selectedSkill && (
                <article className="skill-detail-card">
                    <div>
                        <span>Compétence sélectionnée</span>
                        <h3>{selectedSkill.nameFr || selectedSkill.name}</h3>
                    </div>

                    {selectedSkillBadge && (
                        <p className="skill-detail-badge" style={{ "--skill-badge": SKILL_BADGE_COLORS[selectedSkillBadge] }}>
                            {SKILL_BADGE_LABELS[selectedSkillBadge]}
                        </p>
                    )}

                    {selectedSkill.auraType && (
                        <p className="skill-detail-aura" style={{ "--skill-aura": ELSWORD_AURA_COLORS[selectedSkill.auraType] }}>
                            Cette compétence utilise <strong>{ELSWORD_AURA_LABELS[selectedSkill.auraType]}</strong>
                        </p>
                    )}

                    {renderSkillDescription(selectedSkill.description)}
                </article>
            )}
        </section>
    );
}

function SkillTree({ data }) {
    const [selectedSkillId, setSelectedSkillId] = useState(null);

    const levels = getSafeLevels(data.levels);
    const skillById = useMemo(() => {
        return skills.reduce((acc, skill) => {
            acc[skill.id] = skill;
            return acc;
        }, {});
    }, []);

    const treeSkills = useMemo(() => {
        return data.skillIds
            .map((skillId) => skillById[skillId])
            .filter(Boolean)
            .filter((skill) => {
                const matchesMinLevel = data.minLevel === undefined || skill.level >= data.minLevel;
                const matchesMaxLevel = data.maxLevel === undefined || skill.level <= data.maxLevel;
                return matchesMinLevel && matchesMaxLevel;
            });
    }, [data.skillIds, data.minLevel, data.maxLevel, skillById]);
    const selectedSkill = treeSkills.find((skill) => skill.id === selectedSkillId) || null;
    const selectedSkillBadge = selectedSkill?.badge || (selectedSkill?.level >= 65 ? "hyperActive" : "");
    if (data.layout === "rows") {
        return <SkillTreeRows data={data} treeSkills={treeSkills} selectedSkillId={selectedSkillId} setSelectedSkillId={setSelectedSkillId} />;
    }

    return (
        <section className="skill-tree-section">
            <h2 className="skill-tree-title">{data.title || "Skills"}</h2>

            <div className="skill-tree-layout">
                <div className={data.sections?.length > 0 ? "skill-tree-board has-sections" : "skill-tree-board"}>
                    <div className="skill-tree-columns">
                        {data.columns.map((column) => (
                            <div key={column.id} className={`skill-tree-column skill-tree-column-${column.type}`}>
                                <div className="skill-tree-column-header">{column.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="skill-tree-icons">
                        {data.levels.map((level) => {
                            const levelY = getLevelBoundaryPosition(level, levels);
                            if (levelY === null) return null;

                            return <div className="skill-tree-level-line" key={`line-${level}`} style={{ top: `${levelY}%` }} />;
                        })}
                        {data.sections?.map((section) => {
                            const sectionY = getSectionPosition(section, levels);
                            if (sectionY === null) return null;

                            return (
                                <div className="skill-tree-section-divider" key={section.id} style={{ top: `${sectionY}%` }}>
                                    <span>{section.label}</span>
                                </div>
                            );
                        })}

                        {treeSkills.map((skill) => {
                            const position = getNodePosition(skill, treeSkills, levels);
                            const tooltipDirection = position.y >= 75 ? "left" : "bottom";

                            return (
                                <button
                                    key={skill.id}
                                    type="button"
                                    className={[selectedSkillId === skill.id ? "skill-node active" : "skill-node", tooltipDirection === "left" ? "tooltip-left" : ""].join(" ")}
                                    style={{
                                        left: `${position.x}%`,
                                        top: `calc(${position.y}% + 1.2rem)`,
                                        "--skill-border": SKILL_TYPE_COLORS[skill.type] || "#facc15",
                                        "--skill-aura": skill.auraType ? ELSWORD_AURA_COLORS[skill.auraType] : "transparent",
                                    }}
                                    onClick={() => setSelectedSkillId((currentSkillId) => currentSkillId === skill.id ? null : skill.id)}
                                    aria-label={skill.nameFr || skill.name}
                                >
                                    <img src={skill.image} alt={skill.nameFr || skill.name} />
                                    <span className="skill-tooltip">{skill.nameFr || skill.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <aside className="skill-tree-levels" aria-label="Niveaux" style={{ "--level-count": levels.length }}>
                    {levels.map((level) => <span key={level}>Lv {level}</span>)}
                </aside>
            </div>

            {selectedSkill && (
                <article className="skill-detail-card">
                    <div>
                        <span>Compétence sélectionnée</span>
                        <h3>{selectedSkill.nameFr || selectedSkill.name}</h3>
                    </div>

                    {selectedSkillBadge && (
                        <p className="skill-detail-badge" style={{ "--skill-badge": SKILL_BADGE_COLORS[selectedSkillBadge] }}>
                            {SKILL_BADGE_LABELS[selectedSkillBadge]}
                        </p>
                    )}

                    {selectedSkill.auraType && (
                        <p className="skill-detail-aura" style={{ "--skill-aura": ELSWORD_AURA_COLORS[selectedSkill.auraType] }}>
                            Cette compétence utilise <strong>{ELSWORD_AURA_LABELS[selectedSkill.auraType]}</strong>
                        </p>
                    )}

                    {renderSkillDescription(selectedSkill.description)}
                </article>
            )}
        </section>
    );
}

export default SkillTree;