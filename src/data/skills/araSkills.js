import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const araSkills = [
    {
        id: "ara-skill-1",
        name: "Energy Absorption",
        nameFr: "Concentration d'énergie",
        image: "/images/skills/ara/base/GainForce2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Ara vole 5 PM à deux adversaires maximum et les transforme en énergie spirituelle."
    },
    {
        id: "ara-skill-2",
        name: "Falling Dragon",
        nameFr: "Chute du dragon",
        image: "/images/skills/ara/base/FallingDragon2.png",
        type: SKILL_TYPES.BRAVERY,
        level: 1,
        description: ["Ara rassemble son énergie spirituelle et frappe violemment le sol avec son javelot",
            {
                type: "title",
                text: "Consommation d'énergie spirituelle",
            },
            "Cette compétence consomme 10 sphères."
        ]
    },
    {
        id: "ara-skill-3",
        name: "Dragon Stance 2: Pulling Thrust",
        nameFr: "Dent du dragon 2 : attraction",
        image: "/images/skills/ara/base/PullingThrust.png",
        type: SKILL_TYPES.TENACITY,
        level: 5,
        description: [
            "Ara transperce l'adversaire de son javelot et le tire vers elle.",
            {
                type: "title",
                text: "Restauration d'énergie spirituelle"
            },
            "Cette compétence génère 1 sphère.\n" +
            "Une autre compétence peut être activée avant le dernier coup.\n" +
            "En cas d'annulation, cette compétence régénère 2 sphère(s)."
        ]
    },
    {
        id: "ara-skill-4",
        name: "Tempest Dance",
        nameFr: "Vent tourbillonnant",
        image: "/images/skills/ara/base/TempestDance2(New).png",
        type: SKILL_TYPES.ACTIVE,
        level: 10,
        description: "Ara échappe à l’attaque de ses ennemis et effectue un grand saut."
    },
    {
        id: "ara-skill-5",
        name: "Wolf Stance 2: Wind Wedge",
        nameFr: "Dent de loup 2 : bourrasque",
        image: "/images/skills/ara/base/WindWedge.png",
        type: SKILL_TYPES.TENACITY,
        level: 15,
        description: [
            "Ara donne plusieurs coups rapides. La dernière attaque repousse l'adversaire en arrière.\n" +
            "L'ennemi a une certaine probabilité de subir des saignements qui infligent des dégâts en continu.",
            {
                type: "title",
                text: "Consommation d'énergie spirituelle"
            },
            "Cette compétence consomme 2 sphères.\n" +
            "Une autre compétence peut être activée avant le dernier coup.\n" +
            "En cas d'annulation, cette compétence régénère 2 sphère(s)."
        ]
    },
    {
        id: "ara-skill-6",
        name: "Shadoweave",
        nameFr: "Chasseur de fantômes 3 : ténébreux",
        image: "/images/skills/ara/base/ShadowKnot2.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: [
            "Ara forme avec le javelot un cercle ténébreux qui emprisonne les adversaires, puis les repousse.",
            {
                type: "title",
                text: "Consommation d'énergie spirituelle"
            },
            "Cette compétence consomme 2 sphères.\n" +
            "Une autre compétence peut être activée avant le dernier coup.\n" +
            "En cas d'annulation, cette compétence régénère 4 sphère(s)."
        ]
    },
    {
        id: "ara-skill-7",
        name: "",
        nameFr: "",
        image: "/images/skills/ara/base/BodyofSteel.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: [
            "D'un coup d'épaule, Ara repousse l'adversaire et génère une onde de choc qui étourdit les adversaires touchés pendant 1,5 seconde. " +
            "Elle est en protection K.O. pendant l'attaque.",
            {
                type: "title",
                text: "Consommation d'énergie spirituelle"
            },
            "Cette compétence consomme 2 sphères.\n" +
            "Aucune sphère n'est consommée lors de l'utilisation pour la conversion d'énergie spirituelle."
        ]
    },
]