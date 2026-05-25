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
export const ELSWORD_AURA_TYPES = {
    VITALITY: "vitalite",
    DESTRUCTION: "destruction",
};

export const ELSWORD_AURA_COLORS = {
    vitalite: "#60a5fa",
    destruction: "#ef4444",
};
export const ELSWORD_AURA_LABELS = {
    vitalite: "l'aura de vitalité",
    destruction: "l'aura de destruction",
};

export const skills = [
    {
        id: "elsword-base-skill-1",
        name: "Méga Slash",
        nameFr: "Frappe de Géant",
        image: "/images/skills/elsword/skill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        auraType:"destruction",
        description: "Elsword assène un violent coup d'épée.",
    },
    {
        id: "elsword-base-skill-2",
        name: "Roll",
        nameFr: "Salto",
        image: "/images/skills/elsword/skill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        auraType:"vitalite",
        description: "Elsword fait une roulade avant à toute vitesse. Il est invulnérable jusqu'à toucher le sol.",
    },
    {
        id: "elsword-base-passive-1",
        name: "Ambition",
        nameFr: "Ambition",
        image: "/images/skills/elsword/ElswordSkill7.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        auraType:"",
        description: "Pendant une période donnée, Elsword bénéficie de la protection K.O., il reçoit moins de dégâts et sa vitesse de déplacement augmente.",
    },
    {
        id: "elsword-base-skill-3",
        name: "Flame Geyser",
        nameFr: "Geyser de flammes",
        image: "/images/skills/elsword/ElswordSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 5,
        auraType:"destruction",
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
        auraType:"vitalite",
        description: "Elsword attaque l'adversaire avec une série de coups pour créer une explosion finale qui inflige des dégâts aux adversaires à proximité.",
    },
    {
        id: "elsword-base-skill-5",
        name: "Dodge Step",
        nameFr: "Pas d'esquive",
        image: "/images/skills/elsword/ElswordSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        auraType:"",
        description: "Elsword se retourne pendant qu’il est attaqué pour esquiver dans la direction choisie et créer de la distance avec l’ennemi." +
            "En réappuyant sur la compétence pendant le mouvement, il recule encore davantage.",
    },
    {
        id: "elsword-base-skill-7",
        name: "Assault Slash",
        nameFr: "Coup d'assaut",
        image: "/images/skills/elsword/ElSkill8.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        auraType:"vitalite",
        description: "Elsword se jette sur ses adversaires et les frappe les uns après les autres.",
    },
    {
        id: "elsword-base-skill-6",
        name: "Triple Geyser",
        nameFr: "Triple geyser",
        image: "/images/skills/elsword/ElswordSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        auraType:"destruction",
        description: "Elsword frappe le sol avec son épée et crée trois colonnes de feu.",
    },
    {
        id: "elsword-sk-skill-1",
        name: "Kick",
        nameFr: "Coup de Pied",
        image: "/images/skills/sk/SwordKnightSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        auraType: "vitalite",
        description: "Elsword donne un coup de pied à son adversaire, faisant baisser sa valeur de K.O",
    },
    {
        id: "elsword-sk-skill-2",
        name: "Spiral Blast",
        nameFr: "Spirale Explosive",
        image: "/images/skills/sk/SwordKnightSkill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        auraType: "destruction",
        description: "D'un coup d'épée, Elsword concentres de l'énergie et la libère sur ses adversaires sous la forme d'une tempête de flammes.",
    },
    {
        id: "elsword-sk-skill-3",
        name: "Knighthood",
        nameFr: "Chevalier d'élite",
        image: "/images/skills/sk/SwordKnightPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 15,
        auraType: "",
        description: "Elsword maîtrise les techniques de combat avancées des chevaliers d'élite."+
            "Les dégâts de toutes les compétences ainsi que la régénération de PM en cas de touchent augmentent. " +
            "Les dégâts de toutes les compétences d'attaque magique se transforment en attaque.",
    },
    {
        id: "elsword-sk-skill-4",
        name: "",
        nameFr: "Frappe mortelle",
        image: "/images/skills/sk/SwordKnightSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 25,
        auraType: "vitalite",
        description: "Elsword frappe le sol et déclenche une vague de pierres.",
    },
    {
        id: "elsword-sk-skill-5",
        name: "Impact Smash",
        nameFr: "Coup du tonnerre",
        image: "/images/skills/sk/SwordKnightSkill4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 30,
        auraType: "destruction",
        description: "Elsword plonge depuis les airs et attaque les ennemis proches. " +
            "Cette compétence ne peut être activée qu’en plein saut.",
    },
    {
        id: "elsword-sk-skill-6",
        name: "Armor Break",
        nameFr: "Briser l'armure",
        image: "/images/skills/sk/SwordKnightSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 30,
        auraType: "destruction",
        description: "D'un coup puissant, Elsword rend l'armure de l'adversaire temporairement inutilisable et réduit ainsi sa défense physique.",
    },
    {
        id: "elsword-sk-skill-7",
        name: "Double Slash",
        nameFr: "Double Frappe",
        image: "/images/skills/sk/SwordKnightSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        auraType: "destruction",
        description: "D'un coup puissant, Elsword étourdit son adversaire et lui inflige ensuite un coup enflammé."
    },
    {
        id: "elsword-sk-skill-8",
        name: "Iron Body - Guard",
        nameFr: "Ambition : puissante",
        image: "/images/skills/sk/SwordKnightPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 40,
        auraType: "",
        description: {
            title: "[ Ambition : puissante ]",
            lines: [
                "La protection K.O. et l'effet de résistance aux dégâts d'Ambition s'appliquent aussi aux membres du groupe.",
                "La durée du buff sur les autres membres du groupe est de 12 secondes.",
                "En JcJ, seule la résistance aux dégâts est appliquée pendant 2 secondes.",
            ],
        },
    }
    ]