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
    HYPER_ACTIVE_2: "hyperActive2",
    MASTER_SKILL: "masterSkill",
    FORCE_SKILL: "forceSkill",
};

export const SKILL_BADGE_LABELS = {
    hyperActive: "Hyper compétence",
    hyperActive2: "Hyper compétence II",
    masterSkill: "Compétence de maître",
    forceSkill: "Compétence de force",
};

export const SKILL_BADGE_COLORS = {
    hyperActive: "#f97316",
    hyperActive2: "#fb7185",
    masterSkill: "#a855f7",
    forceSkill: "#22c55e",
};

export const skills = [
    {
        id: "elsword-base-skill-1",
        name: "Méga Slash",
        nameFr: "Frappe de Géant",
        image: "/images/skills/el/base/skill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        auraType:"destruction",
        description: "Elsword assène un violent coup d'épée.",
    },
    {
        id: "elsword-base-skill-2",
        name: "Roll",
        nameFr: "Salto",
        image: "/images/skills/el/base/skill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        auraType:"vitalite",
        description: "Elsword fait une roulade avant à toute vitesse. Il est invulnérable jusqu'à toucher le sol.",
    },
    {
        id: "elsword-base-passive-1",
        name: "Ambition",
        nameFr: "Ambition",
        image: "/images/skills/el/base/ElswordSkill7.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        auraType:"",
        description: "Pendant une période donnée, Elsword bénéficie de la protection K.O., il reçoit moins de dégâts et sa vitesse de déplacement augmente.",
    },
    {
        id: "elsword-base-skill-3",
        name: "Flame Geyser",
        nameFr: "Geyser de flammes",
        image: "/images/skills/el/base/ElswordSkill3.png",
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
        image: "/images/skills/el/base/ElswordSkill4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 10,
        auraType:"vitalite",
        description: "Elsword attaque l'adversaire avec une série de coups pour créer une explosion finale qui inflige des dégâts aux adversaires à proximité.",
    },
    {
        id: "elsword-base-skill-5",
        name: "Dodge Step",
        nameFr: "Pas d'esquive",
        image: "/images/skills/el/base/ElswordSkill5.png",
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
        image: "/images/skills/el/base/ElSkill8.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        auraType:"vitalite",
        description: "Elsword se jette sur ses adversaires et les frappe les uns après les autres.",
    },
    {
        id: "elsword-base-skill-6",
        name: "Triple Geyser",
        nameFr: "Triple geyser",
        image: "/images/skills/el/base/ElswordSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        auraType:"destruction",
        description: "Elsword frappe le sol avec son épée et crée trois colonnes de feu.",
    },
    {
        id: "elsword-sk-skill-1",
        name: "Kick",
        nameFr: "Coup de Pied",
        image: "/images/skills/el/sk//SwordKnightSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        auraType: "vitalite",
        description: "Elsword donne un coup de pied à son adversaire, faisant baisser sa valeur de K.O",
    },
    {
        id: "elsword-sk-skill-2",
        name: "Spiral Blast",
        nameFr: "Spirale Explosive",
        image: "/images/skills/el/sk//SwordKnightSkill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        auraType: "destruction",
        description: "D'un coup d'épée, Elsword concentres de l'énergie et la libère sur ses adversaires sous la forme d'une tempête de flammes.",
    },
    {
        id: "elsword-sk-skill-3",
        name: "Knighthood",
        nameFr: "Chevalier d'élite",
        image: "/images/skills/el/sk//SwordKnightPassive1.png",
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
        image: "/images/skills/el/sk//SwordKnightSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 25,
        auraType: "vitalite",
        description: "Elsword frappe le sol et déclenche une vague de pierres.",
    },
    {
        id: "elsword-sk-skill-5",
        name: "Impact Smash",
        nameFr: "Coup du tonnerre",
        image: "/images/skills/el/sk//SwordKnightSkill4.png",
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
        image: "/images/skills/el/sk/SwordKnightSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 30,
        auraType: "destruction",
        description: "D'un coup puissant, Elsword rend l'armure de l'adversaire temporairement inutilisable et réduit ainsi sa défense physique.",
    },
    {
        id: "elsword-sk-skill-7",
        name: "Double Slash",
        nameFr: "Double Frappe",
        image: "/images/skills/el/sk//SwordKnightSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        auraType: "destruction",
        description: "D'un coup puissant, Elsword étourdit son adversaire et lui inflige ensuite un coup enflammé."
    },
    {
        id: "elsword-sk-skill-8",
        name: "Iron Body - Guard",
        nameFr: "Ambition : puissante",
        image: "/images/skills/el/sk//SwordKnightPassive2.png",
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
        image: "/images/skills/el/lk/LordKnightSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        auraType: "vitalite",
        description: "Elsword invoque une épée magique gigantesque qui augmente sa portée."
    },
    {
        id: "elsword-lk-skill-2",
        name: "Rolling Smash",
        nameFr: "Coup rotatif",
        image: "/images/skills/el/lk/LordKnightSkill2.png",
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
        image: "/images/skills/el/lk/LordKnightPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 35,
        auraType: "",
        description: "Les combos d'Elsword déclenchent des rafales de vents qui infligent des dégâts supplémentaires, sans incapacité de mouvement."
    },
    {
        id: "elsword-lk-skill-4",
        name: "Shoulder Tackle",
        nameFr: "Coup d'épaule",
        image: "/images/skills/el/lk/LordKnightSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 40,
        auraType: "vitalite",
        description: "Elsword charge droit devant lui et percute violemment les ennemis sur son passage.",
    },
    {
        id: "elsword-lk-skill-5",
        name: "Sandstorm",
        nameFr: "Ouragan de sable",
        image: "/images/skills/el/lk/LordKnightSkill4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 45,
        auraType: "destruction",
        description: "Avec son épée, Elsword crée un ouragan de sable, tous les adversaires touchés subissent des dégâts.",
    },
    {
        id: "elsword-lk-skill-6",
        name: "Windmill",
        nameFr: "Moulin à vent",
        image: "/images/skills/el/lk/LordKnightSkill5.png",
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
        image: "/images/skills/el/lk/LordKnightSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 50,
        auraType: "destruction",
        description: "Elsword se protège contre les attaques au corps-à-corps et les flèches, à l’exception des attaques spéciales.",
    },
    {
        id: "elsword-lk-skill-8",
        name: "Vertical Slash",
        nameFr: "Entaille verticale",
        image: "/images/skills/el/lk/LordKnightSkill7.png",
        type: SKILL_TYPES.ACTIVE,
        level: 50,
        auraType: "vitalite",
        description: "Elsword saisit correctement son épée et assène un puissant coup vers l’avant.",
    },
    {
        id: "elsword-lk-skill-9",
        name: "Sonic Blade",
        nameFr: "Lame chantante",
        image: "/images/skills/el/lk/LordKnightSkill8.png",
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
        image: "/images/skills/el/lk/LordKnightPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        auraType: "",
        description: "Elsword endurcit ses muscles et ses os, ce qui augmente ses PV et améliore sa résistance aux dégâts."
    },
    {
        id: "elsword-lk-skill-11",
        name: "Counter Patience",
        nameFr: "Représailles",
        image: "/images/skills/el/lk/LordKnightPassive3.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        auraType: "",
        description: "L’attaque physique d’Elsword augmente lorsqu’il subit une altération d’état négative."
    },
    {
        id: "elsword-lk-skill-12",
        name: "Gigantic Slash",
        nameFr: "Coup titanesque",
        image: "/images/skills/el/lk/LordKnightHyperActive.png",
        type: SKILL_TYPES.ACTIVE,
        level: 65,
        auraType: "",
        description: "Elsword étourdit les ennemis proches, les attire vers lui et les roue de coups.",
    },
    {
        id: "elsword-lk-skill-13",
        name: "Sonic Blade: Crescent",
        nameFr: "Lame chantante: faucille",
        image: "/images/skills/el/lk/LordKnightSkill9.png",
        type: SKILL_TYPES.ACTIVE,
        level: 70,
        auraType: "destruction",
        description: "Elsword exécute la compétence Lame chantante verticalement.",
    },
    {
        id: "elsword-lk-skill-14",
        name: "Awakened Will: Lord Knight",
        nameFr: "Volonté déchainé: Haut Chevalier",
        image: "/images/skills/el/lk/LordKnightPassive4.png",
        type: SKILL_TYPES.PASSIVE,
        level: 70,
        auraType: "",
        description: "Elsword augmente ses PM maximums et améliore sa défense après avoir subi 5 attaques."
    },
    {
        id: "elsword-lk-skill-14",
        name: "Power Smash",
        nameFr: "Coup puissant",
        image: "/images/skills/el/lk/LordKnightSkill10.png",
        type: SKILL_TYPES.ACTIVE,
        level: 80,
        auraType: "vitalite",
        description: "Elsword assènes un coup colossal avec ton épée.",
    },
    {
        id: "elsword-lk-skill-15",
        name: "Awakened One",
        nameFr: "Spécialisation",
        image: "/images/skills/el/lk/TransShared.png",
        type: SKILL_TYPES.PASSIVE,
        level: 80,
        auraType: "",
        description: "Cette compétence améliore les capacités physiques "
    },
    {
        id: "elsword-lk-skill-16",
        name: "Imperial Crusher",
        nameFr: "Découpe impériale",
        image: "/images/skills/el/lk/LordKnightSkill11.png",
        type: SKILL_TYPES.ACTIVE,
        level: 90,
        auraType: "destruction",
        description: "Elsword fait apparaître une lame géante et la fait tournoyer deux fois.",
    },
    {
        id: "elsword-lk-skill-17",
        name: "God of War",
        nameFr: "Dieu de la guerre",
        image: "/images/skills/el/lk/LordKnightPassive5.png",
        type: SKILL_TYPES.PASSIVE,
        level: 90,
        auraType: "",
        description: "Lorsque Ambition est active, Elsword exécute tous ses combos avec des rafales tranchantes. " +
            "Le coût en PM de Lame d’Armageddon est réduit. Briser l’armure réduit la défense de l’adversaire à 0 pendant une durée limitée."
    },
    {
        id: "elsword-lk-skill-18",
        name: "Grand Cross",
        nameFr: "Grande croix",
        image: "/images/skills/el/lk/LordKnightSkill12.png",
        type: SKILL_TYPES.ACTIVE,
        level: 95,
        auraType: "destruction",
        description: "Elsword infuse le sol avec l’aura de son épée et fait exploser la zone. " +
            "Maintenir la touche de compétence permet de charger l’attaque, augmentant la portée et les dégâts de l’explosion à chaque charge.",
    },
    {
        id: "el-ke-skill-1",
        name: "Absolute Judgement",
        nameFr: "Sentence finale",
        image: "/images/skills/el/ke/KnightEmperorHyperActive.png",
        type: SKILL_TYPES.SPECIAL_ACTIVE,
        level: 99,
        auraType: "",
        badge: SKILL_BADGES.HYPER_ACTIVE_2,
        description: "Elsword déchaîne la puissance de l'Eldrit absorbée durant ses aventures sur le champ de bataille. " +
            "Il tue ses adversaires d'une unique frappe majestueuse.",
    },
    {
        id: "el-ke-skill-2",
        name: "Persistance",
        nameFr: "Volonté",
        image: "/images/skills/el/ke/KnightEmperorPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        auraType: "",
        badge: "",
        description: "Elsword tient bon et attend le moment de remporter la victoire. " +
            "Lorsqu’il touche un ennemi ou subit des dégâts, le bonus [Volonté] s’active et augmente sa force d’attaque. " +
            "Plus ses PV diminuent, plus sa défense augmente. " +
            "Lorsqu’il attaque avec des combos, il a une certaine probabilité de réduire la défense de l’adversaire. " +
            "Si plus de 2 ennemis se trouvent à proximité, le bonus [Dignité de chevalier] s’active et augmente les coups critiques ainsi que les ravages.",
    },
    {
        id: "el-ke-skill-3",
        name: "Battle Ready",
        nameFr: "Combattivité",
        image: "/images/skills/el/ke/KnightEmperorPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        auraType: "",
        badge: "",
        description: "Elsword reste toujours armé et prêt à combattre, quelle que soit la situation. " +
            "S’il reste immobile pendant plus d’une seconde, le bonus [Combativité] s’active et disparaît dès qu’il recommence à bouger. " +
            "Après un certain temps, [Combativité] restaure ses PV et ses PM, puis réduit le temps de rechargement d’une compétence placée dans ses cases de compétence, à l’exception de l’hyper compétence et d’Amour divin. " +
            "Si Elsword passe en combat juste après l’activation de [Combativité], sa première attaque inflige davantage de dégâts et le coût en PM de sa première compétence est réduit.",
    }
]