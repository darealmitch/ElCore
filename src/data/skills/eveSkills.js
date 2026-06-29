import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const eveSkills = [
    {
        id: "eve-skill-1",
        name: "Photon Flash",
        nameFr: "Illusion d'optique",
        image: "/images/skills/eve/base/PhotonBlink.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Ève esquive vers l'arrière et laisse sur place un leurre en plasma. " +
            "Si un adversaire le touche, il explose. Ève est invincible pendant l'esquive.\n" +
            "Compétence d'activation du noyau\n" +
            "En cas d'attaque réussie en booster, l'attaque du noyau est activée (seulement si le noyau a déjà été invoqué)."
    },
    {
        id: "eve-skill-2",
        name: "Dimension Link - Sentry",
        nameFr: "Lien dimensionnel - Éclaireur",
        image: "/images/skills/eve/base/Dimension_Link.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: [
            "Ève invoque un éclaireur nasod qui la suit et la soutient.",
            {
                type: "title",
                text: "Éclaireur"
            },
            "Il suit le joueur et attaque les ennemis aux alentours.",
            "En JcJ, il dispose de 25% des PV du joueur et ne peut pas empêcher l'ennemi de se déplacer.",
            {
                type: "title",
                text: "Compétence d'activation du noyau"
            },
            "En cas d'attaque réussie en booster, l'attaque du noyau est activée (seulement si le noyau a déjà été invoqué)."
        ]
    },
    {
        id: "eve-skill-3",
        name: "Illusion Stinger",
        nameFr: "Dard illusoire",
        image: "/images/skills/eve/base/EveSkill3.png",
        type: SKILL_TYPES.STRENGTH,
        level: 5,
        description: [
            "Ève transforme ses gravitons en javelots qu'elle lance sur ses adversaires. " +
            "Sur leur trajectoire, ils projettent des décharges qui infligent des dégâts.\n",
            {
                type: "title",
                text: "Compétence d'activation du noyau"
            },
            "En cas d'attaque réussie en booster, l'attaque du noyau est activée (seulement si le noyau a déjà été invoqué)."
        ]
    },
    {
        id: "eve-skill-4",
        name: "Embleme Aura",
        nameFr: "Emblème de la destruction",
        image: "/images/skills/eve/base/SOE.png",
        type: SKILL_TYPES.ACTIVE,
        level: 10,
        description: "L'attaque et les dégâts supplémentaires augmentent."
    },
    {
        id: "eve-skill-5",
        name: "Restrain",
        nameFr: "Blocage",
        image: "/images/skills/eve/base/Suppression(Eve).png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Ève utilise l’éclaireur Nasod pour immobiliser votre ennemi, puis entrez une direction afin de vous déplacer au-dessus ou vers l’arrière pour tenter une contre-attaque.\n" +
            "Peut être utilisé pendant que vous êtes attaqué."
    },
    {
        id: "eve-skill-6",
        name: "Dimension Link - Guardian",
        nameFr: "Lien dimensionnel - Gardien",
        image: "/images/skills/eve/base/Dimension_Link_Guardian.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: [
            "Ève ouvre un seuil dimensionnel et invoque un gardien nasod. " +
            "Le gardien nasod vise le sol et envoie des vagues d'électrons sur sa droite et sa gauche.",
            {
                type: "title",
                text: "Compétence d'activation du noyau"
            },
            "En cas d'attaque réussie en booster, l'attaque du noyau est activée (seulement si le noyau a déjà été invoqué)."
        ]
    },
    {
        id: "eve-skill-7",
        name: "Mana Conversion",
        nameFr: "Saignée",
        image: "/images/skills/eve/base/Energy_Conversion.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Ève modifie un court instant les flux du noyau, ce qui lui permet d'extraire de l'énergie de ses PV.\n"
    },
]