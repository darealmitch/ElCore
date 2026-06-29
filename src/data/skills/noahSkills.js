import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const noahSkills = [
    {
        id: "noah-skill-1",
        name: "Hidden Blade",
        nameFr: "Stylet",
        image: "/images/skills/noah/base/NoahSkill01.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Noah frappe l’ennemi avec des mouvements rapides et impitoyables. " +
            "Les ennemis touchés subissent un effet de saignement."
    },
    {
        id: "noah-skill-2",
        name: "Fission",
        nameFr: "Fissure",
        image: "/images/skills/noah/base/NoahSkill02.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: "Noah lance une magie noire devant lui. " +
            "Des fragments obscurs apparaissent au-dessus de la cible touchée par la magie noire et lui infligent des dégâts supplémentaires."
    },
    {
        id: "noah-skill-3",
        name: "Chilling Crescent",
        nameFr: "Lune de givre",
        image: "/images/skills/noah/base/NoahSkill03.png",
        type: SKILL_TYPES.STRENGTH,
        level: 5,
        description: "L’énergie de la Lune de givre utilise la Pierre de Lune pour projeter une vague d’énergie en forme de croissant de lune vers l’avant."
    },
    {
        id: "noah-skill-4",
        name: "The Hour Between Dog and Wolf",
        nameFr: "Jour & nuit",
        image: "/images/skills/noah/base/NoahSkill04.png",
        type: SKILL_TYPES.TENACITY,
        level: 10,
        description: "À l’activation, réduit le temps de recharge des compétences du lanceur et diminue la vitesse de déplacement ainsi que la hauteur de saut des ennemis à portée.\n" +
            "(À l’exception des Hyper compétences et des compétences de liaison.)"
    },
    {
        id: "noah-skill-5",
        name: "Moon Shadow",
        nameFr: "Ombre lunaire",
        image: "/images/skills/noah/base/NoahSkill05.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Noah Laisse une ombre derrière lui afin d’esquiver les attaques ennemies.\n" +
            "Peut être utilisée pendant une attaque. " +
            "Il est possible de choisir la direction de la téléportation à l’aide des touches ↑, ← et →.\n" +
            "L’ombre reste en place pendant 5 secondes après l’esquive. " +
            "Appuyez de nouveau sur la touche de compétence pour vous téléporter jusqu’à l’ombre."
    },
    {
        id: "noah-skill-6",
        name: "Dark Shadow",
        nameFr: "Lune Noire",
        image: "/images/skills/noah/base/NoahSkill06.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "L’énergie des ténèbres se rassemble. " +
            "Souvenez-vous de la Lune que vous honoriez autrefois. " +
            "Les ténèbres renfermées dans la Pierre de Lune s’éveillent et donnent naissance à la Lune Obscure."
    },
    {
        id: "noah-skill-7",
        name: "Quick Strike",
        nameFr: "Foncer",
        image: "/images/skills/noah/base/NoahSkill07.png",
        type: SKILL_TYPES.STRENGTH,
        level: 20,
        description: "Noah s’entoure de ténèbres et bondit vers l’avant. " +
            "Fonce rapidement sur les ennemis tandis qu’une tempête de ténèbres fait rage autour de lui.\n" +
            "(Peut également être activée en plein saut.)"
    },
]