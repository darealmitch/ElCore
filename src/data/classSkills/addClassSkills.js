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
            "add-psy-skill2",
            "add-psy-skill3",
            "add-psy-skill4",
            "add-psy-skill5",
            "add-psy-skill6",
            "add-psy-skill7",
            "add-psy-skill8",
            "add-psy-skill9",
            "add-psy-skill10",
            "add-psy-skill11",
            "add-psy-skill12",
            "add-psy-skill13",
            "add-psy-skill14",
            "add-psy-skill15",
            "add-psy-skill16",
            "add-psy-skill17",
            "add-psy-skill18",
            "add-psy-skill19",
        ]

    },
    {
        id: "add-db-skills",
        characterId: "add",
        className: "Domm Bringer",
        classNameFr: "Calamité",
        jobStage: "job3",
        title: "Compétences - Calamité",
        extends: ["add-psy-skills"],
        layout: "rows",
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 15,
        levels: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 99],
        sections: [
            {id: "transcendence", label: "Transcendence", level: 65,},
            {id: "forceSkills", label: "Compétences de force"}
        ],
        skillIds: [
            "add-db-skill1",
            "add-db-skill2",
            "add-db-skill3",
        ],
    },
    /*Calamité Master*/
    {
        id: "add-db-master",
        characterId: "add",
        className: "Domm Bringer",
        classNameFr: "Calamité",
        jobStage: "master",
        title: "Compétences — Calamité",
        layout: "rows",
        extends: ["add-db-skills"],
        minLevel: 1,
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        levels: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 99, "master"],
        sections: [
            {id: "transcendence", label: "Transcendence", level: 65,},
            { id: "masterClass", label: "Classe Maître" },
            { id: "forceSkills", label: "Compétences de force" },
        ],
        skillIds: [
            "add-db-master1",
            "add-db-master2",
            "add-db-master3",
            "add-db-master4",
        ],
    },
    /*Maître de l'IA*/
    {
        id: "add-at-skills",
        characterId: "add",
        className: "Arc Tracer",
        classNameFr: "Maître de l'IA",
        jobStage: "job1",
        title: "Compétences - Maître de l'IA",
        layout: "rows",
        extends: ["add-base"],
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 15,
        levels: [15, 20, 25, 30, 35, 40],
        skillIds: [
            "add-at-skill1",
            "add-at-skill2",
            "add-at-skill3",
            "add-at-skill4",
            "add-at-skill5",
            "add-at-skill6",
            "add-at-skill7",
            "add-at-skill8",
        ]
    },
    /*Machiavel*/
    {
        id: "add-md-skills",
        characterId: "add",
        className: "Mastermind",
        classNameFr: "Machiavel",
        jobStage: "job2",
        title: "Compétences - Machiavel",
        layout: "rows",
        extends: ["add-at-skills"],
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 15,
        levels: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95 ],
        sections: [
            {
                id: "transcendence",
                label: "Transcendence",
                level: 65,
            }
        ],
        skillIds: [
            "add-md-skill1",
            "add-md-skill2",
            "add-md-skill3",
            "add-md-skill4",
            "add-md-skill5",
            "add-md-skill6",
            "add-md-skill7",
            "add-md-skill8",
            "add-md-skill9",
            "add-md-skill10",
            "add-md-skill11",
            "add-md-skill12",
            "add-md-skill13",
            "add-md-skill14",
            "add-md-skill15",
            "add-md-skill16",
            "add-md-skill17",
            "add-md-skill18",
            "add-md-skill19",
        ]
    },
    /*Dominateur*/
    {
        id: "add-dm-skills",
        characterId: "add",
        className: "Dominator",
        classNameFr: "Dominateur",
        jobStage: "job3",
        title: "Compétences - Dominateur",
        layout: "rows",
        extends: ["add-md-skills"],
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 15,
        levels: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 99],
        sections: [
            {id: "transcendence", label: "Transcendence", level: 65,},
            {id: "forceSkills", label: "Compétences de force"}
        ],
        skillIds: [
            "add-dm-skill1",
            "add-dm-skill2",
            "add-dm-skill3",
        ]
    },
    /*Dominateur Master*/
    {
        id: "add-dm-master",
        characterId: "add",
        className: "Dominator",
        classNameFr: "Dominateur",
        jobStage: "master",
        title: "Compétences — Calamité Classe maître",
        layout: "rows",
        extends: ["add-dm-skills"],
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 1,
        levels: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 99, "master"],
        sections: [
            {id: "transcendence", label: "Transcendence", level: 65,},
            { id: "masterClass", label: "Classe Maître" },
            { id: "forceSkills", label: "Compétences de force" },
        ],
        skillIds: [
            "add-dm-master1",
            "add-dm-master2",
            "add-dm-master3",
            "add-dm-master4",
        ]
    }
]