export const SKILL_TYPES = {
    ACTIVE: "active",
    PASSIVE: "passive",
    SPECIAL_ACTIVE: "specialActive",
};

export const SKILL_TYPE_COLORS = {
    active: "#facc15",
    passive: "#60a5fa",
    specialActive: "#e11d48",
};

export const skills = [
    {
        id: "elsword-base-skill-1",
        name: "Méga Slash",
        nameFr: "Frappe de Géant",
        image: "/images/skills/elsword/skill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Elsword assène un violent coup d'épée.",
    },
    {
        id: "elsword-base-skill-2",
        name: "Roll",
        nameFr: "Salto",
        image: "/images/skills/elsword/skill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Elsword fait une roulade avant à toute vitesse. Il est invulnérable jusqu'à toucher le sol.",
    },
    {
        id: "elsword-base-passive-1",
        name: "Ambition",
        nameFr: "Ambition",
        image: "/images/skills/elsword/ElswordSkill7.png",
        type: SKILL_TYPES.PASSIVE,
        level: 20,
        description: "Pendant une période donnée, Elsword bénéficie de la protection K.O., il reçoit moins de dégâts et sa vitesse de déplacement augmente.",
    },
    {
        id: "elsword-base-skill-3",
        name: "Flame Geyser",
        nameFr: "Geyser de flammes",
        image: "/images/skills/elsword/ElswordSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 5,
        description: " Elsword frappe le sol de toutes ses forces avec son épée et crée une colonne de feu. " +
            "Les ennemis touchés subissent une brûlure.",
    },
    {
        id: "elsword-base-skill-4",
        name: "",
        nameFr: "Lame Infini",
        image: "/images/skills/elsword/ElswordSkill4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 10,
        description: "Elsword attaque l'adversaire avec une série de coups pour créer une explosion finale qui inflige des dégâts aux adversaires à proximité.",
    },
    {
        id: "elsword-base-skill-5",
        name: "Dodge Step",
        nameFr: "Pas d'esquive",
        image: "/images/skills/elsword/ElswordSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Elsword se retourne pendant qu’il est attaqué pour esquiver dans la direction choisie et créer de la distance avec l’ennemi." +
            "En réappuyant sur la compétence pendant le mouvement, il recule encore davantage.",
    },
    {
        id: "elsword-base-skill-6",
        name: "Triple Geyser",
        nameFr: "Triple geyser",
        image: "/images/skills/elsword/ElswordSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Elsword frappe le sol avec son épée et crée trois colonnes de feu.",
    },
];