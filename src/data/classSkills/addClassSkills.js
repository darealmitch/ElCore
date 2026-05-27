export const addClassSkills = [
    {
        id: "add-base",
        characterId: "add",
        className: "Add",
        classNameFr: "Add",
        jobStage: "base",
        title: "Compétences de base",
        layout: "rows",
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
        layout: "rows",
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
    },
    {
        id: "add-psy-skills",
        characterId: "add",
        className: "Lunatic Psyker",
        classNameFr: "Psychopathe",
        jobStage: "job2",
        title: "Compétences - Psychopathe",
        extends: ["add-tp-skills"],
        layout:"rows",
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 35,
        levels: [35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95 ],
        sections: [
            {
                id: "transcendence",
                label: "Transcendence",
                level: 65,
            }
        ],
        skillIds: [
            "add-psy-skill1",
            "add-tp-skill2",
            "add-tp-skill3",
            "add-tp-skill4",
            "add-tp-skill5",
            "add-tp-skill6",
            "add-tp-skill7",
            "add-tp-skill8",
            "add-tp-skill9",
            "add-tp-skill10",
            "add-tp-skill11",
            "add-tp-skill12",
            "add-tp-skill13",
            "add-tp-skill14",
            "add-tp-skill15",
            "add-tp-skill16",
            "add-tp-skill17",
            "add-tp-skill18",
            "add-tp-skill19",
        ]

    }
]