export const addClassSkills = [
    {
        id: "add-base",
        characterId: "add",
        className: "Add",
        classNameFr: "Add",
        jobStage: "base",
        title: "Compétences de base",
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        levels: [1, 5, 10, 15, 20],
        skillIds: [
            "add-base-skill1",
            "add-base-skill2",
            "add-base-skill3",
            "add-base-skill4",
            "add-base-skill5",
            "add-base-skill6",
            "add-base-skill7",
            "add-base-passive1",
        ]
    },
    {
        id: "add-tp-skills",
        characterId: "add",
        className: "Psychic Tracer",
        classNameFr: "Traqueur psychique",
        jobStage: "job1",
        title: "Compétences - Traqueur psychique",
        extends: ["add-base"],
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 15,
        levels: [15, 20, 25, 30, 35, 40],
        skillIds: [
            "add-tp-skill1",
            "add-tp-skill2",
            "add-tp-skill3",
            "add-tp-skill4",
            "add-tp-skill5",
            "add-tp-skill6",
            "add-tp-skill7",
            "add-tp-skill8",
        ]
    }
]