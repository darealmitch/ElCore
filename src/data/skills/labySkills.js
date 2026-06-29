import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const labySkills = [
    {
        id: "laby-skill-1",
        name: "BANGBANG",
        nameFr: "Ouf",
        image: "/images/skills/laby/base/LabySkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Laby utilise le miroir comme marchepied pour sauter et se mettre en sécurité. " +
            "Pendant l'exécution de la compétence, elle devient invincible."
    },
    {
        id: "laby-skill-2",
        name: "Inner Aurora",
        nameFr: "Aurore intérieure",
        image: "/images/skills/laby/base/LabySkill2.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: "Laby protège son ressenti pour n'éprouver que des émotions positives pendant la bataille.\n" +
            "Pendant la durée du bonus, l'attaque physique et l'attaque magique augmentent et des points de sensibilité sont régénérés en continu."
    },
    {
        id: "laby-skill-3",
        name: "Suplen",
        nameFr: "Ka-peng",
        image: "/images/skills/laby/base/LabySkill3.png",
        type: SKILL_TYPES.STRENGTH,
        level: 5,
        description: "Laby condense de l'énergie en une sphère et la décoche vers l'avant.\n" +
            "Cette compétence est uniquement utilisable en plein saut."
    },
    {
        id: "laby-skill-4",
        name: "Oi!",
        nameFr: "Hé, toi !",
        image: "/images/skills/laby/base/LabySkill4.png",
        type: SKILL_TYPES.TENACITY,
        level: 10,
        description: "Laby se lance en avant, attaque l'adversaire et le jette au sol (cette compétence est aussi utilisable en plein saut).\n" +
            "Après la chute, l'adversaire est groggy.\n" +
            "Si le coup est raté, Laby reçoit la moitié des PM consommés en retour.\n" +
            "Les ennemis fixes, en protection K.O. ou ceux mis au sol ne peuvent pas être lancés à terre.",
    },
    {
        id: "laby-skill-5",
        name: "Andromeda!",
        nameFr: "Andromède !",
        image: "/images/skills/laby/base/LabySkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Laby se cache dans le miroir pour se protéger des attaques des adversaires.\n" +
            "Appuyez sur une flèche directionnelle quand Laby est attaquée pour la faire téléporter dans la direction souhaitée.",
    },
    {
        id: "laby-skill-6",
        name: "Splashy Splashy",
        nameFr: "Splish, splash",
        image: "/images/skills/laby/base/LabySkill6.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Laby dévoile sa puissance : elle déferle une pluie d'énergie obscure sur ses ennemis.",
    },
    {
        id: "laby-skill-7",
        name: "Crunch N' Munch",
        nameFr: "Croc, croc",
        image: "/images/skills/laby/base/LabySkill7.png",
        type: SKILL_TYPES.STRENGTH,
        level: 20,
        description: "Laby invoque des ronces qui se propagent rapidement sur le sol. " +
            "Les adversaires touchés par les ronces sont entravés pendant 3 secondes.",
    },
]