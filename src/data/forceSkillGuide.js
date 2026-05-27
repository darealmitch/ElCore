import { SKILL_TYPES, SKILL_BADGES, FORCE_SKILL_RARITIES } from "./skillConstants.js";

export const forceSkillGuide = {
    title: "Compétences de force",
    summary:
        "Les compétences de force sont un système commun débloqué avec la 3e spécialisation. " +
        "Elles possèdent leur propre interface et permettent d'équiper des passifs, des actifs et des compétences d'alternance. " +
        "Ces compétences peuvent modifier certaines compétences existantes, ajouter des effets supplémentaires ou offrir de nouvelles options de combat. " +
        "Elles sont généralement obtenues grâce à des butins de donjon, puis activées depuis le menu dédié aux compétences de force.",
    details: [
        {
            title: "Fonctionnement général",
            text:
                "Contrairement aux compétences classiques visibles dans le menu de compétences, les compétences de force utilisent une interface dédiée. " +
                "Elles sont débloquées grâce à des objets obtenus en donjon, qui permettent ensuite d'accéder à la compétence trouvée dans ce nouveau menu.",
        },
        {
            title: "Types de compétences de force",
            text:
                "Les compétences de force sont divisées en trois catégories : les passifs de force, les actifs de force et les compétences d'alternance. " +
                "Ces compétences peuvent être sélectionnées, activées ou désactivées à tout moment, sauf en JcJ.",
        },
        {
            title: "Emplacements supplémentaires",
            text:
                "Une fois le système débloqué, 5 emplacements de compétences supplémentaires deviennent disponibles. " +
                "Le joueur peut alterner entre les emplacements classiques et ces emplacements supplémentaires avec la barre espace. " +
                "Ces emplacements ne sont pas réservés uniquement aux actifs de force : n'importe quelle compétence peut y être placée. " +
                "Cependant, le joueur reste limité à 10 compétences normales équipées au total, et ces emplacements supplémentaires ne possèdent pas d'emplacement de bonus de transcendance.",
        },
        {
            title: "Menu des compétences de force",
            text:
                "Le menu des compétences de force regroupe toutes les informations liées à ce système. " +
                "Il permet d'équiper jusqu'à 2 passifs, 5 actifs et 7 compétences d'alternance. " +
                "Un joueur peut stocker au minimum 32 compétences de force.",
        },
        {
            title: "Passifs de force",
            text:
                "Les passifs de force accordent des effets passifs lorsqu'ils sont équipés. " +
                "Ils ne sont pas propres à un personnage précis. Par exemple, certains passifs peuvent augmenter les PV ou restaurer des PV hors combat.",
        },
        {
            title: "Actifs de force",
            text:
                "Les actifs de force sont des commandes actives communes qui peuvent offrir des attaques, des effets utilitaires ou des bonus temporaires. " +
                "Par exemple, certains actifs permettent d'augmenter fortement la vitesse pendant une courte durée avant d'appliquer un contrecoup.",
        },
        {
            title: "Compétences d'alternance",
            text:
                "Les compétences d'alternance modifient certaines compétences propres à un personnage et à une classe. " +
                "Lorsqu'une compétence d'alternance est équipée, la compétence concernée change de fonctionnement, parfois de manière importante. " +
                "Chaque compétence d'alternance est obtenue séparément. Il est possible d'obtenir celles d'autres classes, mais elles ne seront pas utilisables si elles ne correspondent pas au personnage ou à la classe jouée.",
        },
        {
            title: "Rareté",
            text:
                "Certaines compétences de force existent en plusieurs raretés qui influencent leurs performances. " +
                "Cela concerne uniquement les passifs et les actifs de force. Les compétences d'alternance sont toujours classées comme communes et ne sont pas affectées par la rareté.",
        },
        {
            title: "Raretés disponibles",
            text:
                "Les passifs et actifs de force peuvent exister en rare, élite, unique ou légendaire. " +
                "La plupart des compétences existent seulement en version rare, élite ou unique, ce qui détermine l'efficacité de leurs effets. " +
                "Les compétences légendaires n'existent qu'en une seule variante et font partie des compétences de force les plus rares.",
        },
    ],
    detailsSkills: [
        {
            id: "force-passive-illipia-aura",
            name: "Illipia's Aura",
            nameFr: "Aura d'Illipia",
            image: "/images/skills/forceSkill/EnergyOfIllipia.png",
            type: SKILL_TYPES.PASSIVE,
            level: "force",
            badge: SKILL_BADGES.FORCE_SKILL,
            rarity: FORCE_SKILL_RARITIES.UNIQUE,
            auraType: "",
            description: "Augmente les PV maximums et permet au personnage de récupérer régulièrement une quantité fixe de PV lorsqu’il est hors combat.",
        },
        {
            id: "force-active-hyper-acceleration",
            name: "Hyper Acceleration",
            nameFr: "Hyper accélération",
            image: "/images/skills/forceSkill/ExtremeSpeed.png",
            type: SKILL_TYPES.ACTIVE,
            level: "force",
            badge: SKILL_BADGES.FORCE_SKILL,
            rarity: FORCE_SKILL_RARITIES.UNIQUE,
            auraType: "",
            description: "Ta vitesse de déplacement et ta capacité de saut augmentent fortement pendant une courte durée, mais cet effet entraîne ensuite des effets secondaires.",
        },
        {
            id: "force-passive-lightning-chain",
            name: "Lightning Chain",
            nameFr: "Sphère d'éclairs",
            image: "/images/skills/forceSkill/EnergyOfIllipia.png",
            type: SKILL_TYPES.PASSIVE,
            level: "force",
            badge: SKILL_BADGES.FORCE_SKILL,
            rarity: FORCE_SKILL_RARITIES.UNIQUE,
            auraType: "",
            description: "Une sphère se charge toutes les secondes tant que vous n'êtes pas en mode combat. " +
                "Une fois entièrement chargée, un éclair qui rebondit sur les ennemis est invoqué." +
                "À chaque touche supplémentaire, les dégâts diminuent.",
        },
    ]
};