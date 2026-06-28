import {SKILL_TYPES} from "../skillConstants.js";

export const chungSkills = [
    {
        id: "chung-skill-1",
        name: "Scare Chase",
        nameFr: "Poursuivant explosif",
        image: "/images/skills/chung/base/Scare_Chase.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: "Chung recharge son bazooka et tire un missile."
    },
    {
        id: "chung-skill-2",
        name: "Back Blast",
        nameFr: "Saut de recul",
        image: "/images/skills/chung/base/BackBlast.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Chung tire un missile et utilise l'effet de recul de l'explosion pour effectuer un saut vers l'arrière. " +
            "Il est invincible pendant l'attaque."
    },
    {
        id: "chung-skill-3",
        name: "Reload",
        nameFr: "Recharger",
        image: "/images/skills/chung/base/Reload.png",
        type: SKILL_TYPES.ACTIVE,
        level: 5,
        description: "Chung brandit son bazooka pour le recharger. Les adversaires proches sont touchés."
    },
    {
        id: "chung-skill-4",
        name: "SiegeShelling",
        nameFr: "Cible fixe",
        image: "/images/skills/chung/base/SiegeShelling.png",
        type: SKILL_TYPES.ACTIVE,
        level: 10,
        description: "Chung se met en position de tir :\n" +
            "Touche X : tir (consomme 1 obus, 7 tirs max., 1 perforation)\n" +
            "Touche W : coup (la compétence est interrompue)\n" +
            "Consommation de PM en continu"
    },
    {
        id: "chung-skill-5",
        name: "Shout",
        nameFr: "Cri",
        image: "/images/skills/chung/base/Shout.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Chung pousse un cri lorsqu’une attaque est subie afin de repousser la menace des ennemis.\n" +
            "Peut être utilisé pendant une attaque subie pour créer une zone autour de vous qui bloque les dégâts pendant 1 seconde."
    },
    {
        id: "chung-skill-6",
        name: "Aceldama",
        nameFr: "Temps orageux",
        image: "/images/skills/chung/base/Aceldama.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Chung tires plusieurs grenades en l'air. Celles-ci retombent aux alentours et explosent."
    },
    {
        id: "chung-skill-7",
        name: "Aiming Shot",
        nameFr: "Tir ciblé",
        image: "/images/skills/chung/base/Aiming_Shot.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Chung effectue un tir précis qui touche le premier adversaire à portée."
    },
]