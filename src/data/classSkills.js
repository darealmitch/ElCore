export const classSkills = [
    {
        id: "elsword-base-skills",
        characterId: "elsword",
        className: "Elsword",
        classNameFr: "Elsword",
        jobStage: "base",
        title: "Compétences de base",
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        levels: [1, 5, 10, 15, 20],
        nodes: [
            {
                skillId: "elsword-base-skill-1",
                type: "active",
                level: 1,
                borderColor: "#facc15",
            },
            {
                skillId: "elsword-base-skill-2",
                type: "active",
                level: 1,
                borderColor: "#e11d48",
            },
            {
                skillId: "elsword-base-passive-1",
                type: "passive",
                level: 5,
                borderColor: "#60a5fa",
            },
        ],
    },
];