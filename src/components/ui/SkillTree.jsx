import { useMemo, useState } from "react";
import { skills } from "../../data/skills";

function getNodePosition(node, nodes, levels) {
    const columnStart = node.type === "passive" ? 60 : 0;
    const columnWidth = node.type === "passive" ? 40 : 60;

    const levelIndex = levels.indexOf(node.level);
    const safeLevelIndex = levelIndex >= 0 ? levelIndex : 0;

    const y =
        levels.length > 1
            ? 10 + (safeLevelIndex / (levels.length - 1)) * 80
            : 50;

    const nodesAtSameLevelAndType = nodes.filter(
        (item) => item.level === node.level && item.type === node.type
    );

    const nodeIndex = nodesAtSameLevelAndType.findIndex(
        (item) => item.skillId === node.skillId
    );

    const count = nodesAtSameLevelAndType.length;

    const localX =
        count <= 1
            ? 50
            : 18 + (nodeIndex / (count - 1)) * 64;

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

    const selectedNode = data.nodes.find(
        (node) => node.skillId === selectedSkillId
    );

    const selectedSkill = selectedNode
        ? skillById[selectedNode.skillId]
        : null;

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
                        {data.nodes.map((node) => {
                            const skill = skillById[node.skillId];

                            if (!skill) return null;

                            const position = getNodePosition(
                                node,
                                data.nodes,
                                data.levels
                            );

                            return (
                                <button
                                    key={node.skillId}
                                    type="button"
                                    className={
                                        selectedSkillId === node.skillId
                                            ? "skill-node active"
                                            : "skill-node"
                                    }
                                    style={{
                                        left: `${position.x}%`,
                                        top: `${position.y}%`,
                                        "--skill-border": node.borderColor || "#facc15",
                                    }}
                                    onClick={() => setSelectedSkillId(node.skillId)}
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