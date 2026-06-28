export const characters = [
    {
        id: "elsword",
        name: "Elsword",
        fullName: "Elsword",
        age: "13 ans",
        gender: "Homme",
        type: "Épéiste",
        weapon: "Épée longue",
        featuredClass: "Genesis",
        featuredClassFr: "Séphiroth",
        image: "/images/personnages/elsword.webp",
        description: "C'est le frère d'Elesis, la commandante des chevaliers rouges du royaume de Belder. " +
            "Il a toujours rêvé d'acquérir les compétences de sa sœur, c'est pourquoi il s'est entraîné toute sa jeunesse avec un professeur venant de Belder afin d'apprendre des techniques de combat systématiques. " +
            "Les chercheurs d'Eldrit l'ont chargé de retrouver un cristal d'Eldrit. C'est ainsi qu'ont commencé ses aventures.",
        lore: "Petit frère d'Elesis, la Première Capitaine des Chevaliers Rouges de Belder, Elsword s'est entraîné dès son plus jeune âge pour être aussi fort que sa sœur, apprenant ses techniques au sabre auprès d'un chevalier de Belder." +
            " Il a débuté son aventure en recevant la mission de restaurer l'El en tant que membre des Chercheurs de l'Eldrit.",
        classes: ["Knight Emperor", "Rune Master", "Immortal", "Genesis"],
        classesFr: ["Chevalier Royal", "Maître des runes", "Immortel", "Séphiroth"],
        stats: {
            speed: "Moyenne",
            range: "Courte",
            difficulty: "Facile",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
    {
        id: "aisha",
        name: "Aisha",
        fullName: "Aisha Landar",
        age: "15 ans",
        gender: "Femme",
        type: "Magicienne",
        weapon: "Baguette",
        featuredClass: "Aether Sage",
        featuredClassFr: "Étheriste",
        image: "/images/personnages/aisha.webp",
        description: "C'est une puissante magicienne qui a voyagé de par le monde avec son grand-père, un sage, pendant de longues années. " +
            "Mais un jour, sur un site archéologique, un anneau l'a ensorcelée. " +
            "Aisha a perdu la majeure partie de ses pouvoirs. Depuis, elle tente de les récupérer en recherchant l'aura disparue.",
        lore: "Magicienne accomplie devenue Grande Magicienne dès son plus jeune âge, Aisha découvre lors d'un voyage avec son grand-père un anneau antique qui absorbe la majeure partie de ses pouvoirs. " +
            "Amputée de la plupart de ses capacités, elle se lance dans un périple pour les récupérer en suivant la signature magique de l'anneau disparu.",
        classes: ["Aether Sage", "Oz Sorcerer", "Metamorphy", "Lord Azoth"],
        classesFr: ["Étheriste", "Magicienne d'Oz", "Métamorphia", "Druidesse d'Azoth"],
        stats: {
            speed: "Lent",
            range: "Moyenne",
            difficulty: "Difficile",
            pictureType: "/images/combat/Magical_Class.png",
            attackType: "Attaque Magique",
        }
    },
    {
        id: "rena",
        name: "Rena",
        fullName: "Rena Erindel",
        age: "Inconnue",
        gender: "Femme",
        type: "Elfe Archère",
        weapon: "Arc",
        featuredClass: "Daybreaker",
        featuredClassFr: "Aube",
        image: "/images/personnages/rena.webp",
        description: "Une Elfe, la plus belle et la plus sage des compagnons d'Elsword.\n" +
            "Rena a réalisé que l'aura d'Eldrit devait absolument être récupérée afin de rétablir la connexion déclinante avec le monde des esprits.\n" +
            "Lorsqu'elle a ressenti d'étranges vibrations provenant de l'Arbre dEl du village de Ruben, elle s'est immédiatement mise en route.",
        lore: "La plus mature et la plus belle de la Patrouille de l'El. Alors que le lien avec le monde des esprits s'affaiblit de plus en plus, Rena est déterminée à restaurer le pouvoir de l'El pour rétablir cette connexion. " +
            "Elle ressent la résonance de l'El depuis l'Arbre de l'El du Village de Ruben et part enquêter.",
        classes: ["Anemos", "Daybreaker", "Twilight", "Prophetess"],
        classesFr: ["Anemos", "Aube", "Crépuscule", "Prophétesse"],
        stats: {
            speed: "Moyenne",
            range: "Longue",
            difficulty: "Facile",
            pictureType: "/images/combat/Magical_Class.png",
            attackType: "Attaque Magique",
        }
    },
    {
        id: "raven",
        name: "Raven",
        fullName: "Raven Cronwell",
        age: "24 ans",
        gender: "Homme",
        type: "Mercenaire",
        weapon: "Bras Nasod / Lame",
        featuredClass: "Furious Blade",
        featuredClassFr: "Lame furieuse",
        image: "/images/personnages/raven.webp",
        description: "Bien qu'il n'ait été qu'un simple citoyen, il a réussi à devenir le chef des chevaliers mercenaires. Malheureusement, son succès a rendu la noblesse jalouse, et il a tout perdu suite à une infâme intrigue.\n" +
            "Les Nasods l'ont ressuscité et à présent, il a soif de vengeance.\n" +
            "Décidé à assumer ses responsabilités pour les actes qu'il a commis, il a choisi de se joindre à Elsword et ses compagnons.",
        lore: "Un homme du peuple qui a gravi les échelons jusqu'à devenir le capitaine d'un célèbre ordre de chevaliers mercenaires. " +
            "Victime d'une machination d'aristocrates jaloux, il perd tout ce qui lui était cher en une seule nuit. Réanimé par les Nasods, il a juré de se venger du Royaume de Belder. " +
            "Désormais, rongé par la culpabilité de ses actes passés, il rejoint la Patrouille de l'El en guise d'expiation.",
        classes: ["Furious Blade", "Rage Hearts", "Nova Imperator", "Revenant"],
        classesFr: ["Lame furieuse", "Cœur enragé", "Nova Imperator", "Âme fatale"],
        stats: {
            speed: "Moyenne",
            range: "Courte",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
    {
        id: "eve",
        name: "Eve",
        fullName: "Eve",
        age: "Inconnue",
        gender: "Femme",
        type: "Reine Nasod",
        weapon: "Module Nasod (Moby et Levy assistants nasods)",
        featuredClass: "Code: Sariel",
        featuredClassFr: "Nasod Sariel",
        image: "/images/personnages/eve.webp",
        description: "Reine des Nasods, disposant d'une intelligence supérieure, et d'un ego surdimensionné. " +
            "Lors de la disparition de la force de l'Eldrit, elle est entrée en hibernation. " +
            "Elle ne s'est réveillée que par hasard, lorsqu'elle a à nouveau ressenti une aura d'Eldrit. " +
            "Elle a constaté que les compagnons d'Elsword avaient détruit son noyau d'énergie et a décidé de se joindre à eux pour rétablir la puissance de l'Eldrit.",
        lore: "La Reine des Nasods, dotée d'une haute intelligence et d'une conscience de soi développée. " +
            "Eve est entrée en hibernation lorsque le pouvoir de l'El a soudainement disparu, mais se réveille lorsque de l'énergie El s'infiltre suite aux perturbations causées par la Patrouille de l'El. " +
            "Elle rejoint Elsword et ses compagnons pour retrouver l'El et reconstruire le noyau d'énergie qu'elle a découvert détruit.",
        classes: ["Code: Ultimate", "Code: Esencia", "Code: Sariel", "Code: Antithese"],
        classesFr: ["Nasod ultime", "Nasod essentielle", "Code: Sariel", "Code: Antithese"],
        stats: {
            speed: "Moyenne",
            range: "Moyenne",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Magical_Class.png",
            attackType: "Attaque Magique",
        }
    },
    {
        id: "chung",
        name: "Chung",
        fullName: "Prince Seiker",
        age: "13 ans",
        gender: "Homme",
        type: "Gardien",
        weapon: "Bazooka (Destructeur)",
        featuredClass: "Centurion",
        featuredClassFr: "Centurion",
        image: "/images/personnages/chung.webp",
        description: "Véritable nom : Prince Saker. Ce descendant de la famille Saker protège Hamel, la capitale du Duché de Cenarth. " +
            "Son père, le \"chevalier blanc'\", a été ensorcelé et a combattu aux côtés des démons lors de l'assaut d'Hamel. " +
            "Le Prince Saker, impuissant face à l'attaque, s'est joint aux compagnons d'Elsword pour accroitre ses capacités. " +
            "Il a choisi le nom de 'Chung'. " +
            "La pierre de protection, combinée à sa détermination se renforcer corps et âme en voyageant, a permis de renforcer Freiturnier et Destructeur.",
        lore: "Héritier de la famille Seiker, protecteurs attitrés de la Cité d'Hamel. Lorsque son père, le Colosse Blanc Helputt, est corrompu par la magie démoniaque et envahit Hamel, Chung tente de l'arrêter en vain. " +
            "Il rejoint la Patrouille de l'El pour devenir plus fort, choisissant de se faire appeler Chung plutôt que son vrai nom jusqu'à ce qu'il s'estime digne de le porter.",
        classes: ["Comet Crusader", "Fatal Phantom", "Centurion", "Dius Aer"],
        classesFr: ["Chevalier croisé cométaire", "Fantôme Fatal", "Centurion", "Dius Aer"],
        stats: {
            speed: "Lent",
            range: "Moyenne",
            difficulty: "Facile",
            pictureType: "/images/combat/Magical_Class.png",
            attackType: "Attaque Magique",
        }
    },
    {
        id: "ara",
        name: "Ara",
        fullName: "Ara Haan",
        age: "17 ans",
        gender: "Femme",
        type: "Artiste martiale",
        weapon: "Javelot",
        featuredClass: "Shakti",
        featuredClassFr: "Shakti",
        image: "/images/personnages/ara.webp",
        description: "Descendante d'une famille de guerriers du royaume du Nord, sur le continent de Naios. " +
            "Son frère Aren a été transformé en démon par l'Eldrit ténébreux et a attaqué sa propre famille et son village." +
            "En compagnie d'Eun, la renarde à neuf queues scellée dans une épingle à cheveux, Ara s'est mise en route afin de retrouver son frère et de lui rendre son aspect initial. " +
            "Cependant, Eun a un but bien différent : elle veut s'échapper de l'épingle à cheveux dans laquelle elle est emprisonnée...",
        lore: "Née dans une famille d'arts martiaux de l'Empire du Nord, Ara Haan voit son frère Aren être possédé par un démon, détruisant leur village et leur famille sous le nom de 'Ran' en quête de l'El de la Lune. " +
            "Avec l'aide d'Eun, un renard divin scellé en elle, elle se lance à la poursuite de son frère pour le sauver.",
        classes: ["Apsara", "Devi", "Shakti", "Surya"],
        classesFr: ["Apsara", "Devi", "Shakti", "Surya"],
        stats: {
            speed: "Rapide",
            range: "Courte",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
    {
        id: "elesis",
        name: "Elesis",
        fullName: "",
        age: "16 ans",
        gender: "Femme",
        type: "Chevalière",
        weapon: "Claymore",
        featuredClass: "Empire Sword",
        featuredClassFr: "Épée de l'empire",
        image: "/images/personnages/elesis.webp",
        description: "Elle dispose de facultés exceptionnelles qu'elle doit en grande partie à son père qui était un chevalier errant de Belder." +
            "Rendue furieuse par l'attaque-surprise des démons, elle a rejoint les chevaliers royaux de Belder. " +
            "Elle a conscience du danger qu'elle et Elsword courent et se consacre à la lutte contre les démons. " +
            "Un de ces jours, elle finira bien par trouver les démons qui ont attaqué Parte et Belder...",
        lore: "Influencée par son père, chevalier libre de Belder, Elesis est elle-même une épéiste hors pair. " +
            "Lorsqu'elle et Elsword sont soudainement attaqués par des démons, elle anticipe le danger et rejoint les Chevaliers de Belder pour protéger le royaume de l'invasion démoniaque imminente. " +
            "Elle finit par retrouver le démon qui avait attaqué Feita et Belder.",
        classes: ["Empire Sword", "Flame Lord", "Bloody Queen", "Adrestia"],
        classesFr: ["Épée de l'empire", "Maîtresse des flammes", "Reine sanglante", "Adrestia"],
        stats: {
            speed: "Moyenne",
            range: "Courte",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
    {
        id: "add",
        name: "Add",
        fullName: "Edward Grenore",
        age: "16 ans",
        gender: "Homme",
        type: "Scientifique / Dynamo",
        weapon: "Dynamos Nasod",
        featuredClass: "Doom Bringer",
        featuredClassFr: "Calamité",
        image: "/images/personnages/add.webp",
        description: "Membre d'une famille de mécaniciens et d'inventeurs, Add a brisé un tabou : celui de vouloir créer des Nasods aux capacités surhumaines. " +
            "Il était en détresse et traqué. Pendant qu'il était poursuivi, il est tombé dans une fissure de l'espace-temps où se trouvait une bibliothèque et y a acquis une connaissance ancestrale. " +
            "Animé d'une féroce rancune, il a tout mis en œuvre pour trouver un moyen de revenir. " +
            "C'est alors qu'il a découvert Eve, qui renfermait d'innombrables codes antiques...",
        lore: "Descendant d'une éminente famille de chercheurs Nasod persécutée pour avoir étudié des savoirs interdits visant à rendre les Nasods plus 'humains'. " +
            "En fuyant, Add tombe dans les failles du temps et de l'espace, y acquérant d'immenses connaissances. " +
            "Il parvient finalement à s'en échapper et entame un voyage pour rejoindre sa propre ligne temporelle.",
        classes: ["Doom Bringer", "Dominator", "Mad Paradox", "Overmind"],
        classesFr: ["Calamité", "Dominateur", "Paradoxe", "Overmind"],
        stats: {
            speed: "Moyenne",
            range: "Longue",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Magical_Class.png",
            attackType: "Attaque Magique",
        }
    },
    {
        id: "luciel",
        name: "Lu/Ciel",
        fullName: "Luciela \"Lu\" R. Sourcream & Ciel",
        age: "Inconnue / 24 ans",
        gender: "Femme / Homme",
        type: "Duo démoniaque",
        weapon: "Gantelets magiques / Pistolames",
        featuredClass: "Catastrophe",
        featuredClassFr: "",
        image: "/images/personnages/luciel.webp",
        description: "Une ancienne souveraine du monde démoniaque et un assassin d'outre-tombe. " +
            "Lorsque leur vie est menacée par des assassins de démons, ils parviennent à échapper à la menace de justesse grâce à un pacte. " +
            "Pour restaurer la force divine que Lu a perdue et reconquérir son pouvoir de souveraine, ils sont partis à la recherche de traces de démons…..",
        lore: "Une reine démoniaque déchue et un assassin, tous deux traqués par des assassins du royaume des démons. " +
            "Au bord de la mort, ils parviennent à conclure un contrat spirituel qui leur permet d'échapper de justesse à leurs poursuivants. " +
            "Pour recouvrer le pouvoir et l'autorité perdus de Lu, ils partent ensemble en quête.",
        classes: ["Catastrophe", "Innocence", "Diangelion", "Demersio"],
        classesFr: ["", "", "", ""],
        stats: {
            speed: "Moyenne",
            range: "Longue",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
    {
        id: "rose",
        name: "Rose",
        fullName: "Anna Testarosa",
        age: "19 ans",
        gender: "Femme",
        type: "Soldate",
        weapon: "Diverses armes à feu",
        featuredClass: "Prime Operator",
        featuredClassFr: "Optimus Prime",
        image: "/images/personnages/rose.webp",
        description: "Elle fait partie de l'élite de la troupe défensive du royaume des cieux qui protège la princesse et compte parmi les membres de la troupe de la princesse. " +
            "Son nom de code est Rose. " +
            "Il symbolise sa combattivité hors du commun. " +
            "Issue de l'autre dimension, elle s'est rendue à Élios sur ordre de la princesse pour découvrir l'origine de la catastrophe qui menace le royaume des cieux et l'écarter.",
        lore: "Membre du [Jardin Majestueux], la force d'élite protégeant la Cité Royale des Cieux, elle a reçu le nom de code [Rose] en tant que la plus puissante de cet ordre. " +
            "Pour éliminer les ennemis menaçant les Cieux, Rose a été mandatée pour enquêter dans une dimension parallèle appelée Elios.",
        classes: ["Tempest Burster", "Black Massacre", "Minerva", "Prime Operator"],
        classesFr: ["Tempête furieuse", "Veuve noire", "Minerve", "Prime Opératrice"],
        stats: {
            speed: "Rapide",
            range: "Longue",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
    {
        id: "ain",
        name: "Ain",
        fullName: "Ainchase Ishmael",
        age: "21 ans",
        gender: "Homme",
        type: "Émissaire divin",
        weapon: "Pendule",
        featuredClass: "Bluhen",
        featuredClassFr: "Florere",
        image: "/images/personnages/ain.webp",
        description: "Un jeune homme énigmatique est apparu sans crier gare devant Elsword et ses compagnons. " +
            "Il se présente comme étant un prêtre au service de la déesse et leur propose son aide pour chercher le fragment d'Eldrit de Ruben, mais il reste mystérieux.",
        lore: "Un être mystérieux qui a surgi devant la Patrouille de l'El. Il se présente comme un prêtre au service d'une déesse et propose d'aider à retrouver l'Éclat d'El dérobé. Pourtant, tout en lui demeure enveloppé de mystère.",
        classes: ["Richter", "Bluhen", "Herrscher", "Opferung"],
        classesFr: ["Arbiter", "Florere", "Regnator", "Sacratus"],
        stats: {
            speed: "Moyenne",
            range: "Moyenne",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Magical_Class.png",
            attackType: "Attaque Magique",
        }
    },
    {
        id: "laby",
        name: "Laby",
        fullName: "Laby",
        age: "Inconnue",
        gender: "Femme",
        type: "Être mystérieux",
        weapon: " Miroir",
        featuredClass: "Eternity Winner",
        featuredClassFr: "",
        image: "/images/personnages/laby.webp",
        description: "Au plus profond du Bosquet des ténèbres se trouvait la source du mal.\n" +
            "Laby y était enfermée, seule. Un éclat bleu lui avait permis de sortir du Bosquet des ténèbres.\n" +
            "C'était la troisième fois qu'elle l'apercevait...\n " +
            "Elle se met désormais en quête pour découvrir sa véritable identité.",
        lore: "Elle a vécu au plus profond de la Forêt Noire pendant une durée indéterminée, jusqu'à ce qu'elle puisse enfin en sortir, guidée par la 'Troisième Lumière Bleue'. " +
            "Elle décide de quitter la forêt et de partir en voyage pour découvrir qui elle est vraiment.",
        classes: ["Eternity Winner", "Radiant Soul", "Nisha Labyrinth", "Twins Picaro"],
        classesFr: ["Championne Éonienne", "Lumièle", "Labyrinthe de Nisha", "Arlequine"],
        stats: {
            speed: "Rapide",
            range: "Moyenne",
            difficulty: "Facile",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
    {
        id: "noah",
        name: "Noah",
        fullName: "Noah Ebalon",
        age: "15 ans",
        gender: "Homme",
        type: "Gardien de la lune",
        weapon: "Faux",
        featuredClass: "Liberator",
        featuredClassFr: "Libérator",
        image: "/images/personnages/noah.webp",
        description: "Il utilise son arme principale, une faux, avec une lune modifiée et le pouvoir de l'obscurité.\n" +
            "Il a oublié qu'il avait perdu son frère aîné à cause l'ordre de Henir.\n" +
            "Après l'explosion de l'El, ses souvenirs le rattrapent et il est scellé.\n" +
            "Grâce à la restauration d'Élyanod, lui et les ruines s'éveillent après un long sommeil.",
        lore: "Avec des mouvements légers et rapides, il brandit sa faux et attaque les points faibles\n" +
            "de ses adversaires pour les terrasser grâce au pouvoir de l'obscurité.",
        classes: ["Liberator", "Celestia", "Nyx Pieta", "Morpheus"],
        classesFr: ["Libérator", "Célestia", "Nyx Pieta", "Morphée"],
        stats: {
            speed: "Rapide",
            range: "Proche",
            difficulty: "Facile",
            attackType: "Attaque Physique",
            pictureType: "/images/combat/Physical_Class.png",
        }
    },
    {
        id: "lithia",
        name: "Lithia",
        fullName: "Lithia Beryl",
        age: "17 ans",
        gender: "Femme",
        type: "Chasseuse de trésors",
        weapon: "Pioche",
        featuredClass: "Gembliss",
        featuredClassFr: "Eméraldia",
        image: "/images/personnages/lithia.webp",
        description: "Un électron libre.\n" +
            "Elle vagabonde seule et accepte des missions de magicienne et de chasseuse de trésors.\n" +
            "L'Académie des ressources naturelles a chargé Lithia d'explorer Élyanod, la capitale resurgie du royaume antique.\n" +
            "Après avoir accompli sa mission, elle est tombée sur un ami d'enfance, à Sander, avec lequel elle est allée explorer des ruines inconnues.\n" +
            "C'est là qu'un esprit des ruines lui a lancé une malédiction.",
        lore: "Esprit libre qui ne se laisse pas brider par les règles. " +
            "Magicienne et chasseuse de trésors voyageant en solitaire, Lithia a été mandatée par la 'Société des Ressources Biologiques' pour explorer la capitale de l'Ancien Royaume, Élyanod. " +
            "En route pour livrer ses conclusions, elle retrouve une amie d'enfance à Sander et décide d'explorer des ruines inconnues. " +
            "Elle y rencontre un spectre et se retrouve frappée d'une mystérieuse malédiction.",
        classes: ["Gembliss", "Avarice", "Achlys", "Mischief"],
        classesFr: ["Eméraldia", "Avaricia", "", "Delinquenta"],
        stats: {
            speed: "Rapide",
            range: "Courte",
            difficulty: "Moyenne",
            pictureType: "/images/combat/Physical_Class.png",
            attackType: "Attaque Physique",
        }
    },
];