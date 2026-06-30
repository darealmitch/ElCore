export const ravenClassSkills = [
    {
        id: "raven-base",
        characterId: "raven",
        className: "Raven",
        classNameFr: "Raven",
        jobStage: "base",
        title: "Compétences de base",
        layout: "rows",
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        levels: [1, 5, 10, 15, 20],
        skillIds: [
            "raven-skill-1",
            "raven-skill-2",
            "raven-skill-3",
            "raven-skill-4",
            "raven-skill-5",
            "raven-skill-6",
            "raven-skill-7",
            "raven-base-passive1",
        ]
    },
    {
        id: "raven-st-skills",
        characterId: "raven",
        className: "Sword Taker",
        classNameFr: "Porteur d'épée",
        jobStage: "job1",
        title: "Compétences - Porteur d'épée",
        layout: "rows",
        extends: ["raven-base"],
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        minLevel: 15,
        levels: [15, 20, 25, 30, 35, 40],
        skillIds: [
            "raven-st-skill-1",
            "raven-st-skill-2",
            "raven-st-skill-3",
            "raven-st-skill-4",
            "raven-st-skill-5",
            "raven-st-skill-6",
            "raven-st-skill-7",
            "raven-st-skill-8",
        ]
    },
    {
        id: "raven-bm-skills",
        characterId: "raven",
        className: "Blade Master",
        classNameFr: "Maître de l'épée",
        jobStage: "job2",
        title: " Compétences - Maître de l'épée",
        extends: ["raven-st-skills"],
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
            "raven-bm-skill1",
            "raven-bm-skill2",
            "raven-bm-skill3",
            "raven-bm-skill4",
            "raven-bm-skill5",
            "raven-bm-skill6",
            "raven-bm-skill7",
            "raven-bm-skill8",
            "raven-bm-skill9",
            "raven-bm-skill10",
            "raven-bm-skill11",
            "raven-bm-skill12",
            "raven-bm-skill13",
            "raven-bm-skill14",
            "raven-bm-skill15",
            "raven-bm-skill16",
            "raven-bm-skill17",
            "raven-bm-skill18",
            "raven-bm-skill19",
        ]
    },
    {
        id: "raven-fb-skills",
        characterId: "raven",
        className: "Furious Blade",
        classNameFr: "Lame furieuse",
        jobStage: "job3",
        title: "Compétences — Lame furieuse",
        layout: "rows",
        extends: ["raven-bm-skills"],
        minLevel: 15,
        columns: [
            { id: "active", label: "Skills", type: "active" },
            { id: "passive", label: "Passives", type: "passive" },
        ],
        levels: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 99],
        sections: [
            {id: "transcendence", label: "Transcendence", level: 65,},
            {id: "forceSkills", label: "Compétences de force"}
        ],
        skillIds: [
            "raven-fb-skill1",
            "raven-fb-skill2",
            "raven-fb-skill3",
        ]
    },
    {
        id: "raven-fb-master",
        characterId: "raven",
        className: "Blade Master",
        classNameFr: "Lame furieuse",
        jobStage: "master",
        title: "Compétences — Lame furieuse Classe Master",
        layout: "rows",
        extends: ["raven-fb-skills"],
        minLevel: 1,
        levels: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 99, "master"],
        sections: [
            {id: "transcendence", label: "Transcendence", level: 65,},
            { id: "masterClass", label: "Classe Maître" },
            { id: "forceSkills", label: "Compétences de force" },
        ],
        skillIds: [
            "raven-fb-master1",
            "raven-fb-master2",
            "raven-fb-master3",
            "raven-fb-master4",
        ]
    }
]