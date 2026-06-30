import {SKILL_BADGES, SKILL_TYPES} from "../skillConstants.js";

export const addSkills = [
    {
        id: "add-base-skill1",
        name: "Void Breaker",
        nameFr: "Déchirure spatiale",
        image: "/images/skills/add/base/AddSkill1.webp",
        type: SKILL_TYPES.STRENGTH,
        level: 1,
        description: "Add crée un champ magnétique qui explose devant lui.",
    },
    {
        id: "add-base-skill2",
        name: "Phase Shift",
        nameFr: "Substitution",
        image: "/images/skills/add/base/AddSkill6.webp",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Add installe un portail stationnaire qui explose lorsqu’un ennemi le touche. " +
            "Si le portail n’explose pas, Add peut réappuyer sur la touche de compétence pour échanger sa position avec lui en consommant 5 PM.",
    },
    {
        id: "add-base-skill3",
        name: "Particle Prism",
        nameFr: "Prisme circulaire",
        image: "/images/skills/add/base/AddSkill3.webp",
        type: SKILL_TYPES.TENACITY,
        level: 5,
        description: "Add crée un champ en forme de prisme qui emprisonne les ennemis et ralentit leurs mouvements.",
    },
    {
        id: "add-base-skill4",
        name: "Particle Accelerator",
        nameFr: "Accélérateur de particules",
        image: "/images/skills/add/base/AddSkill8.webp",
        type: SKILL_TYPES.BRAVERY,
        level: 10,
        description: "Add provoque une accélération de particules, créant une onde de choc qui étourdit l’ennemi.",
    },
    {
        id: "add-base-skill5",
        name: "Quantization",
        nameFr: "Quantification",
        image: "/images/skills/add/base/Quantization.webp",
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
        image: "/images/skills/add/base/AddSkill9.webp",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Add concentre des neutrons dans un espace très restreint, attirant les ennemis proches avant de déclencher une explosion.",
    },
    {
        id: "add-base-skill7",
        name: "Particle Shot",
        nameFr: "Tir à impulsion",
        image: "/images/skills/add/base/AddSkill2.webp",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Add concentre de l’énergie particulaire et la tire sous forme de sphère. " +
            "Celle-ci transperce l’ennemi, puis provoque une explosion.",
    },
    /*Traquer Psychique*/
    {
        id: "add-tp-skill1",
        name:"Dynamo Configuration - Dissolver",
        nameFr: "Configuration dynamo : solvatation",
        image: "/images/skills/add/tp/PsychicTracerSkill1.webp",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description:"",
    },
    {
        id: "add-tp-skill2",
        name:"Quake Buster",
        nameFr: "Tremblement électrique",
        image: "/images/skills/add/tp/PsychicTracerSkill2.webp",
        type: SKILL_TYPES.STRENGTH,
        level: 15,
        description:"Add tire un projectile d’énergie vers le bas, déclenchant une série d’explosions." +
            "Cette compétence peut aussi être utilisée en plein saut.",
    },
    {
        id: "add-tp-skill3",
        name:"Nasod Armor Mode: Battle Gear",
        nameFr: "Armure nasod - Combinaison de combat",
        image: "/images/skills/add/tp/AddSharedPassive1.webp",
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
        image: "/images/skills/add/tp/PsychicTracerSkill3.webp",
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
        image: "/images/skills/add/tp/PsychicTracerSkill4.webp",
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
        nameFr: "Configuration dynamo : magnétron",
        image: "/images/skills/add/tp/PsychicTracerSkill5.webp",
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
        image: "/images/skills/add/tp/PsychicTracerSkill6.webp",
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
        image: "/images/skills/add/tp/PsychicTracerPassive2.webp",
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
/*Psychopathe*/
    {
        id: "add-psy-skill1",
        name: "Dynamo Configuration: Pylon",
        nameFr: "Configuration dynamo : Pylône",
        image: "/images/skills/add/lp/AddSharedSkill1.webp",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        description: {
            lines: [
                "Add crée une sphère d’énergie stationnaire pendant 20 secondes.",
                "La sphère inflige des dégâts aux ennemis proches et augmente la régénération de PM des alliés.",
                "Si d’autres sphères sont créées dans un rayon de 10 mètres, elles sont reliées par des arcs électriques qui infligent des dégâts continus aux ennemis, sans les maintenir en place.",
                "Cette compétence peut aussi être utilisée en plein saut.",
                "Utilisation multiple : Add peut créer jusqu’à 3 pylônes dans un court intervalle de temps.",
                "Synergie avec Voyageur temporel : en mode dynamo, la compétence consomme des PDY au lieu des PM.",
            ],
        },
    },
    {
        id: "add-psy-skill2",
        name: "Conqueror",
        nameFr: "Conquérant",
        image: "/images/skills/add/lp/LunaticPsykerSkill1.webp",
        type: SKILL_TYPES.BRAVERY,
        level: 35,
        description: {
            lines: [
                "Les dynamos d’Add forment un canon énergétique qui tire 12 projectiles téléguidés.",
                "En mode dynamo, l’attaque devient un rayon continu.",
                "Consommation de PCD : en mode dynamo, cette compétence consomme jusqu’à 3 PCD.",
                "La compétence peut aussi être utilisée sans PCD.",
                "Chaque PCD consommé ajoute un projectile explosif supplémentaire.",
                "En mode dynamo, appuyer sur la commande indiquée à la fin de la compétence déclenche un combo d’armure nasod.",
            ],
        },
    },
    {
        id: "add-psy-skill3",
        name: "Body of Transcendence",
        nameFr: "Corps transcendé",
        image: "/images/skills/add/lp/LunaticPsykerPassive1.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 35,
        description: {
            lines: [
                "Lors des combos d’armure nasod, Add a une chance d’effectuer un coup puissant qui ignore la défense de l’ennemi.",
                "En mode dynamo, sa vitesse de déplacement augmente.",
                "Lorsqu’Add utilise Substitution, il reçoit 1 PCD.",
            ],
        },
    },
    {
        id: "add-psy-skill4",
        name: "Energy Shock",
        nameFr: "",
        image: "/images/skills/add/lp/LunaticPsykerSkill2.webp",
        type: SKILL_TYPES.TENACITY,
        level: 40,
        description: {
            lines: [
                "Add libère l’énergie surchargée contenue dans ses dynamos.",
                "Les ennemis touchés subissent une réduction de toutes leurs vitesses.",
                "Récupération de PDY : Add récupère 20 PDY à l’utilisation de la compétence.",
                "Les PDY ne sont pas récupérés lorsque le mode dynamo est actif.",
                "Consommation de PCD : la compétence peut consommer 1 PCD.",
                "Lorsqu’un PCD est consommé, le dernier coup enchaîne avec un combo d’armure nasod.",
                "La compétence peut aussi être utilisée sans PCD.",
            ],
        },
    },
    {
        id: "add-psy-skill5",
        name: "Psychic Storm",
        nameFr: "Déchaînement psychique",
        image: "/images/skills/add/lp/LunaticPsykerSkill3.webp",
        type: SKILL_TYPES.STRENGTH,
        level: 45,
        description: {
            lines: [
                "Add crée une tempête de plasma autour de lui.",
                "La tempête attire les ennemis proches, puis explose.",
                "Consommation de PCD : en mode dynamo, cette compétence consomme jusqu’à 3 PCD.",
                "La compétence peut aussi être utilisée sans PCD.",
                "Chaque PCD consommé augmente la durée et la taille de la tempête.",
                "En mode dynamo, appuyer sur la commande indiquée à la fin de la compétence déclenche un combo d’armure nasod.",
            ],
        },
    },
    {
        id: "add-psy-skill6",
        name: "EMP Shock",
        nameFr: "Choc à IEM",
        image: "/images/skills/add/lp/LunaticPsykerSkill4.webp",
        type: SKILL_TYPES.STRENGTH,
        level: 45,
        description: {
            lines: [
                "Add déclenche une impulsion électromagnétique.",
                "Les ennemis proches, jusqu’à 1,2 mètre, subissent des dégâts, perdent des PM et voient leurs compétences entrer en temps de rechargement.",
                "Les ennemis hors de cette portée subissent les mêmes effets à hauteur de 50 %.",
                "Cette compétence peut aussi être utilisée en plein saut.",
                "En mode dynamo, appuyer sur la commande indiquée à la fin de la compétence déclenche un combo d’armure nasod.",
            ],
        },
    },
    {
        id: "add-psy-skill7",
        name: "Psionic Beat",
        nameFr: "Décharge psionique",
        image: "/images/skills/add/lp/LunaticPsykerSkill5.webp",
        type: SKILL_TYPES.ACTIVE,
        level: 50,
        description: {
            lines: [
                "Add tire une décharge d’énergie psionique qui rebondit d’un ennemi à l’autre.",
            ],
        },
    },
    {
        id: "add-psy-skill8",
        name: "Nasod Armor Mode - Full Burst",
        nameFr: "Armure nasod - Explosion",
        image: "/images/skills/add/lp/LunaticPsykerSkill6.webp",
        type: SKILL_TYPES.STRENGTH,
        level: 50,
        description: {
            lines: [
                "Add utilise le mode Armure nasod de manière optimale pendant une durée limitée.",
                "À l’activation, une onde de choc inflige des dégâts aux ennemis proches.",
                "Pendant la durée de l’effet, les dégâts des compétences de Ténacité, de Force et de Bravoure augmentent.",
                "Les chances d’activation et les dégâts de Tempête de particules sont doublés.",
                "Compétence de PDY : en mode dynamo, 20 % des PDY sont consommés.",
                "Consommation de PCD : en mode dynamo, cette compétence consomme jusqu’à 2 PCD.",
                "Chaque PCD consommé augmente la durée de 5 secondes.",
                "La compétence peut aussi être utilisée sans PCD.",
                "Effet renforcé final : le temps de rechargement diminue de 4 secondes.",
            ],
        },
    },
    {
        id: "add-psy-skill9",
        name: "Quicksilver Accel",
        nameFr: "Accélérateur de mercure",
        image: "/images/skills/add/lp/LunaticPsykerSkill7.webp",
        type: SKILL_TYPES.TENACITY,
        level: 55,
        description: {
            lines: [
                "Add fonce en avant et emporte avec lui les ennemis touchés.",
                "Changement de direction : si la touche de compétence est pressée à nouveau pendant la charge, Add repart en arrière en consommant 10 PM.",
            ],
        },
    },
    {
        id: "add-psy-skill10",
        name: "Output Exchange",
        nameFr: "Transformateur de puissance",
        image: "/images/skills/add/lp/LunaticPsykerPassive2.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        description: {
            lines: [
                "Lorsque ses points de dynamo sont inférieurs à 200, Add les récupère plus rapidement.",
                "Lorsque ses points de dynamo sont supérieurs à 200, son attaque magique et ses chances de coup critique augmentent.",
            ],
        },
    },
    {
        id: "add-psy-skill11",
        name: "Fantasy Tracer",
        nameFr: "Visionnaire",
        image: "/images/skills/add/lp/LunaticPsykerPassive3.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        description: {
            lines: [
                "Lorsqu’Add active le mode dynamo, il récupère une partie de ses PM.",
                "Après Tir à impulsion et Substitution, Add peut enchaîner directement avec des combos d’armure nasod.",
                "Cet enchaînement s’active en mode dynamo si la touche de compétence est pressée dans les 2 secondes suivant l’activation de la compétence.",
                "L’enchaînement peut aussi être effectué au sol, mais pas pendant qu’Add est attaqué.",
            ],
        },
    },
    {
        id: "add-psy-skill12",
        name: "Dooms Day",
        nameFr: "Jugement dernier",
        image: "/images/skills/add/lp/LunaticPsykerHyperActive.webp",
        type: SKILL_TYPES.HYPER_ACTIVE,
        badge: SKILL_BADGES.HYPER_ACTIVE,
        level: 65,
        description: {
            lines: [
                "Add concentre du plasma jusqu’à son niveau d’énergie maximal, puis le libère dans une explosion massive.",
            ],
        },
    },
    {
        id: "add-psy-skill13",
        name: "Psion Rush",
        nameFr: "Assaut psionique",
        image: "/images/skills/add/lp/LunaticPsykerSkill8.webp",
        type: SKILL_TYPES.TENACITY,
        level: 70,
        description: {
            lines: [
                "En mode dynamo, Add libère une décharge d’énergie qui frappe les ennemis 3 fois.",
                "Compétence de PDY : en mode dynamo, 20 % des PDY sont consommés.",
                "Consommation de PCD : en mode dynamo, cette compétence consomme 1 PCD.",
                "Chaque PCD consommé augmente les dégâts de 10 %.",
                "La compétence peut aussi être utilisée sans PCD.",
                "En mode dynamo, appuyer sur la commande indiquée à la fin de la compétence déclenche un combo d’armure nasod.",
                "Effet renforcé final : les dégâts sont multipliés par 1,2.",
            ],
        },
    },
    {
        id: "add-psy-skill14",
        name: "Awakened Will : Lunatic Psyker",
        nameFr: "Volonté déchaînée : psychopathe",
        image: "/images/skills/add/lp/LunaticPsykerPassive4.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 70,
        description: {
            lines: [
                "Add renforce ses capacités physiques en fonction du mode dynamo.",
            ],
        },
    },
    {
        id: "add-psy-skill15",
        name: "Dynamo Configuration - Railgun",
        nameFr: "Configuration dynamo : Javelot",
        image: "/images/skills/add/lp/LunaticPsykerSkill9.webp",
        type: SKILL_TYPES.ACTIVE,
        level: 80,
        description: {
            lines: [
                "Add tire un projectile à grande vitesse à travers un puissant champ magnétique.",
                "Le projectile transperce les ennemis jusqu’à 2 fois.",
                "En cas de coup réussi, Add obtient 1 PCD.",
                "Le projectile devient plus destructeur selon l’état de l’armure nasod.",
                "En mode dynamo, le projectile renforcé transperce tous les ennemis devant Add.",
                "Compétence de PDY : en mode dynamo, 20 % des PDY sont consommés.",
                "Effet renforcé final : en mode dissolution, le nombre de transpercements augmente de 1.",
            ],
        },
    },
    {
        id: "add-psy-skill16",
        name: "Awakened One",
        nameFr: "Spécialisation",
        image: "/images/skills/el/lk/TransShared.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 80,
        description: {
            lines: [
                "Cette compétence améliore les capacités physiques d’Add.",
            ],
        },
    },
    {
        id: "add-psy-skill17",
        name: "Quicksilver Strike",
        nameFr: "Coup mercuriel",
        image: "/images/skills/add/lp/LunaticPsykerSkill10.webp",
        type: SKILL_TYPES.STRENGTH,
        level: 90,
        description: {
            lines: [
                "Cette compétence améliore les capacités physiques d’Add.",
            ],
        },
    },
    {
        id: "add-psy-skill18",
        name: "Amplify Energy",
        nameFr: "Amplification énergétique",
        image: "/images/skills/add/lp/LunaticPsykerPassive5.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 90,
        description: {
            lines: [
                "Add amplifie l’énergie du [Armure nasod - Combinaison de combat].",
                "Les dégâts des combos d’armure nasod augmentent.",
                "Les compétences de type libération d’énergie sont renforcées.",
                "Les coups des combos d’armure nasod ignorent la garde de l’ennemi.",
                "En cas de coup réussi avec un combo d’armure nasod, Add obtient des PCD supplémentaires.",
            ],
        },
    },
    {
        id: "add-psy-skill19",
        name: "Supersonic",
        nameFr: "Supersonique",
        image: "/images/skills/add/lp/LunaticPsykerSkill11.webp",
        type: SKILL_TYPES.BRAVERY,
        level: 95,
        description: {
            lines: [
                "Add frappe l’ennemi à une vitesse extrême.",
                "Cette compétence peut aussi être utilisée en plein saut.",
                "Compétence de PDY : en mode dynamo, 20 % des PDY sont consommés.",
                "Consommation de PCD : en mode dynamo, cette compétence consomme jusqu’à 3 PCD.",
                "Chaque PCD consommé augmente les dégâts de 5 %.",
                "La compétence peut aussi être utilisée sans PCD.",
                "En mode dynamo, appuyer sur la commande indiquée à la fin de la compétence déclenche un combo d’armure nasod.",
                "Effet renforcé final : le temps de rechargement diminue de 4 secondes.",
            ],
        },
    },
    /*Calamité*/
    {
        id: "add-db-skill1",
        name: "Plasma Burst",
        nameFr: "Choc plasma",
        image: "/images/skills/add/lp/DoomBringerHyperActive.webp",
        type: SKILL_TYPES.HYPER_ACTIVE_2,
        level: 99,
        badge: SKILL_BADGES.HYPER_ACTIVE_2,
        description: {
            lines: [
                "Add invoque un cercle de plasma hautement concentré, puis déclenche une gigantesque explosion.",
            ],
        },
    },
    {
        id: "add-db-skill2",
        name: "Blood Boil",
        nameFr: "Sang Bouillant",
        image: "/images/skills/add/lp/DoomBringerPassive1.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        description: {
            lines: [
                "Les compétences à touche directe d’Add sont renforcées.",
                "Lorsqu’Add touche un ennemi avec une compétence à touche directe, cela provoque un débordement d’énergie dans l’armure nasod.",
                "Pendant un court instant, ses capacités physiques s’améliorent fortement.",
                "Débordement d’énergie : toutes les vitesses d’Add augmentent, ainsi que la probabilité d’activation des attributs élémentaires.",
                "Lorsque la barrière de l’armure nasod est activée, elle ne consomme pas de PDY.",
                "En cas d’activation de la barrière de l’armure nasod, les dégâts critiques augmentent selon le nombre de PCD restants.",
            ],
        },
    },
    {
        id: "add-db-skill3",
        name: "Enhanced Plasma",
        nameFr: "Plasma renforcé",
        image: "/images/skills/add/lp/DoomBringerPassive2.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        description: {
            lines: [
                "Les liens symbiotiques entre Add et l’armure nasod renforcent ses capacités de combat.",
                "Plasma renforcé : lorsqu’Add utilise un combo d’armure nasod, l’effet [Plasma renforcé] s’active et sa force d’attaque augmente pendant une durée limitée.",
                "Combat efficace : lorsqu’Add touche un ennemi avec un combo d’armure nasod, il récupère une partie des PDY consommés.",
                "Les PM maximums d’Add augmentent.",
            ],
        },
    },
    /*Classe des maitres Calamité*/
    {
        id: "add-db-master1",
        name: "Symmetric Identity - Stage 1",
        nameFr: "Identité symétrique - Étape 1",
        image: "/images/skills/add/lp/DoomBringerMaster1.webp",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",

        description: {
            title: "Étape 1",
            lines: [
                "Add invoque un clone qui reproduit ses mouvements et annihile les ennemis.",
                "Lorsque Add croise la trajectoire de son clone, l’énergie explose.",
                "Cette première étape est automatiquement débloquée lors du passage en Classe Maître",
            ],
        },
    },
    {
        id: "add-db-master2",
        name: "Symmetric Identity - Stage 2",
        nameFr: "Identité symétrique - Étape 2",
        image: "/images/skills/add/lp/DoomBringerMaster2.webp",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: {
            title: "Étape 2",
            lines: [
                "Add invoque un clone qui reproduit ses mouvements et annihile les ennemis.",
                "Lorsque Add croise la trajectoire de son clone, l’énergie explose, puis déclenche une série d’attaques multiples.",
                "Cette deuxième étape se débloque grâce à une quête de compétence.",
            ],
        },
    },
    {
        id: "add-db-master3",
        name: "Symmetric Identity - Stage 3",
        nameFr: "Identité symétrique - Étape 3",
        image: "/images/skills/add/lp/DoomBringerMaster3.webp",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: {
            title: "Étape 3",
            lines: [
                "Add invoque un clone qui reproduit ses mouvements et annihile les ennemis.",
                "Lorsque Add croise la trajectoire de son clone, l’énergie explose, puis déclenche une série d’attaques multiples.",
                "Ensuite, une explosion en chaîne se produit en plein air.",
                "Cette troisième étape se débloque grâce à une quête de compétence.",
            ],
        },
    },
    {
        id: "add-db-master4",
        name: "Symmetric Identity - Stage 4",
        nameFr: "Identité symétrique - Étape 4",
        image: "/images/skills/add/lp/DoomBringerMaster4.webp",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: {
            title: "Étape 4",
            lines: [
                "Add invoque un clone qui reproduit ses mouvements et annihile entièrement les lignes ennemies.",
                "Cette quatrième étape se débloque grâce à une quête de compétence.",
            ],
        },
    },
    /*Maître de l'IA*/
    {
        id: "add-at-skill1",
        name: "Dynamo Configuration - Rushing Drones",
        nameFr: "Configuration : Drone explosif",
        image: "/images/skills/add/job2/ArcTracerSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: [
            "Add lance un drone explosif.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-at-skill2",
        name: "Panzer Buster",
        nameFr: "Booster déferlant",
        image: "/images/skills/add/job2/ArcTracerSkill2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 15,
        description: "Add ires une grenade de particules assourdissante. " +
            "Maintiens la touche de compétence enfoncée pour retarder le tir et ajuster l'angle avec les touches directionnelles."
    },
    {
        id: "add-at-skill3",
        name: "Nasod Armor Mode: Battle Gear",
        nameFr: "Armure nasod - Combinaison de combat",
        image: "/images/skills/add/tp/AddSharedPassive1.webp",
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
        }
    },
    {
        id: "add-at-skill4",
        name: "Install - Drone Activator",
        nameFr: "Installation - Marquage",
        image: "/images/skills/add/job2/ArcTracerSkill3.png",
        type: SKILL_TYPES.TENACITY,
        level: 25,
        description: "places un drone qui tire un missile. " +
            "Celui-ci explose et laisse pendant un court instant un marquage sur l'adversaire, ce qui diminue sa défense et sa résistance à la magie." +
            " De plus, pendant ce temps, la consommation de PM sera réduite de 50% tandis que toutes les compétences de Configuration (sauf le Pylône) seront automatiquement tirées sur cet adversaire et provoqueront 20% de dégâts supplémentaires."
    },
    {
        id: "add-at-skill4",
        name: "Install - Drone Activator",
        nameFr: "Installation - Marquage",
        image: "/images/skills/add/job2/ArcTracerSkill3.png",
        type: SKILL_TYPES.TENACITY,
        level: 25,
        description: "Add places un drone qui tire un missile. " +
            "Celui-ci explose et laisse pendant un court instant un marquage sur l'adversaire, ce qui diminue sa défense et sa résistance à la magie." +
            " De plus, pendant ce temps, la consommation de PM sera réduite de 50% tandis que toutes les compétences de Configuration (sauf le Pylône) seront automatiquement tirées sur cet adversaire et provoqueront 20% de dégâts supplémentaires."
    },
    {
        id: "add-at-skill5",
        name: "Hypernova",
        nameFr: "Hypernova",
        image: "/images/skills/add/job2/ArcTracerSkill4.png",
        type: SKILL_TYPES.STRENGTH,
        level: 30,
        description: "Add tire un puissant rayon laser depuis son Dynamo. " +
            "(Peut également être utilisée en plein saut.)"
    },
    {
        id: "add-at-skill6",
        name: "Dynamo Configuration - Fusion Blast",
        nameFr: "Configuration : Grenade à fragmentation",
        image: "/images/skills/add/job2/ArcTracerSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 30,
        description: [
            "Add tires une grosse grenade qui explose sur l'adversaire. " +
            "Si aucun adversaire n'est touché, elle se divise en quatre petites grenades qui se déploient en X.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-at-skill7",
        name: "Psionic Generator",
        nameFr: "Générateur psionique",
        image: "/images/skills/add/job2/ArcTracerSkill6.png",
        type: SKILL_TYPES.STRENGTH,
        level: 35,
        description: "Add installes un générateur qui est chargé grâce à l'énergie psychique des amis et adversaires aux alentours, puis explose. " +
            "Plus il y a de personnages à proximité (max. 10), plus l'explosion est grande et puissante."
    },
    {
        id: "add-at-skill8",
        name: "Hidden Records",
        nameFr: "Inscriptions secrètes",
        image: "/images/skills/add/job2/ArcTracerPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 40,
        description: "Augmente ton maximum de PM et la durée des compétences de Configuration (Drone explosif, Pylône, Grenade à fragmentation, Disque, Explosion retardée).\n" +
            "Réduit la valeur de K.O. de tes attaques et augmente la régénération de PM en mode dynamo."
    },
    /*Machiavel*/
    {
        id: "add-md-skill1",
        name: "Dynamo Configuration - Pylon",
        nameFr: "Configuration : pylône",
        image: "/images/skills/add/lp/AddSharedSkill1.webp",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        description: {
            lines: [
                "Add crée une sphère d’énergie stationnaire pendant 20 secondes.",
                "La sphère inflige des dégâts aux ennemis proches et augmente la régénération de PM des alliés.",
                "Si d’autres sphères sont créées dans un rayon de 10 mètres, elles sont reliées par des arcs électriques qui infligent des dégâts continus aux ennemis, sans les maintenir en place.",
                "Cette compétence peut aussi être utilisée en plein saut.",
                "Utilisation multiple : Add peut créer jusqu’à 3 pylônes dans un court intervalle de temps.",
                "Synergie avec Voyageur temporel : en mode dynamo, la compétence consomme des PDY au lieu des PM.",
            ],
        }
    },
    {
        id: "add-md-skill2",
        name: "Phantom Seeker",
        nameFr: "Fantôme traqueur",
        image: "/images/skills/add/job2/MastermindSkill1.png",
        type: SKILL_TYPES.BRAVERY,
        level: 35,
        description: "Add crées deux drones qui poursuivent l'adversaire et changent de cible à chaque touche."
    },
    {
        id: "add-md-skill3",
        name: "Dynamo Factory - Enhanced Transformation",
        nameFr: "Amélioration d'usine dynamo",
        image: "/images/skills/add/job2/MastermindPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 35,
        description: "Réduit le coût en PM de toutes les compétences d'Installation (Marquage, Chute d'étoiles, Rage ultime, Laser téléguidé).\n" +
            "Rallonge la durée des drones de l'usine dynamo.\n" +
            "Lors de la modification de l'Installation, les temps de rechargement de toutes les autres Installations sont réduits."
    },
    {
        id: "add-md-skill4",
        name: "Aero Mine",
        nameFr: "Fantôme traqueur",
        image: "/images/skills/add/job2/MastermindSkill2.png",
        type: SKILL_TYPES.TENACITY,
        level: 40,
        description: [
            "Add déploie une Mine Aérienne qui explose après un certain temps. " +
            "Une seconde après son installation, elle détecte les ennemis à portée, explose et les projette dans les airs.\n" +
            "\n" +
            "La Mine Aérienne est indestructible. " +
            "Elle devient invisible 1 seconde après son déploiement et se désactive automatiquement au bout de 10 secondes.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-md-skill5",
        name: "Install - Starfall",
        nameFr: "Installation - Chute d'étoiles\n",
        image: "/images/skills/add/job2/MastermindSkill3.png",
        type: SKILL_TYPES.STRENGTH,
        level: 45,
        description: "Tu installes un drone fixe qui fait pleuvoir des grenades lasers sur les adversaires aux alentours pendant 7 sec. " +
            "Plus il y a d'adversaires à portée, plus la visée est rapide."
    },
    {
        id: "add-md-skill6",
        name: "Install - Ultimate Fury",
        nameFr: "Installation - Rage ultime",
        image: "/images/skills/add/job2/MastermindSkill4.png",
        type: SKILL_TYPES.STRENGTH,
        level: 45,
        description: "Add installes trois drones qui te suivent pendant 6 sec. et tirent des rayons de particules jusqu'à 3 sec. sur un adversaire. " +
            "Pendant ce temps, tu peux te déplacer librement."
    },
    {
        id: "add-md-skill7",
        name: "Dynamo Configuration - Delayed Explosion",
        nameFr: "Configuration : explosion retardée",
        image: "/images/skills/add/job2/MastermindSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 50,
        description: [
            "Add lances un drone qui se fixe sur un adversaire et explose au bout de 3 sec. " +
            "(Peut être enlevé en appuyant rapidement sur les touches de gauche et de droite).",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-md-skill8",
        name: "Install - Zero Kelvin Generator",
        nameFr: "Installation - Générateur Zéro Kelvin ",
        image: "/images/skills/add/job2/MastermindSkill6.png",
        type: SKILL_TYPES.STRENGTH,
        level: 50,
        description: [
            "Le Dynamo passe en mode Générateur Zéro Kelvin.\n" +
            "Une fois activé, Add déploie un drone qui émet une aura infligeant des gelures aux ennemis. " +
            "Après son installation, Add peut se déplacer librement.\n" +
            "Le drone génère une onde de choc toutes les 3 secondes pour infliger des dégâts. " +
            "Chaque onde de choc restaure des DP en fonction du nombre d’ennemis à proximité. " +
            "Les ennemis touchés subissent davantage de dégâts physiques et magiques pendant une durée déterminée.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-md-skill9",
        name: "Install - shooting Chaser",
        nameFr: "Installation - Laser téléguidé",
        image: "/images/skills/add/job2/MastermindSkill7.png",
        type: SKILL_TYPES.STRENGTH,
        level: 55,
        description: "Add installes un drone qui se démultiplie lors de l'activation et tire un laser sur les adversaires, leur infligeant des dégâts continus. " +
            "La première touche paralyse."
    },
    {
        id: "add-md-skill10",
        name: "New Update!",
        nameFr: "Mise à jour !",
        image: "/images/skills/add/job2/MastermindPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        description: "Lors de l'activation ou la modification du mode usine dynamo, tu obtiens un bonus qui augmente ta régénération de PM pendant 15 secondes (cumulables 3 fois max.)."
    },
    {
        id: "add-md-skill11",
        name: "Transformation: Offensive Mode",
        nameFr: "Mode offensif",
        image: "/images/skills/add/job2/MastermindPassive3.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        description: "Augmente les dégâts de toutes les compétences d'Installation (Marquage, Chute d'étoiles, Rage ultime, Laser téléguidé)."
    },
    {
        id: "add-md-skill12",
        name: "Apocalypse",
        nameFr: "Apocalypse",
        image: "/images/skills/add/job2/MastermindHyperActive.png",
        type: SKILL_TYPES.HYPER_ACTIVE,
        badge: SKILL_BADGES.HYPER_ACTIVE,
        level: 65,
        description: "Add fabrique des cubes nasods qui le suivent et attaquent les adversaires aux alentours. Lorsque les PV des cubes atteignent 0 ou qu’il réactive la compétence, toute leur énergie restante est libérée dans une ultime attaque.\n" +
            "\n" +
            "Les caractéristiques des cubes sont identiques à celles d’Add."
    },
    {
        id: "add-md-skill13",
        name: "Install - Charged Impulser",
        nameFr: "Installation: Impulseur chargé",
        image: "/images/skills/add/job2/MastermindSkill8.png",
        type: SKILL_TYPES.TENACITY,
        level: 70,
        description: [
            "Le Dynamo passe en mode Usine Dynamo [Impulseur chargé].\n" +
            "Une fois activé, Add déploie un drone qui génère périodiquement un trou noir. " +
            "Le drone explose lorsque sa durée d’activité prend fin ou lorsque ses PV tombent à zéro. " +
            "À son explosion, les dégâts infligés et le rayon d’effet augmentent en fonction du temps pendant lequel le drone est resté actif.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-md-skill14",
        name: "Awakened Will: Mastermind",
        nameFr: "Volonté déchaînée : Machiavel",
        image: "/images/skills/add/job2/MastermindPassive4.png",
        type: SKILL_TYPES.PASSIVE,
        level: 70,
        description: "Le passage en mode Usine Dynamo confère une certaine chance d’obtenir un Point de Mutation (PDY) supplémentaire. " +
            "De plus, l’utilisation des compétences actives spéciales déclenche l’état Overflow."
    },
    {
        id: "add-md-skill15",
        name: "Dynamo Configuration - Flick Disc",
        nameFr: "Configuration : disque",
        image: "/images/skills/add/job2/MastermindSkill9.png",
        type: SKILL_TYPES.ACTIVE,
        level: 80,
        description: [
            "Tu tires un disque d'énergie téléguidé qui passe jusqu'à 6 fois d'un adversaire à l'autre.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-md-skill16",
        name: "Awakened One",
        nameFr: "Spécialisation",
        image: "/images/skills/el/lk/TransShared.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 80,
        description: "Cette compétence améliore les capacités physiques."
    },
    {
        id: "add-md-skill17",
        name: "Force Field",
        nameFr: "Champ de force",
        image: "/images/skills/add/job2/MastermindSkill10.png",
        type: SKILL_TYPES.STRENGTH,
        level: 90,
        description: [
            "Add génère un champ magnétique spécial qui amplifie temporairement la puissance de la technologie nasod à l’aide d’une réplique de son Dynamo.\n" +
            "Tant qu’il se trouve dans ce champ, Add et ses alliés bénéficient d’une augmentation des attaques physiques et magiques, ainsi que d’une réduction des dégâts subis. " +
            "Le coût en PM et le temps de recharge des compétences de Configuration Dynamo sont également réduits.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    {
        id: "add-md-skill18",
        name: "A.I. Upgrade",
        nameFr: "I.A renforcé",
        image: "/images/skills/add/job2/MastermindPassive5.png",
        type: SKILL_TYPES.PASSIVE,
        level: 90,
        description: "La maîtrise de la technologie nasod par Add améliore davantage l’intelligence artificielle du [Installation - Marquage] ainsi que celle de ses autres compétences à tête chercheuse."
    },
    {
        id: "add-md-skill19",
        name: "Extreme Chaser",
        nameFr: "Champ de force",
        image: "/images/skills/add/job2/MastermindSkill11.png",
        type: SKILL_TYPES.BRAVERY,
        level: 95,
        description: [
            "Add déploie des ondes de choc qui poursuivent rapidement leurs cibles. " +
            "À l’impact, elles provoquent une explosion d’énergie et attaquent férocement les ennemis.",
            {
                type: "title",
                text: "Influencé par le Marquage"
            },
            "Vise automatiquement la cible marquée et inflige 20% de dégâts supplémentaires."
        ]
    },
    /*Dominateur*/
    {
        id: "add-dm-skill1",
        name: "Distortion Zone",
        nameFr: "Zone de distorsion",
        image: "/images/skills/add/job2/DominatorHyperActive.png",
        type: SKILL_TYPES.HYPER_ACTIVE_2,
        badge: SKILL_BADGES.HYPER_ACTIVE_2,
        level: 99,
        description: "Add active un dispositif de calcul dynamo spécifique qui lui permet de délimiter une zone spéciale. " +
            "Les adversaires voient leur vitesse diminuer fortement et reçoivent des dégâts supplémentaires."
    },
    {
        id: "add-dm-skill2",
        name: "Energy Flow",
        nameFr: "Flots énergétiques",
        image: "/images/skills/add/job2/DominatorPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        description: "Add contrôle parfaitement le flux d'énergie. " +
            "Si vous ne possédez aucun PCD, la régénération de PDY augmente. " +
            "Si vous possédez 1 ou plusieurs PCD, la consommation de PDY diminue en fonction du nombre de PCD que vous possédez. " +
            "La vitesse d'exécution des compétences d'installation augmente."
    },
    {
        id: "add-dm-skill3",
        name: "Control Tower",
        nameFr: "Tour de contrôle",
        image: "/images/skills/add/job2/DominatorPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        description: ["Add se bat de manière plus efficace grâce à la transformation du système de contrôle de ses dynamos.\n" +
        "Le temps de rechargement des compétences diminue quand vous dépensez des points de conversion de dynamo (sauf hyper compétence et compétence de relation).\n" +
        "Certaines compétences gagnent en efficacité.",
            {
                type: "title",
                text: "Accélération"
            },
            "Le temps de rechargement des compétences diminue de 1 seconde par PCD consommé.\n" +
            "Ceci est valable pour les compétences suivantes : " +
            "Booster déferlant, Fantôme traqueur, Installation - Rage ultime, Installation - Chute d'étoiles, Installation : impulseur chargé, Champ de force et Poursuivant extrême."
        ]
    },
    /*Dominateur Classe Master*/
    {
        id: "add-dm-master1",
        name: "Dynamo Factory Add-on - Flotilla/Stage 1",
        nameFr: "Extension d'usine dynamo - Flotille Niveau 1",
        image: "/images/skills/add/job2/DominatorMaster1.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Add invoque Flotille, qui le suit pendant une certaine durée et l’assiste au combat.",
            {
                type: "title",
                text: "Flotille"
            },
            "Renforcement de puissance : augmente les dégâts de toutes les compétences.",
            {
                type: "title",
                text: "Étape 1"
            },
            "Cette première étape est automatiquement débloquée lors du passage en Classe Maître"
        ]
    },
    {
        id: "add-dm-master2",
        name: "Dynamo Factory Add-on - Flotilla/Stage 2",
        nameFr: "Extension d'usine dynamo - Flotille Niveau 2",
        image: "/images/skills/add/job2/DominatorMaster2.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Add invoque Flotille, qui le suit pendant une certaine durée et lui apporte son soutien au combat.",
            {
                type: "title",
                text: "Flotille"
            },
            "Renforcement de puissance : augmente les dégâts de toutes les compétences.",
            "Mutation amplifiée : toutes les compétences d’installation bénéficient en permanence des effets du PDY.",
            {
                type: "title",
                text: "Étape 2"
            },
            "Cette deuxième étape se débloque grâce à une quête de compétence."
        ]
    },
    {
        id: "add-dm-master3",
        name: "Dynamo Factory Add-on - Flotilla/Stage 3",
        nameFr: "Extension d'usine dynamo - Flotille Niveau 3",
        image: "/images/skills/add/job2/DominatorMaster3.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Add invoque Flotille, qui le suit pendant une certaine durée et lui apporte son soutien au combat.",
            {
                type: "title",
                text: "Flotille"
            },
            "Renforcement de puissance : augmente les dégâts de toutes les compétences.",
            "Mutation amplifiée : toutes les compétences d’installation bénéficient en permanence des effets du PDY.",
            {
                type: "title",
                text: "Étape 3"
            },
            "Cette troisième étape se débloque grâce à une quête de compétence."
        ]
    },
    /*Dominateur Classe maître*/
    {
        id: "add-dm-master4",
        name: "Dynamo Factory Add-on - Flotilla/Stage 4",
        nameFr: "Extension d'usine dynamo - Flotille Niveau 4",
        image: "/images/skills/add/job2/DominatorMaster4.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Add invoque Flotille, qui le suit pendant une certaine durée et lui apporte son soutien au combat. " +
            "Flotille augmente les dégâts de toutes les compétences et améliore l’efficacité des compétences d’installation.",
            {
                type: "title",
                text: "Flotille"
            },
            "Renforcement de puissance : augmente les dégâts de toutes les compétences.",
            "Mutation amplifiée : toutes les compétences d’installation bénéficient en permanence des effets du PDY.\n",
            "Une fois toutes les utilisations de l’Usine de Fusion consommées, " +
            "le temps de recharge de toutes les compétences d’Add est réinitialisé, à l’exception de la compétence Quantification, " +
            "des Hyper compétences et des Compétences de lien.",
            {
                type: "title",
                text: "Étape 4"
            },
            "Cette quatrième étape se débloque grâce à une quête de compétence."
        ]
    }
]