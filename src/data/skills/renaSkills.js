import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const renaSkills = [
    {
        id: "rena-skill-1",
        name: "Backflip Shot",
        nameFr: "Flèches alpha",
        image: "/images/skills/rena/base/RenaSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Rena exécute un salto arrière et tire trois flèches. " +
            "Pendant le salto, elle ne peut pas être blessée."
    },
    {
        id: "rena-skill-2",
        name: "Perfect Storm",
        nameFr: "Tempête parfaite",
        image: "/images/skills/rena/base/RenaSkill2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 1,
        description: "Rena invoque une tempête en communiant avec les esprits du vent.\n" +
            "Elle avance lentement et partout où elle passe, elle régénère des PV et des PM grâce aux forces de la nature."
    },
    {
        id: "rena-skill-3",
        name: "Stinger",
        nameFr: "Épine",
        image: "/images/skills/rena/base/RenaSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 5,
        description: "Rena échappe rapidement à la menace des ennemis.\n" +
            "Peut être utilisé pendant une attaque subie. " +
            "Appuyez de nouveau sur la touche de compétence pendant la roulade arrière pour foncer vers l’avant."
    },
    {
        id: "rena-skill-4",
        name: "Aero Tornado",
        nameFr: "Tornade de flèches",
        image: "/images/skills/rena/base/RenaSkill4.png",
        type: SKILL_TYPES.BRAVERY,
        level: 10,
        description: "Rena tire une flèche de vent qui crée une violente tornade. " +
            "Avec le booster, la taille de la tornade et ses dégâts augmentent."
    },
    {
        id: "rena-skill-5",
        name: "Assault Kick",
        nameFr: "Coup retors",
        image: "/images/skills/rena/base/RenaSkill5.png",
        type: SKILL_TYPES.TENACITY,
        level: 15,
        description: "Rena effectue un salto et donne un coup de pied à l'adversaire pour aussitôt effectuer un nouveau salto et le frapper dans l'autre sens."
    },
    {
        id: "rena-skill-6",
        name: "Phœnix Strike",
        nameFr: "Envol du phénix",
        image: "/images/skills/rena/base/RenaSkill6.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Avec l'aide de l'esprit du feu, Rena invoque un puissant phénix qui décime les rangs ennemis devant elle."
    },
    {
        id: "rena-skill-7",
        name: "Siege Mode",
        nameFr: "Bon appui",
        image: "/images/skills/rena/base/RenaSkill7.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Rena se met bien sur ses appuis pour conférer plus de puissance à ses flèches. " +
            "Au repos, cette compétence consomme 2 PM/sec.\n" +
            "Appuyez sur la touche  pour effectuer un tir direct en échange de 15 PM ou appuyez sur la touche  pour effectuer un tir plongeant contre 25 PM.\n" +
            "Si vous possédez de l'EN, les cases seront consommées pour tirer des flèches encore plus puissantes.\n" +
            "Cette compétence peut être rechargée 1 fois en appuyant sur la touche de compétence."
    },
]