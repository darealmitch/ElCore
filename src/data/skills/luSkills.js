import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const luSkills = [
    {
        id: "lu-skill-1",
        name: "Flick Shot",
        nameFr: "Tir rapide",
        image: "/images/skills/lu/base/LuCielSkill5.png",
        type: SKILL_TYPES.STRENGTH,
        level: 1,
        description: ["Lorsque la balle touche, elle se divise en deux fragments qui rebondissent plusieurs fois contre les adversaires. " +
        "En cas de coup parfait, il existe 50% de chances que la balle se divise en trois fragments.",
            {
                type: "title",
                text: "Compétence d'alternance (Ciel)\n",
            },
            "Lorsque vous jouez avec Lu, cette compétence vous fait passer à Ciel.\n" +
            "L'alternance génère 4 points de combinaison lorsque la cible est touchée."
        ]
    },
    {
        id: "lu-skill-2",
        name: "Stomp",
        nameFr: "Écrasement",
        image: "/images/skills/lu/base/LuCielSkill2.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: ["Lu saute en avant et frappe violemment le sol. Tous les adversaires touchés sont ralentis pendant 2 secondes.",
            {
                type: "title",
                text: "Compétence d'alternance (Lu)\n",
            },
            "Lorsque vous jouez avec Ciel, cette compétence vous fait passer à Lu.\n",
            "L'alternance génère 2 points de combinaison lorsque la cible est touchée."
        ]
    },
    {
        id: "lu-skill-3",
        name: "Evil Claw",
        nameFr: "Griffe démoniaque",
        image: "/images/skills/lu/base/LuCielSkill6.png",
        type: SKILL_TYPES.TENACITY,
        level: 5,
        description: ["Une griffe démoniaque inflige des dégâts multiples à l'adversaire en face de Lu.",
            {
                type: "title",
                text: "Compétence d'alternance (Lu)\n",
            },
            "Lorsque vous jouez avec Ciel, cette compétence vous fait passer à Lu.\n",
            "L'alternance génère 2 points de combinaison lorsque la cible est touchée."
        ]
    },
    {
        id: "lu-skill-4",
        name: "Nether Shredder",
        nameFr: "Tiraillement infernal",
        image: "/images/skills/lu/base/LuCielSkill9.png",
        type: SKILL_TYPES.BRAVERY,
        level: 10,
        description: ["Immobilise une cible pendant 2 secondes et concentre les attaques sur celle-ci.",
            {
                type: "title",
                text: "Compétence de combinaison",
            },
            "Uniquement possible lorsque le compteur de points de combinaison est plein."
        ]
    },
    {
        id: "lu-skill-5",
        name: "Aura of Punishment",
        nameFr: "Emblème punitif",
        image: "/images/skills/lu/base/LuCielSkill11.png",
        level: 10,
        description: "Augmente tes dégâts critiques et diminue la probabilité de subir un coup critique."
    },
    {
        id: "lu-skill-6",
        name: "Helping Hand",
        nameFr: "Danse à deux",
        image: "/images/skills/lu/base/LuCielSkill9.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Lorsque votre partenaire est en danger, tendez-lui une main secourable.\n" +
            "\n" +
            "Peut être utilisée pendant que vous êtes attaqué. Appuyez sur la touche ← ou → pour esquiver dans la direction souhaitée."
    },
    {
        id: "lu-skill-7",
        name: "Hunting Prey",
        nameFr: "Fléau",
        image: "/images/skills/lu/base/LuCielSkill4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Tu attires tous tes adversaires et reçoit une protection K.O."
    },
    {
        id: "lu-skill-8",
        name: "Soul Infest",
        nameFr: "Fléau des âmes",
        image: "/images/skills/lu/base/LuCielSkill8.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: ["Tu libères des âmes et fais exploser des grenades. " +
        "La vitesse d'attaque et de déplacement des adversaires touchés diminue pendant 7 sec.",
            {
                type: "title",
                text: "Compétence de combinaison",
            },
            "Uniquement possible lorsque le compteur de points de combinaison est plein."
        ]
    },
]