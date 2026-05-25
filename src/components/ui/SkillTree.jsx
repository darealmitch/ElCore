import { useMemo, useState } from "react";
import { skills, SKILL_TYPE_COLORS } from "../../data/skills";

function getNodePosition(skill, treeSkills, levels) {
    const columnStart = skill.type === "passive" ? 60 : 0;
    const columnWidth = skill.type === "passive" ? 40 : 60;

    const levelIndex = levels.indexOf(skill.level);
    const safeLevelIndex = levelIndex >= 0 ? levelIndex : 0;

    const y =
        levels.length > 1
            ? 10 + (safeLevelIndex / (levels.length - 1)) * 80
            : 50;

    const skillsAtSameLevelAndType = treeSkills.filter(
        (item) => item.level === skill.level && item.type === skill.type
    );

    const skillIndex = skillsAtSameLevelAndType.findIndex(
        (item) => item.id === skill.id
    );

    const count = skillsAtSameLevelAndType.length;

    const localX =
        count <= 1
            ? 50
            : 18 + (skillIndex / (count - 1)) * 64;

    const x = columnStart + (localX / 100) * columnWidth;

    return { x, y };
}

function SkillTree({ data }) {
    const [selectedSkillId, setSelectedSkillId] = useState(null);

    const skillById = useMemo(() => {
        return skills.reduce((acc, skill) => {
            acc[skill.id] = skill;
            return acc;
        }, {});
    }, []);

    const treeSkills = useMemo(() => {
        return data.skillIds
            .map((skillId) => skillById[skillId])
            .filter(Boolean);
    }, [data.skillIds, skillById]);

    const selectedSkill =
        treeSkills.find((skill) => skill.id === selectedSkillId) || null;

    return (
        <section className="skill-tree-section">
            <h2 className="skill-tree-title">{data.title || "Skills"}</h2>

            <div className="skill-tree-layout">
                <div className="skill-tree-board">
                    <div className="skill-tree-columns">
                        {data.columns.map((column) => (
                            <div
                                key={column.id}
                                className={`skill-tree-column skill-tree-column-${column.type}`}
                            >
                                <div className="skill-tree-column-header">
                                    {column.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="skill-tree-icons">
                        {treeSkills.map((skill) => {
                            const position = getNodePosition(
                                skill,
                                treeSkills,
                                data.levels
                            );

                            return (
                                <button
                                    key={skill.id}
                                    type="button"
                                    className={
                                        selectedSkillId === skill.id
                                            ? "skill-node active"
                                            : "skill-node"
                                    }
                                    style={{
                                        left: `${position.x}%`,
                                        top: `${position.y}%`,
                                        "--skill-border":
                                            SKILL_TYPE_COLORS[skill.type] || "#facc15",
                                    }}
                                    onClick={() => setSelectedSkillId(skill.id)}
                                    aria-label={skill.nameFr || skill.name}
                                >
                                    <img
                                        src={skill.image}
                                        alt={skill.nameFr || skill.name}
                                    />

                                    <span className="skill-tooltip">
                                        {skill.nameFr || skill.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <aside className="skill-tree-levels" aria-label="Niveaux">
                    {data.levels.map((level) => (
                        <span key={level}>Lv {level}</span>
                    ))}
                </aside>
            </div>

            {selectedSkill && (
                <article className="skill-detail-card">
                    <div>
                        <span>Compétence sélectionnée</span>
                        <h3>{selectedSkill.nameFr || selectedSkill.name}</h3>
                    </div>

                    {selectedSkill.description ? (
                        <p>{selectedSkill.description}</p>
                    ) : (
                        <p>La description de cette compétence sera ajoutée plus tard.</p>
                    )}
                </article>
            )}
        </section>
    );
}

export default SkillTree;