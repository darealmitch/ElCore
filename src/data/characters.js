export const characters = [
    {
        id: "elsword",
        name: "Elsword",
        fullName: "Elsword",
        age: "13 ans",
        gender: "Mâle",
        type: "Épéiste",
        weapon: "Épée",
        role: "DPS / Combat rapproché",
        featuredClass: "Genesis",
        image: "/images/personnages/elsword.png",
        description: "Un épéiste offensif, simple à prendre en main et efficace en combat rapproché.",
        lore: "Petit frère d'Elesis, la Première Capitaine des Chevaliers Rouges de Velder, Elsword s'est entraîné dès son plus jeune âge pour être aussi fort que sa sœur, apprenant ses techniques au sabre auprès d'un chevalier de Velder." +
            " Il a débuté son aventure en recevant la mission de restaurer l'El en tant que membre de la Patrouille de l'El.",
        classes: ["Knight Emperor", "Rune Master", "Immortal", "Genesis"]
    },
    {
        id: "aisha",
        name: "Aisha",
        fullName: "Aisha",
        age: "15 ans",
        gender: "Female",
        type: "Grande Magicienne",
        weapon: "Bâton",
        role: "Magie / DPS",
        featuredClass: "Aether Sage",
        image: "/images/personnages/aisha.png",
        description: "Une magicienne puissante, spécialisée dans les sorts à distance et le contrôle magique.",
        lore: "Magicienne accomplie devenue Grande Magicienne dès son plus jeune âge, Aisha découvre lors d'un voyage avec son grand-père un anneau antique qui absorbe la majeure partie de ses pouvoirs. " +
            "Amputée de la plupart de ses capacités, elle se lance dans un périple pour les récupérer en suivant la signature magique de l'anneau disparu.",
        classes: ["Aether Sage", "Oz Sorcerer", "Metamorphy", "Lord Azoth"]
    },
    {
        id: "rena",
        name: "Rena",
        fullName: "Rena",
        age: "Inconnue",
        gender: "Female",
        type: "Elfe Archère",
        weapon: "Arc",
        role: "Distance / Mobilité",
        featuredClass: "Daybreaker",
        image: "/images/personnages/rena.png",
        description: "Une archère agile qui combine attaques à distance, mobilité et lien avec les esprits.",
        lore: "La plus mature et la plus belle de la Patrouille de l'El. Alors que le lien avec le monde des esprits s'affaiblit de plus en plus, Rena est déterminée à restaurer le pouvoir de l'El pour rétablir cette connexion. " +
            "Elle ressent la résonance de l'El depuis l'Arbre de l'El du Village de Ruben et part enquêter.",
        classes: ["Anemos", "Daybreaker", "Twilight", "Prophetess"]
    },
    {
        id: "raven",
        name: "Raven",
        fullName: "Raven",
        age: "24 ans",
        gender: "Mâle",
        type: "Mercenaire",
        weapon: "Main Nasod / Lame",
        role: "DPS / Corps à corps",
        featuredClass: "Furious Blade",
        image: "/images/personnages/raven.png",
        description: "Un mercenaire agressif utilisant sa lame et son bras Nasod pour maintenir la pression.",
        lore: "Un homme du peuple qui a gravi les échelons jusqu'à devenir le capitaine d'un célèbre ordre de chevaliers mercenaires. " +
            "Victime d'une machination d'aristocrates jaloux, il perd tout ce qui lui était cher en une seule nuit. Réanimé par les Nasods, il a juré de se venger du Royaume de Velder. " +
            "Désormais, rongé par la culpabilité de ses actes passés, il rejoint la Patrouille de l'El en guise d'expiation.",
        classes: ["Furious Blade", "Rage Hearts", "Nova Imperator", "Revenant"]
    },
    {
        id: "eve",
        name: "Eve",
        fullName: "Eve",
        age: "Unknown",
        gender: "Female",
        type: "Reine Nasod",
        weapon: "Drones Nasod",
        role: "DPS / Technologie",
        featuredClass: "Code: Sariel",
        image: "/images/personnages/eve.png",
        description:
            "La reine des Nasods, spécialisée dans les attaques énergétiques et mécaniques.",
        lore: "La Reine des Nasods, dotée d'une haute intelligence et d'une conscience de soi développée. " +
            "Eve est entrée en hibernation lorsque le pouvoir de l'El a soudainement disparu, mais se réveille lorsque de l'énergie El s'infiltre suite aux perturbations causées par la Patrouille de l'El. " +
            "Elle rejoint Elsword et ses compagnons pour retrouver l'El et reconstruire le noyau d'énergie qu'elle a découvert détruit.",
        classes: ["Code: Ultimate", "Code: Esencia", "Code: Sariel", "Code: Antithese"],
    },
    {
        id: "chung",
        name: "Chung",
        fullName: "Prince Seiker",
        age: "13 ans",
        gender: "Mâle",
        type: "Gardien",
        weapon: "Destroyer",
        role: "Tank / Canon",
        featuredClass: "Centurion",
        image: "/images/personnages/chung.png",
        description:
            "Un jeune gardien en armure lourde utilisant un énorme canon pour contrôler le combat.",
        lore: "Héritier de la famille Seiker, protecteurs attitrés de la Cité d'Hamel. Lorsque son père, le Colosse Blanc Helputt, est corrompu par la magie démoniaque et envahit Hamel, Chung tente de l'arrêter en vain. " +
            "Il rejoint la Patrouille de l'El pour devenir plus fort, choisissant de se faire appeler Chung plutôt que son vrai nom jusqu'à ce qu'il s'estime digne de le porter.",
        classes: ["Comet Crusader", "Fatal Phantom", "Centurion", "Dius Aer"],
    },
    {
        id: "ara",
        name: "Ara",
        fullName: "Ara Haan",
        age: "17 ans",
        gender: "Female",
        type: "Artiste martiale",
        weapon: "Lance",
        role: "Mobilité / Combos",
        featuredClass: "Shakti",
        image: "/images/personnages/ara.png",
        description:
            "Une combattante agile utilisant la lance, les arts martiaux et l’énergie spirituelle.",
        lore: "Née dans une famille d'arts martiaux de l'Empire du Nord, Ara Haan voit son frère Aren être possédé par un démon, détruisant leur village et leur famille sous le nom de 'Ran' en quête de l'El de la Lune. " +
            "Avec l'aide d'Eun, un renard divin scellé en elle, elle se lance à la poursuite de son frère pour le sauver.",
        classes: ["Apsara", "Devi", "Shakti", "Surya"],
    },
    {
        id: "elesis",
        name: "Elesis",
        fullName: "",
        age: "16 ans",
        gender: "Female",
        type: "Chevalière",
        weapon: "Claymore",
        role: "DPS / Frontline",
        featuredClass: "Empire Sword",
        image: "/images/personnages/elesis.png",
        description:
            "Une chevalière puissante maniant une grande épée avec force et maîtrise.",
        lore: "Influencée par son père, chevalier libre de Velder, Elesis est elle-même une épéiste hors pair. " +
            "Lorsqu'elle et Elsword sont soudainement attaqués par des démons, elle anticipe le danger et rejoint les Chevaliers de Velder pour protéger le royaume de l'invasion démoniaque imminente. " +
            "Elle finit par retrouver le démon qui avait attaqué Feita et Velder.",
        classes: ["Empire Sword", "Flame Lord", "Bloody Queen", "Adrestia"],
    },
    {
        id: "add",
        name: "Add",
        fullName: "Edward Grenore",
        age: "16 ans",
        gender: "Mâle",
        type: "Scientifique / Dynamo",
        weapon: "Dynamos Nasod",
        role: "Burst / Technologie",
        featuredClass: "Doom Bringer",
        image: "/images/personnages/add.png",
        description:
            "Un génie obsédé par la technologie Nasod, capable de manipuler énergie, espace et temps.",
        lore: "Descendant d'une éminente famille de chercheurs Nasod persécutée pour avoir étudié des savoirs interdits visant à rendre les Nasods plus 'humains'. " +
            "En fuyant, Add tombe dans les failles du temps et de l'espace, y acquérant d'immenses connaissances. " +
            "Il parvient finalement à s'en échapper et entame un voyage pour rejoindre sa propre ligne temporelle.",
        classes: ["Doom Bringer", "Dominator", "Mad Paradox", "Overmind"],
    },
    {
        id: "luciel",
        name: "Lu/Ciel",
        fullName: "Luciela \"Lu\" R. Sourcream & Ciel",
        age: "Unknown / 24 ans",
        gender: "Female / Mâle",
        type: "Duo démoniaque",
        weapon: "Gantelets / gunblades",
        role: "Duo / Polyvalent",
        featuredClass: "Catastrophe",
        image: "/images/personnages/luciel.png",
        description:
            "Un duo lié par contrat, combinant puissance démoniaque et attaques rapides.",
        lore: "Une reine démoniaque déchue et un assassin, tous deux traqués par des assassins du royaume des démons. " +
            "Au bord de la mort, ils parviennent à conclure un contrat spirituel qui leur permet d'échapper de justesse à leurs poursuivants. " +
            "Pour recouvrer le pouvoir et l'autorité perdus de Lu, ils partent ensemble en quête.",
        classes: ["Catastrophe", "Innocent", "Diangelion", "Demersio"],
    },
    {
        id: "rose",
        name: "Rose",
        fullName: "Anna Testarosa",
        age: "19 ans",
        gender: "Female",
        type: "Soldate",
        weapon: "Armes à feu",
        role: "Distance / Armes",
        featuredClass: "Prime Operator",
        image: "/images/personnages/rose.png",
        description:
            "Une combattante venue d’une autre dimension, experte dans l’utilisation des armes à feu.",
        lore: "Membre du [Jardin Majestueux], la force d'élite protégeant la Cité Royale des Cieux, elle a reçu le nom de code [Rose] en tant que la plus puissante de cet ordre. " +
            "Pour éliminer les ennemis menaçant les Cieux, Rose a été mandatée pour enquêter dans une dimension parallèle appelée Elrios.",
        classes: ["Tempest Burster", "Black Massacre", "Minerva", "Prime Operator"],
    },
    {
        id: "ain",
        name: "Ain",
        fullName: "Ainchase Ishmael",
        age: "Unknown",
        gender: "Mâle",
        type: "Émissaire divin",
        weapon: "Pendule",
        role: "Divin / Support",
        featuredClass: "Bluhen",
        image: "/images/personnages/ain.png",
        description:
            "Un être créé par la déesse Ishmael, utilisant projection magique et pouvoir divin.",
        lore: "Un être mystérieux qui a surgi devant la Patrouille de l'El. Il se présente comme un prêtre au service d'une déesse et propose d'aider à retrouver l'Éclat d'El dérobé. Pourtant, tout en lui demeure enveloppé de mystère.",
        classes: ["Richter", "Bluhen", "Herrscher", "Opferung"],
    },
    {
        id: "laby",
        name: "Laby",
        fullName: "Laby",
        age: "Unknown",
        gender: "Female",
        type: "Être mystérieux",
        weapon: "Nisha / miroir",
        role: "Mobilité / Fun",
        featuredClass: "Eternity Winner",
        image: "/images/personnages/laby.png",
        description:
            "Une fille joyeuse accompagnée de Nisha, son miroir, avec un style de jeu rapide et expressif.",
        lore: "Elle a vécu au plus profond de la Forêt Noire pendant une durée indéterminée, jusqu'à ce qu'elle puisse enfin en sortir, guidée par la 'Troisième Lumière Bleue'. " +
            "Elle décide de quitter la forêt et de partir en voyage pour découvrir qui elle est vraiment.",
        classes: ["Eternity Winner", "Radiant Soul", "Nisha Labyrinth", "Twins Picaro"],
    },
    {
        id: "noah",
        name: "Noah",
        fullName: "Noah Ebalon",
        age: "15 ans",
        gender: "Mâle",
        type: "Gardien de la lune",
        weapon: "Faucille",
        role: "Lune / Burst",
        featuredClass: "Liberator",
        image: "/images/personnages/noah.png",
        description:
            "Un jeune homme lié au pouvoir de la lune, marqué par le temps et son passé.",
        lore: "Il manie une faucille comme arme principale et exploite le pouvoir de la lune et des ténèbres, issus d'une expérience qui l'a transformé. " +
            "Il a perdu son frère aux mains de l'Ordre de Henir et en a effacé le souvenir, avant de le retrouver après l'Explosion de l'El, après quoi il fut scellé pendant un temps.",
        classes: ["Liberator", "Celestia", "Nyx Pieta", "Morpheus"],
    },
    {
        id: "lithia",
        name: "Lithia",
        fullName: "Lithia Beryl",
        age: "17 ans",
        gender: "Female",
        type: "Chasseuse de trésors",
        weapon: "Pioche / gemmes",
        role: "Progression / Gemmes",
        featuredClass: "Gembliss",
        image: "/images/personnages/lithia.png",
        description:
            "Une chasseuse de trésors utilisant gemmes, magie et mobilité pour explorer les ruines.",
        lore: "Esprit libre qui ne se laisse pas brider par les règles. " +
            "Magicienne et chasseuse de trésors voyageant en solitaire, Lithia a été mandatée par la 'Société des Ressources Biologiques' pour explorer la capitale de l'Ancien Royaume, Elrionode. " +
            "En route pour livrer ses conclusions, elle retrouve une amie d'enfance à Sander et décide d'explorer des ruines inconnues. " +
            "Elle y rencontre un spectre et se retrouve frappée d'une mystérieuse malédiction.",
        classes: ["Gembliss", "Avarice", "Achlys", "Mischief"],
    },
];