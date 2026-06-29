import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const ainSkills = [
    {
        id: "ain-skill-1",
        name: "Abschluss",
        nameFr: "Exitus",
        image: "/images/skills/ain/base/AinSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: [
            "Ain rassemble l'énergie d'Eldrit des environs et s'en sert pour former un bouclier. " +
            "Il bénéficie de la protection K.O. pendant l'activation.",
            {
                type: "title",
                text: "Isolé du monde"
            },
            "Ain est immunisé contre tous les dégâts pendant que la touche est maintenue appuyée (5 secondes au maximum).\n" +
            "Consommation de 5 PM/seconde"
        ]
    },
    {
        id: "ain-skill-2",
        name: "Explosion",
        nameFr: "Disruptio",
        image: "/images/skills/ain/base/AinSkill2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 1,
        description: [
            "Ain condense de l'énergie d'Eldrit pour la faire exploser après quelques instants.",
            {
                type: "title",
                text: "Compétence de champ\n"
            },
            "Elle réagit aux serments.",
            "Maintenir la touche de compétence appuyée permet de consommer 25 PM et d'obtenir un champ supplémentaire.\n" +
            "Chaque champ supplémentaire augmente les dégâts et la portée (2 fois au maximum)."
        ]
    },
    {
        id: "ain-skill-3",
        name: "Erst · Bohren",
        nameFr: "Primus Terebra",
        image: "/images/skills/ain/base/AinSkill3.png",
        type: SKILL_TYPES.TENACITY,
        level: 5,
        description: [
            "Ain condense de l'énergie d'Eldrit pour la faire exploser après quelques instants.",
            {
                type: "title",
                text: "Compétence d'émission"
            },
            "Ain bénéficie du pouvoir divin pour projeter des armes." +
            "Il est possible de modifier la hauteur du javelot pendant que la touche de compétence est maintenue.\n" +
            "Appuyer à nouveau sur la touche de compétence téléporte Ain à l'endroit du javelot."
        ]
    },
    {
        id: "ain-skill-4",
        name: "Bohren · Vereisen",
        nameFr: "Forare Sursum Glacies",
        image: "/images/skills/ain/base/AinSkill5.png",
        type: SKILL_TYPES.STRENGTH,
        level: 10,
        description: [
            "Un projectile d'énergie d'Eldrit permet à Ain de freiner la course des adversaire devant lui et de les geler.",
            {
                type: "title",
                text: "Compétence d'émission"
            },
            "Elle réagit aux serments." +
            "La cible touchée est gelée pendant 3 secondes.",
        ]
    },
    {
        id: "ain-skill-5",
        name: "Dritt · Stilett",
        nameFr: "Tertius Dolon",
        image: "/images/skills/ain/base/AinSkill4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: [
            "Ain émet Tertius Dolon, la dague divine, et la lance sur le dernier adversaire touché.",
            {
                type: "title",
                text: "Compétence d'émission"
            },
            "Ain bénéficie du pouvoir divin pour projeter des armes." +
            "Ain la lance sur le dernier adversaire touché en appuyant à nouveau sur la touche de compétence (temps de rechargement après le lancer : 0.5 seconde).\n" +
            "Le marquage de la dernière cible touchée disparaît après 2 secondes.\n" +
            "Après expiration, Ain régénère 6 PM par unité.\n" +
            "Durée : 10 secondes"
        ]
    },
    {
        id: "ain-skill-6",
        name: "Sakrosankt Zertreten",
        nameFr: "Inviolatus Conculcare",
        image: "/images/skills/ain/base/AinSkill6.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: [
            "Ain dirige de l'énergie d'Eldrit à proximité et déclenche une réaction en chaîne qui émet une arme céleste avant de la lancer. " +
            "L'énergie d'Eldrit accumulée explose.",
            {
                type: "title",
                text: "Compétence d'émission"
            },
            "Ain bénéficie du pouvoir divin pour projeter des armes."
        ]
    },
    {
        id: "ain-skill-7",
        name: "Sakrosankt Zertreten",
        nameFr: "Gladius Disrumpere",
        image: "/images/skills/ain/base/AinSkill7.png",
        type: SKILL_TYPES.TENACITY,
        level: 20,
        description: [
            "Ain se sert du pouvoir d'Ishmaël pour transcender brièvement ses limites et fait exploser l'énergie d'Eldrit à chaque touche pour infliger des dégâts supplémentaires.",
            {
                type: "title",
                text: "Compétence d'émission"
            },
            "Ain bénéficie du pouvoir divin pour projeter des armes.\n"+
            "Ain grandit de 30%.\n" +
            "Toutes les résistances: +100.\n" +
            "Ain ignore les effets défensifs de ses ennemis.\n" +
            "15% de chances de déclencher une double attaque\n" +
            "Durée : 10 secondes"
        ]
    },
]