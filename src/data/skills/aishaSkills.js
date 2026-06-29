import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const aishaSkills = [
    {
        id: "aisha-skill-1",
        name: "Teleport",
        nameFr: "Téléportation",
        image: "/images/skills/aicha/base/AishaS20.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Aisha se téléporte de quelques mètres dans la direction de son regard.\n" +
            "En JcJ, la consommation de PM augmente de 25% à chaque nouvelle utilisation et un temps de rechargement de 4 secondes s'y ajoute."
    },
    {
        id: "aisha-skill-2",
        name: "Chain Fireball",
        nameFr: "Boules de feu en chaîne",
        image: "/images/skills/aicha/base/AishaS17.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: "Aisha tire deux petites boules de feu, puis une plus grosse boule de feu. " +
            "Les adversaires touchés par cette dernière subissent des brûlures et des dégâts continus pendant 10 secondes."
    },
    {
        id: "aisha-skill-3",
        name: "Protection",
        nameFr: "Protection",
        image: "/images/skills/aicha/base/AishaRSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 5,
        description: "Aisha crée une barrière de flammes pendant 1 seconde afin de tenir les ennemis à distance.\n" +
            "Peut être utilisé pendant une attaque subie. L’effet de la barrière de flammes disparaît si vous attaquez."
    },
    {
        id: "aisha-skill-4",
        name: "Gust Storm",
        nameFr: "Tornade",
        image: "/images/skills/aicha/base/AishaS18.png",
        type: SKILL_TYPES.BRAVERY,
        level: 10,
        description: "Aisha crée une énorme colonne de flammes autour d'elle. " +
            "Les adversaires touchés prennent feu et subissent des dégâts continus pendant 10 secondes."
    },
    {
        id: "aisha-skill-5",
        name: "Lightning Bolt",
        nameFr: "Éclair fourdroyant",
        image: "/images/skills/aicha/base/AishaS29.png",
        type: SKILL_TYPES.STRENGTH,
        level: 15,
        description: "Aisha crée un courant électrique qu'elle canalise avec sa baguette et tire sous forme de rayon." +
            "Ceux qui subissent une électrocution tombent inconscients pendant un certain temps.\n" +
            "Le booster permet d'augmenter les dégâts infligés et d'allonger la durée d'inconscience de 1 seconde."
    },
    {
        id: "aisha-skill-6",
        name: "Meteor Call",
        nameFr: "Frappe du météore",
        image: "/images/skills/aicha/base/MeteorCall.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Aisha invoque un météore qui tombe du ciel. Dès que le météore touche le sol, il explose."
    },
    {
        id: "aisha-skill-7",
        name: "Binding Circle",
        nameFr: "Cercle d'enchantement",
        image: "/images/skills/aicha/base/AishaS21.png",
        type: SKILL_TYPES.TENACITY,
        level: 20,
        description: "Aisha crée un cercle magique qui empêche les déplacements de ses adversaires dans un rayon de 6 mètres."
    },
]