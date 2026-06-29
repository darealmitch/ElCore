import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const roseSkills = [
    {
        id: "rose-skill-1",
        name: "Rising Shot",
        nameFr: "Tir désarçonnant",
        image: "/images/skills/rose/base/RoseSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: ["Rose envoie un lourd obus qui fait valser l'adversaire dans les airs. En même temps, " +
        "elle charge des [Balles en argent] dans ses armes, ce qui augmente les dégâts de ses combos.",
            {
                type: "title",
                text: "Consommation d'EMC",
            },
            "Au lieu d'utiliser des PM, de l'EMC est consommé.\n" +
            "Lorsque la double frappe est activée, impossible d'utiliser cette compétence."
        ]
    },
    {
        id: "rose-skill-2",
        name: "Barbecue",
        nameFr: "Barbecue",
        image: "/images/skills/rose/base/RoseSkill2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 1,
        description: ["Avec un puissant coup de pied, Rose envoie voler l'adversaire et lui tire dessus avec la mitrailleuse Gatling.",
            {
                type: "title",
                text: "Double frappe",
            },
            "Avec la double frappe, les dégâts de la compétence augmentent."
        ]
    },
    {
        id: "rose-skill-3",
        name: "Backstep",
        nameFr: "Esquive",
        image: "/images/skills/rose/base/RoseSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 5,
        description: ["Rose saute en arrière et tire.",
            {
                type: "title",
                text: "Consommation d'EMC",
            },
            "Au lieu d'utiliser des PM, de l'EMC est consommé.\n" +
            "Lorsque la double frappe est activée, impossible d'utiliser cette compétence."
        ]
    },
    {
        id: "rose-skill-4",
        name: "RX-78 Land Runner",
        nameFr: "Coureur terrestre RX-78",
        image: "/images/skills/rose/base/RoseSkill4.png",
        type: SKILL_TYPES.TENACITY,
        level: 10,
        description: ["Avec un puissant coup de pied, Rose envoie voler l'adversaire et lui tire dessus avec la mitrailleuse Gatling.",
            {
                type: "title",
                text: "Double frappe",
            },
            "Avec la double frappe, les dégâts de la compétence augmentent."
        ]
    },
    {
        id: "rose-skill-4",
        name: "Spriggan",
        nameFr: "Spriggan",
        image: "/images/skills/rose/base/RoseSkill5.png",
        type: SKILL_TYPES.TENACITY,
        level: 10,
        description: ["Rose glisse vers l'avant et attaque. " +
        "Si l'attaque réussit, elle tire ensuite plusieurs coups de revolver. " +
        "Si elle échoue, Rose récupère 50% des PM utilisés et la compétence se termine.",
            {
                type: "title",
                text: "Double frappe",
            },
            "Avec la double frappe, les dégâts de la compétence augmentent."
        ]
    },
    {
        id: "rose-skill-5",
        name: "Needle Sobat",
        nameFr: "Coup d'aiguille",
        image: "/images/skills/rose/base/RoseSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: ["Rose attaque avec un coup de pied rapide. Si elle le touche, l'adversaire voit sa valeur de K.O. réduite de 15 points.",
            {
                type: "title",
                text: "Consommation d'EMC",
            },
            "Au lieu d'utiliser des PM, de l'EMC est consommé.\n" +
            "Lorsque la double frappe est activée, impossible d'utiliser cette compétence."
        ]
    },
    {
        id: "rose-skill-6",
        name: "M-137 Gatling Gun",
        nameFr: "Mitrailleuse Gatling M-137",
        image: "/images/skills/rose/base/RoseSkill7.png",
        type: SKILL_TYPES.STRENGTH,
        level: 20,
        description: ["Rose dégaine une mitrailleuse Gatling M-137 et commence à tirer. " +
        "Elle bénéficie de la protection K.O. pendant qu'elle dégaine:\n",
            "Vise avec les touches directionnelles (↑/↓).\n" +
        "Appuie sur  ou  afin de tirer 3 coups pour 10 PM.\n" +
        "En mode attente, 7 PM par sec. sont consommés.\n" +
        "Si, lorsque tu es en mode attente, tu appuies sur les touches directionnelles (←/→) ou consommes 200 PM en tout, la compétence prend fin.",
            {
                type: "title",
                text: "Double frappe",
            },
            "Avec la double frappe, les dégâts de la compétence augmentent."
        ]
    },
    {
        id: "rose-skill-7",
        name: "M-3 Flamethrower",
        nameFr: "Lance-flammes M-3",
        image: "/images/skills/rose/base/RoseSkill8.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: ["Rose dégaine un lance-flammes M-3 et attaque l'adversaire devant elle. " +
        "Les adversaires touchés subiront des brûlures. " +
        "Elle bénéficie de la protection K.O. pendant qu'elle dégaine:\n",
            "Maintiens la touche de compétence enfoncée pour consommer 7 PM par attaque supplémentaire dont les dégâts et la portée augmentent de manière continue.",
            {
                type: "title",
                text: "Double frappe",
            },
            "Avec la double frappe, les dégâts de la compétence augmentent."
        ]
    },
]