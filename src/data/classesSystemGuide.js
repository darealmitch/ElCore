export const classesSystemGuide = {
    title: "Le système de classes d'Elsword",
    intro:
        "Elsword possède l'un des systèmes de classes les plus profonds de tous les MMORPGs d'action : 15 personnages jouables avec chacun quatre voies de job donnent en tout 60 classes uniques.",
    characterOverview: [
        {
            character: "Elsword",
            role: "Maître de l'épée",
            combatStyle: "Mêlée agressive avec grande épée, combos puissants",
            difficulty: "Facile",
        },
        {
            character: "Aisha",
            role: "Magicienne",
            combatStyle: "Magie élémentaire, attaques à bâton, téléportation",
            difficulty: "Moyen",
        },
    ],
    beginnerRecommendations: {
        title: "Quel personnage choisir pour débuter ?",
        text:
            "Pour commencer, nous recommandons Elsword, Raven Elesis ou Add. Tous trois ont des combos de mêlée simples, encaissent bien les coups et sont efficaces aussi bien en solo qu'en groupe.",
    },
    jobProgression: [
        {
            stage: "Classe de base",
            level: "Niveaux 1-14",
            description:
                "Vous apprenez les mécaniques de base et les combos fondamentaux de votre personnage.",
        },
        {
            stage: "1er Job",
            level: "Niveau 15",
            description:
                "Vous choisissez une des quatre voies. Ce choix change fondamentalement votre style de jeu.",
        },
        {
            stage: "2e Job",
            level: "Niveau 35",
            description:
                "Spécialisation supplémentaire avec de nouvelles compétences et des mécaniques améliorées.",
        },
        {
            stage: "3e Job",
            level: "Niveau 99",
            description:
                "Identité de classe complète avec des compétences ultimes et une transformation.",
        },
        {
            stage: "Classe Maître",
            level: "Après Rigomor",
            description:
                "Compétences passives supplémentaires pour tous les personnages en 3e job.",
        },

    ],
    characterMechanics: [
        {
            characterId: "elsword",
            title: "Particularité d'Elsword : la Voie de l'épée",
            text: "En jouant avec Elsword, une jauge supplémentaire apparaît sous celle des PM : la jauge de la Voie de l'épée. " +
                "Elle permet d'activer l'aura de vitalité ou l'aura de destruction pendant une période limitée. " +
                "Selon le type de combos ou de compétences utilisés, la jauge tend vers la vitalité ou vers la destruction, ce qui permet d'obtenir des bonus supplémentaires.",
            note: "Le système est contre-intuitif au premier abord : les attaques de vitalité font baisser la vitalité et monter la destruction, tandis que les attaques de destruction font baisser la destruction et monter la vitalité. " +
                "Seules les attaques qui consomment la jauge profitent donc des bonus de leur aura respective.",
        },
    ],
};