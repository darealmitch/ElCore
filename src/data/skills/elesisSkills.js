import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const elesisSkills = [
    {
        id: "elesis-skill-1",
        name: "Spiral Blast",
        nameFr: "Spirale explosive",
        image: "/images/skills/elesis/base/Spiral-Blast(Elesis).png",
        type: SKILL_TYPES.STRENGTH,
        level: 1,
        auraType: "destruction",
        description: "D'un coup d'épée, Elesis concentre de l'énergie qu'elle libère sur les adversaires sous forme d'une tempête de feu. " +
            "Le coup d'épée étourdit les adversaires touchés."
    },
    {
        id: "elesis-skill-2",
        name: "Dodge and Slash",
        nameFr: "Esquive offensive",
        image: "/images/skills/elesis/base/DAS.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        auraType: "tempete",
        description: "Elesis sprinte en avant et esquive les adversaires qui l'attaquent.\n" +
            "Appuyez une autre fois sur la touche de compétence pour faire un autre sprint et sur la touche W pour projeter l'adversaire dans les airs."
    },
    {
        id: "elesis-skill-3",
        name: "Wild Shock",
        nameFr: "Choc sauvage",
        image: "/images/skills/elesis/base/WS.png",
        type: SKILL_TYPES.STRENGTH,
        level: 5,
        auraType: "tempete",
        description: "Elesis lance une vague de feu vers l'avant. En mode destruction, la défense de l'adversaire est ignorée."
    },
    {
        id: "elesis-skill-4",
        name: "Mega Buster",
        nameFr: "Méga colonne de feu",
        image: "/images/skills/elesis/base/MB.png",
        type: SKILL_TYPES.BRAVERY,
        level: 10,
        auraType: "destruction",
        description: "Elesis frappe le sol et déclenche une gigantesque colonne de feu."
    },
    {
        id: "elesis-skill-5",
        name: "Roll & Dodge",
        nameFr: "Roulade d'esquive",
        image: "/images/skills/elesis/base/RollandDodge.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Elesis effectue une roulade vers l’arrière lorsqu'elle est attaqué afin de créer de la distance.\n" +
            "\n" +
            "Est utilisée pendant que vous êtes attaqué. " +
            "Appuyez de nouveau sur la touche de compétence pendant la roulade pour reculer encore davantage."
    },
    {
        id: "elesis-skill-6",
        name: "Unlimited Blade (Elesis)",
        nameFr: "Lame infinie",
        image: "/images/skills/elesis/base/ElesisUB.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        auraType: "tempete",
        description: "Elesis porte une rapide série de coups et frappe durement le sol avec son épée à la fin."
    },
    {
        id: "elesis-skill-7",
        name: "Iron Body - Strong",
        nameFr: "Ambition - puissante",
        image: "/images/skills/elesis/base/SaK-Active4.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Pendant un moment, Elesis bénéficie de la protection K.O. et sa puissance d'attaque augmente."
    },
]