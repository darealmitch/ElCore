import { useMemo, useState } from "react";
import { skills } from "../../data/skills/index.js";
import { SKILL_TYPE_COLORS, ELSWORD_AURA_COLORS, ELSWORD_AURA_LABELS, SKILL_BADGE_LABELS, SKILL_BADGE_COLORS, FORCE_SKILL_RARITY_LABELS, FORCE_SKILL_RARITY_COLORS } from "../../data/skillConstants.js";
import { transcendenceGuide } from "../../data/transcendenceGuide";
import { masterClassGuide } from "../../data/masterClassGuide";
import { forceSkillGuide } from "../../data/forceSkillGuide";

const skillSystemGuides = {
    transcendence: transcendenceGuide,
    masterClass: masterClassGuide,
    forceSkills: forceSkillGuide,
};

function getGuideForSection(section, data) {
    const guide = skillSystemGuides[section.id];
    if (!guide) return null;
    if (section.id === "masterClass" && data.masterLogo) return { ...guide, logo: data.masterLogo };
    return guide;
}

function formatLevelLabel(level) {
    return level === "master" ? "Classe Maître" : `Level ${level}`;
}

function getRowTooltipDirection(level, index) {
    if (level === "master") return index === 0 ? "top-right" : "top";
    if (typeof level === "number" && (level === 40 || level >= 90)) return "left";
    return "";
}

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
function getSkillColumnType(skill) {
    return skill.type === "passive" ? "passive" : "active";
}
function getNodePosition(skill, treeSkills, levels) {
    const safeLevels = getSafeLevels(levels);
    const skillColumnType = getSkillColumnType(skill);
    const columnStart = skillColumnType === "passive" ? 60 : 0;
    const columnWidth = skillColumnType === "passive" ? 40 : 60;
    const y = getLevelCellPosition(skill.level, safeLevels) ?? 50;
    const skillsAtSameLevelAndColumn = treeSkills.filter((item) => item.level === skill.level && getSkillColumnType(item) === skillColumnType);
    const skillIndex = skillsAtSameLevelAndColumn.findIndex((item) => item.id === skill.id);
    const count = skillsAtSameLevelAndColumn.length;
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

function SkillButton({ skill, isActive, tooltipDirection = "", className, onClick, style = {} }) {
    return (
        <button type="button" className={[className, isActive ? "active" : "", tooltipDirection ? `tooltip-${tooltipDirection}` : ""].join(" ")}
                style={{ ...style, "--skill-border": SKILL_TYPE_COLORS[skill.type] || "#facc15", "--skill-aura": skill.auraType ? ELSWORD_AURA_COLORS[skill.auraType] : "transparent" }}
                onClick={onClick}
                aria-label={skill.nameFr || skill.name}>
            <img src={skill.image} alt={skill.nameFr || skill.name} loading="lazy" />
            <span className="skill-tooltip">{skill.nameFr || skill.name}</span>
        </button>
    );
}

function SkillDetailCard({ selectedSkill }) {
    if (!selectedSkill) return null;
    const selectedSkillBadge = selectedSkill.badge || (selectedSkill.level === 65 ? "hyperActive" : "");

    return (
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
            {selectedSkill.rarity && (
                <p className="skill-detail-rarity" style={{ "--skill-rarity": FORCE_SKILL_RARITY_COLORS[selectedSkill.rarity] }}>
                    {FORCE_SKILL_RARITY_LABELS[selectedSkill.rarity]}
                </p>
            )}
            {selectedSkill.auraType && (
                <p className="skill-detail-aura" style={{ "--skill-aura": ELSWORD_AURA_COLORS[selectedSkill.auraType] }}>
                    Cette compétence utilise <strong>{ELSWORD_AURA_LABELS[selectedSkill.auraType]}</strong>
                </p>
            )}
            {renderSkillDescription(selectedSkill.description)}
        </article>
    );
}

function SkillTreeRows({ data, treeSkills, guideSkills, selectedSkillId, setSelectedSkillId }) {
    const levels = getSafeLevels(data.levels);
    const visibleGuides = (data.sections || []).map((section) => getGuideForSection(section, data)).filter(Boolean);
    const selectedTreeSkill = treeSkills.find((skill) => skill.id === selectedSkillId) || null;
    const selectedGuideSkill = guideSkills.find((skill) => skill.id === selectedSkillId) || null;

    return (
        <section className="skill-tree-section skill-tree-rows-section">
            <h2 className="skill-tree-title">{data.title || "Skills"}</h2>

            <div className={visibleGuides.length ? "skill-rows-with-summary" : "skill-rows-with-summary no-summary"}>
                <div className="skill-rows-layout">
                    <div className="skill-rows-board classic-look">
                        <div className="skill-rows-headers">
                            <div>Skills</div>
                            <div>Passives</div>
                        </div>

                        <div className="skill-rows-body">
                            {levels.map((level) => {
                                const skillsAtLevel = treeSkills.filter((skill) => skill.level === level);
                                const sectionBeforeLevel = data.sections?.find((section) => section.id === "transcendence" && level === 70);

                                return (
                                    <div key={level} className={level === "master" ? "skill-row-group master-row-group" : "skill-row-group"}>
                                        {sectionBeforeLevel && (
                                            <div className="skill-row-divider">
                                                <span>
                                                    {getGuideForSection(sectionBeforeLevel, data)?.logo && <img src={getGuideForSection(sectionBeforeLevel, data).logo} alt="" />}
                                                    {sectionBeforeLevel.label}
                                                </span>
                                            </div>
                                        )}

                                        <div className="skill-row">
                                            <div className={level === "master" ? "skill-row-content master-row-content" : "skill-row-content"}>
                                                <div className="skill-row-column">
                                                    {skillsAtLevel.filter((skill) => skill.type !== "passive").map((skill, index) => {
                                                        const tooltipDirection = getRowTooltipDirection(level, index);
                                                        return (
                                                            <SkillButton key={skill.id} skill={skill} isActive={selectedSkillId === skill.id} tooltipDirection={tooltipDirection} className="skill-node row-node" onClick={() => setSelectedSkillId((currentSkillId) => currentSkillId === skill.id ? null : skill.id)} />
                                                        );
                                                    })}
                                                </div>

                                                <div className="skill-row-column passive">
                                                    {skillsAtLevel.filter((skill) => skill.type === "passive").map((skill, index) => {
                                                        const tooltipDirection = getRowTooltipDirection(level, index);
                                                        return (
                                                            <SkillButton key={skill.id} skill={skill} isActive={selectedSkillId === skill.id} tooltipDirection={tooltipDirection} className="skill-node row-node" onClick={() => setSelectedSkillId((currentSkillId) => currentSkillId === skill.id ? null : skill.id)} />
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <aside className="skill-tree-levels rows-levels" aria-label="Niveaux" style={{ "--level-count": levels.length }}>
                        {levels.map((level) => <span key={level}>{formatLevelLabel(level)}</span>)}
                    </aside>
                </div>

                {visibleGuides.length > 0 && (
                    <aside className="skill-system-summary-list">
                        {visibleGuides.map((guide) => {
                            const guideSelectedSkill = guide.detailsSkills?.find((skill) => skill.id === selectedGuideSkill?.id) || null;

                            return (
                                <article className="skill-system-summary-card" key={guide.title}>
                                    <div className="skill-system-summary-header">
                                        {guide.logo && <img src={guide.logo} alt="" />}
                                        <div>
                                            <span>Particularité</span>
                                            <h3>{guide.title}</h3>
                                        </div>
                                    </div>
                                    <p>{guide.summary}</p>
                                    {guide.detailsSkills?.length > 0 && (
                                        <>
                                            <div className="skill-system-guide-skills">
                                                {guide.detailsSkills.map((skill) => (
                                                    <button
                                                        key={skill.id}
                                                        type="button"
                                                        className={selectedSkillId === skill.id ? "skill-node guide-skill-node active" : "skill-node guide-skill-node"}
                                                        style={{ "--skill-border": SKILL_TYPE_COLORS[skill.type] || "#22c55e", "--skill-aura": "transparent", "--skill-rarity": skill.rarity ? FORCE_SKILL_RARITY_COLORS[skill.rarity] : "transparent" }}
                                                        onClick={() => setSelectedSkillId((currentSkillId) => currentSkillId === skill.id ? null : skill.id)}
                                                        aria-label={skill.nameFr || skill.name}
                                                    >
                                                        <img src={skill.image} alt={skill.nameFr || skill.name} />
                                                        <span className="skill-tooltip">{skill.nameFr || skill.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            <SkillDetailCard selectedSkill={guideSelectedSkill} />
                                        </>
                                    )}
                                </article>
                            );
                        })}
                    </aside>
                )}
            </div>
            <SkillDetailCard selectedSkill={selectedTreeSkill} />
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
                if (typeof skill.level !== "number") return true;
                const matchesMinLevel = data.minLevel === undefined || skill.level >= data.minLevel;
                const matchesMaxLevel = data.maxLevel === undefined || skill.level <= data.maxLevel;
                return matchesMinLevel && matchesMaxLevel;
            });
    }, [data.skillIds, data.minLevel, data.maxLevel, skillById]);

    const guideSkills = useMemo(() => {
        return (data.sections || []).map((section) => getGuideForSection(section, data)).filter(Boolean).flatMap((guide) => guide.detailsSkills || []);
    }, [data.sections, data]);

    const selectedSkill = treeSkills.find((skill) => skill.id === selectedSkillId) || null;

    if (data.layout === "rows") {
        return <SkillTreeRows data={data} treeSkills={treeSkills} guideSkills={guideSkills} selectedSkillId={selectedSkillId} setSelectedSkillId={setSelectedSkillId} />;
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
                        {levels.map((level) => {
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
                            const isRightSideSkill = position.x >= 50;
                            const isBaseTree = data.jobStage === "base";
                            const tooltipDirection = isBaseTree && skill.level === 20 ? "left" : position.y >= 75 && isRightSideSkill ? "left" : "";

                            return <SkillButton key={skill.id} skill={skill} isActive={selectedSkillId === skill.id} tooltipDirection={tooltipDirection} className="skill-node" onClick={() => setSelectedSkillId((currentSkillId) => currentSkillId === skill.id ? null : skill.id)} style={{ left: `${position.x}%`, top: `${position.y}%` }} />;

                        })}
                    </div>
                </div>

                <aside className="skill-tree-levels" aria-label="Niveaux" style={{ "--level-count": levels.length }}>
                    {levels.map((level) => <span key={level}>{formatLevelLabel(level)}</span>)}
                </aside>
            </div>

            <SkillDetailCard selectedSkill={selectedSkill} />
        </section>
    );
}

export default SkillTree;