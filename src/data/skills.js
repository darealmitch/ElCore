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
export const SKILL_BADGES = {
    HYPER_ACTIVE: "hyperActive",
};

export const SKILL_BADGE_LABELS = {
    hyperActive: "Hyper compétence",
};

export const SKILL_BADGE_COLORS = {
    hyperActive: "#f97316",
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
            lines: [ "La protection K.O. et l'effet de résistance aux dégâts d'Ambition s'appliquent aussi aux membres du groupe.",
                "La durée du buff sur les autres membres du groupe est de 12 secondes.",
                "En JcJ, seule la résistance aux dégâts est appliquée pendant 2 secondes.",],},
    },
    {
        id: "elsword-lk-skill-1",
        name: "Armageddon Blade",
        nameFr: "Lame d'Armageddon",
        image: "/images/skills/lk/LordKnightSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        auraType: "vitalite",
        description: "Elsword invoque une épée magique gigantesque qui augmente sa portée."
    },
    {
        id: "elsword-lk-skill-2",
        name: "Rolling Smash",
        nameFr: "Coup rotatif",
        image: "/images/skills/lk/LordKnightSkill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        auraType: "vitalite",
        description: "Elsword saute en avant en tournoyant sur lui-même. " +
            "Son épée frappe les adversaires tout en formant un bouclier qui lui confère une protection K.O. " +
            "À l’atterrissage, il déclenche une onde de choc qui projette les ennemis en l’air."
    },
    {
        id: "elsword-lk-skill-3",
        name: "Wind Slicer",
        nameFr: "Rafale Tranchantes",
        image: "/images/skills/lk/LordKnightPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 35,
        auraType: "",
        description: "Les combos d'Elsword déclenchent des rafales de vents qui infligent des dégâts supplémentaires, sans incapacité de mouvement."
    },
    {
        id: "elsword-lk-skill-4",
        name: "Shoulder Tackle",
        nameFr: "Coup d'épaule",
        image: "/images/skills/lk/LordKnightSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 40,
        auraType: "vitalite",
        description: "Elsword charge droit devant lui et percute violemment les ennemis sur son passage.",
    },
    {
        id: "elsword-lk-skill-5",
        name: "Sandstorm",
        nameFr: "Ouragan de sable",
        image: "/images/skills/lk/LordKnightSkill4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 45,
        auraType: "destruction",
        description: "Avec son épée, Elsword crée un ouragan de sable, tous les adversaires touchés subissent des dégâts.",
    },
    {
        id: "elsword-lk-skill-6",
        name: "Windmill",
        nameFr: "Moulin à vent",
        image: "/images/skills/lk/LordKnightSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 45,
        auraType: "vitalite",
        description: "Elsword tournoie sur lui-même avec son épée et crée un tourbillon de lames qui attire les ennemis. " +
            "Il peut se déplacer pendant la compétence et bénéficie d’une protection K.O. " +
            "Maintenir la touche de compétence consomme des PM supplémentaires pour prolonger la durée du tourbillon.",
    },
    {
        id: "elsword-lk-skill-7",
        name: "Conter Attack",
        nameFr: "Contre-attaque",
        image: "/images/skills/lk/LordKnightSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 50,
        auraType: "destruction",
        description: "Elsword se protège contre les attaques au corps-à-corps et les flèches, à l’exception des attaques spéciales.",
    },
    {
        id: "elsword-lk-skill-8",
        name: "Vertical Slash",
        nameFr: "Entaille verticale",
        image: "/images/skills/lk/LordKnightSkill7.png",
        type: SKILL_TYPES.ACTIVE,
        level: 50,
        auraType: "vitalite",
        description: "Elsword saisit correctement son épée et assène un puissant coup vers l’avant.",
    },
    {
        id: "elsword-lk-skill-9",
        name: "Sonic Blade",
        nameFr: "Lame chantante",
        image: "/images/skills/lk/LordKnightSkill8.png",
        type: SKILL_TYPES.ACTIVE,
        level: 55,
        auraType: "vitalite",
        description: "Elsword exécute un rapide coup circulaire et crée une onde de choc autour de lui. " +
            "Les ennemis touchés sont attirés vers lui.",
    },
    {
        id: "elsword-lk-skill-10",
        name: "Warrior Physique",
        nameFr: "Corps aguerri",
        image: "/images/skills/lk/LordKnightPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        auraType: "",
        description: "Elsword endurcit ses muscles et ses os, ce qui augmente ses PV et améliore sa résistance aux dégâts."
    },
    {
        id: "elsword-lk-skill-11",
        name: "Counter Patience",
        nameFr: "Représailles",
        image: "/images/skills/lk/LordKnightPassive3.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        auraType: "",
        description: "L’attaque physique d’Elsword augmente lorsqu’il subit une altération d’état négative."
    },
    {
        id: "elsword-lk-skill-12",
        name: "Gigantic Slash",
        nameFr: "Coup titanesque",
        image: "/images/skills/lk/LordKnightHyperActive.png",
        type: SKILL_TYPES.ACTIVE,
        level: 65,
        auraType: "",
        description: "Elsword étourdit les ennemis proches, les attire vers lui et les roue de coups.",
    },
    ]