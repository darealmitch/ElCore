import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const ravenSkills = [
    {
        id: "raven-skill-1",
        name: "Maximum Cannon",
        nameFr: "Canon titan",
        image: "/images/skills/raven/base/RSActive1.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: "Raven concentre la puissance de la main nasod en une boule de feu rotative.",
    },
    {
        id: "raven-skill-2",
        name: "Shadow Step",
        nameFr: "Avancée dans l'ombre",
        image: "/images/skills/raven/base/STactive1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Raven traverse les rangs ennemis à la vitesse supersonique. " +
            "Au moment d'utiliser cette compétence, appuyez sur la touche W pour effectuer un puissant coup d'estoc.\n" +
            "Cette compétence peut également être utilisée pendant un saut.",
    },
    {
        id: "raven-skill-3",
        name: "Cannon Blade",
        nameFr: "Lame canon",
        image: "/images/skills/raven/base/RSActive2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 5,
        description: "Raven tire une boule de feu énorme avec son bras nasod."
    },
    {
        id: "raven-skill-4",
        name: "Power Assault",
        nameFr: "Assaut puissant",
        image: "/images/skills/raven/base/RSActive3.png",
        type: SKILL_TYPES.STRENGTH,
        level: 10,
        description: "Raven percute l'adversaire et le repousse."
    },
    {
        id: "raven-skill-5",
        name: "Emergency Boost",
        nameFr: "Tir d'urgence",
        image: "/images/skills/raven/base/EmergencyShoot.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Le Bras Nasod libère instantanément de l’énergie pour permettre à Raven de s'échapper lorsqu’il est attaqué.\n" +
            "S'active pendant une attaque subie. " +
            "Maintenez une touche directionnelle pour effectuer une esquive dans la direction souhaitée."
    },
    {
        id: "raven-skill-6",
        name: "Seven Burst",
        nameFr: "Explosion septuple",
        image: "/images/skills/raven/base/RSActive5.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Raven lance des flammes à l'aide de la main nasod."
    },
    {
        id: "raven-skill-7",
        name: "Flame Sword",
        nameFr: "Épée enflammée",
        image: "/images/skills/raven/base/FlameSword.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Raven attaque en enflammant ton épée. " +
            "Les adversaires touchés subissent des brûlures pendant un court instant et laissent des flammes derrière eux."
    }
]