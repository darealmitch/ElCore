import { SKILL_TYPES } from "../skillConstants.js";

export const addSkills = [
    {
        id: "add-base-skill1",
        name: "Void Breaker",
        nameFr: "Déchirure spatiale",
        image: "/images/skills/add/base/AddSkill1.png",
        type: SKILL_TYPES.STRENGTH,
        level: 1,
        description: "Add crée un champ magnétique qui explose devant lui.",
    },
    {
        id: "add-base-skill2",
        name: "Phase Shift",
        nameFr: "Substitution",
        image: "/images/skills/add/base/AddSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Add installe un portail stationnaire qui explose lorsqu’un ennemi le touche. " +
            "Si le portail n’explose pas, Add peut réappuyer sur la touche de compétence pour échanger sa position avec lui en consommant 5 PM.",
    },
    {
        id: "add-base-skill3",
        name: "Particle Prism",
        nameFr: "Prisme circulaire",
        image: "/images/skills/add/base/AddSkill3.png",
        type: SKILL_TYPES.TENACITY,
        level: 5,
        description: "Add crée un champ en forme de prisme qui emprisonne les ennemis et ralentit leurs mouvements.",
    },
    {
        id: "add-base-skill4",
        name: "Particle Accelerator",
        nameFr: "Accélérateur de particules",
        image: "/images/skills/add/base/AddSkill8.png",
        type: SKILL_TYPES.BRAVERY,
        level: 10,
        description: "Add provoque une accélération de particules, créant une onde de choc qui étourdit l’ennemi.",
    },
    {
        id: "add-base-skill5",
        name: "Quantization",
        nameFr: "Quantification",
        image: "/images/skills/add/base/Quantization.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Add se quantifie pour échapper aux ennemis lorsqu’il est attaqué. " +
            "Cette compétence peut être utilisée pendant qu’il subit une attaque. " +
            "Maintiens une touche directionnelle pour esquiver dans la direction souhaitée.",
    },
    {
        id: "add-base-skill6",
        name: "Neutron Bomb",
        nameFr: "Bombes à neutrons",
        image: "/images/skills/add/base/AddSkill9.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Add concentre des neutrons dans un espace très restreint, attirant les ennemis proches avant de déclencher une explosion.",
    },
    {
        id: "add-base-skill7",
        name: "Particle Shot",
        nameFr: "Tir à impulsion",
        image: "/images/skills/add/base/AddSkill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Add concentre de l’énergie particulaire et la tire sous forme de sphère. " +
            "Celle-ci transperce l’ennemi, puis provoque une explosion.",
    },
    /*Traquer Psychique*/
    {
        id: "add-tp-skill1",
        name:"Dynamo Configuration - Dissolver",
        nameFr: "Configuration : solvatation",
        image: "/images/skills/add/tp/PsychicTracerSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description:"",
    },
    {
        id: "add-tp-skill2",
        name:"Quake Buster",
        nameFr: "Tremblement électrique",
        image: "/images/skills/add/tp/PsychicTracerSkill2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 15,
        description:"Add tire un projectile d’énergie vers le bas, déclenchant une série d’explosions." +
            "Cette compétence peut aussi être utilisée en plein saut.",
    },
    {
        id: "add-tp-skill3",
        name:"Nasod Armor Mode: Battle Gear",
        nameFr: "Armure nasod - Combinaison de combat",
        image: "/images/skills/add/tp/AddSharedPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 15,
        description: {
            title: "Armure nasod",
            lines: [
                "Add peut utiliser l’armure nasod.",
                "En mode dynamo, certaines compétences et certains combos permettent d’enchaîner avec une attaque d’armure nasod.",
                "Après une compétence, cette possibilité est indiquée directement dans la description de la compétence.",
                "Après un combo, elle dépend des enchaînements disponibles dans la liste des commandes.",
                "En mode dynamo, la consommation de PDY diminue.",
                "Les combos d’armure nasod infligent davantage de dégâts, peuvent interrompre l’attaque de l’ennemi pendant leur exécution, puis permettent à Add d’enchaîner à nouveau.",
                "Ils peuvent aussi générer des points de conversion de dynamo avec une certaine probabilité.",
            ],
        },
    },
    {
        id: "add-tp-skill4",
        name:"Pulse Cannon",
        nameFr: "Bazooka à impulsion ",
        image: "/images/skills/add/tp/PsychicTracerSkill3.png",
        type: SKILL_TYPES.TENACITY,
        level: 25,
        description: {
            lines: [
                "Add tire 4 projectiles à impulsion téléguidés.",
                "Maintenir la touche de compétence permet de tirer jusqu’à 4 projectiles supplémentaires, pour 25 PM chacun.",
                "En mode dynamo, la compétence consomme des PDY au lieu des PM et ne régénère pas de PDY.",
                "Activation hors mode dynamo : +20 PDY.",
                "En mode dynamo, appuyer sur la commande indiquée à la fin de la compétence déclenche un combo d’armure nasod.",
            ],
        },

    },
    {
        id: "add-tp-skill5",
        name:"Sonic Jump",
        nameFr: "Saut supersonique",
        image: "/images/skills/add/tp/PsychicTracerSkill4.png",
        type: SKILL_TYPES.STRENGTH,
        level: 30,
        description: {
            lines: [
                "Add utilise l’énergie chargée dans ses dynamos pour foncer en avant dans une charge explosive.",
                "Pendant la charge, il disperse de nombreuses nanomachines explosives.",
                "Les nanomachines provoquent une réaction en chaîne et infligent des dégâts aux ennemis proches.",
                "Cette compétence peut aussi être utilisée en plein saut.",
                "Compétence de PDY : en mode dynamo, 20 % des PDY sont consommés.",
                "Points de conversion de dynamo : en booster, la compétence peut consommer jusqu’à 3 PCD.",
                "Chaque PCD consommé augmente les dégâts de 5 %.",
                "La compétence peut être utilisée même sans PCD.",
            ],
        },
    },
    {
        id: "add-tp-skill6",
        name: "Dynamo Configuration: Magnetron",
        nameFr: "Configuration : magnétron",
        image: "/images/skills/add/tp/PsychicTracerSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 30,
        description: {
            lines: [
                "Add crée 3 magnétrons qui le suivent pendant 15 secondes. " +
                "Ils infligent des dégâts supplémentaires lorsqu’Add attaque, à l’exception des compétences de Ténacité, de Force, de Bravoure et des hyper compétences.",
            ],
        },
    },
    {
        id: "add-tp-skill7",
        name: "Statis Field",
        nameFr: "Champs de stase",
        image: "/images/skills/add/tp/PsychicTracerSkill6.png",
        type: SKILL_TYPES.BRAVERY,
        level: 35,
        description: {
            lines: [
                "Add déclenche un choc électrostatique, puis maintient un champ électrique autour de lui pendant 15 secondes.",
                "Le champ se charge avec les dégâts qu’Add inflige ou subit.",
                "Une fois la durée écoulée, le champ restaure des PM.",
                "Add peut aussi le faire exploser avant la fin en réappuyant sur la touche de compétence, même lorsqu’il est attaqué.",
                "En mode dynamo, appuyer sur la commande indiquée à la fin de la compétence déclenche un combo d’armure nasod.",
            ],
        },
    },
    {
        id: "add-tp-skill8",
        name: "Particule Storm",
        nameFr: "Tempête de particules",
        image: "/images/skills/add/tp/PsychicTracerPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 40,
        description: {
            lines: [
                "Add utilise l’énergie dégagée par ses attaques, à l’exception des compétences de Ténacité, de Force, de Bravoure et des hyper compétences, ou lorsqu’il est touché, afin de créer une tempête de particules.",
                "La tempête inflige des dégâts de zone, mais ne maintient pas les ennemis en place.",
                "Plus Add subit de dégâts, plus la tempête devient puissante, jusqu’à 20 % des dégâts subis.",
                "Lorsqu’Add touche un ennemi, sa valeur de K.O. diminue.",
                "En mode dynamo, la régénération naturelle de PM d’Add augmente.",
            ],
        },
    },

]