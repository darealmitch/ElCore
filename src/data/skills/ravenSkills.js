import { SKILL_TYPES, SKILL_BADGES } from "../skillConstants.js";

export const ravenSkills = [
    {
        id: "raven-skill-1",
        name: "Maximum Cannon",
        nameFr: "Canon titan",
        image: "/images/skills/raven/base/RSActive1.png",
        type: SKILL_TYPES.TENACITY,
        level: 1,
        description: "Raven concentre la puissance de la main nasod en une boule de feu rotative.",
    },
    {
        id: "raven-skill-2",
        name: "Shadow Step",
        nameFr: "Avancée dans l'ombre",
        image: "/images/skills/raven/base/STactive1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 1,
        description: "Raven traverse les rangs ennemis à la vitesse supersonique. " +
            "Au moment d'utiliser cette compétence, appuyez sur la touche W pour effectuer un puissant coup d'estoc.\n" +
            "Cette compétence peut également être utilisée pendant un saut.",
    },
    {
        id: "raven-skill-3",
        name: "Cannon Blade",
        nameFr: "Lame canon",
        image: "/images/skills/raven/base/RSActive2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 5,
        description: "Raven tire une boule de feu énorme avec son bras nasod."
    },
    {
        id: "raven-skill-4",
        name: "Power Assault",
        nameFr: "Assaut puissant",
        image: "/images/skills/raven/base/RSActive3.png",
        type: SKILL_TYPES.STRENGTH,
        level: 10,
        description: "Raven percute l'adversaire et le repousse."
    },
    {
        id: "raven-skill-5",
        name: "Emergency Boost",
        nameFr: "Tir d'urgence",
        image: "/images/skills/raven/base/EmergencyShoot.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Le Bras Nasod libère instantanément de l’énergie pour permettre à Raven de s'échapper lorsqu’il est attaqué.\n" +
            "S'active pendant une attaque subie. " +
            "Maintenez une touche directionnelle pour effectuer une esquive dans la direction souhaitée."
    },
    {
        id: "raven-skill-6",
        name: "Seven Burst",
        nameFr: "Explosion septuple",
        image: "/images/skills/raven/base/RSActive5.png",
        type: SKILL_TYPES.BRAVERY,
        level: 20,
        description: "Raven lance des flammes à l'aide de la main nasod."
    },
    {
        id: "raven-skill-7",
        name: "Flame Sword",
        nameFr: "Épée enflammée",
        image: "/images/skills/raven/base/FlameSword.png",
        type: SKILL_TYPES.ACTIVE,
        level: 20,
        description: "Raven attaque en enflammant ton épée. " +
            "Les adversaires touchés subissent des brûlures pendant un court instant et laissent des flammes derrière eux."
    },
    //Porteur de l'épée
    {
        id: "raven-st-skill-1",
        name: "Finishing Slash",
        nameFr: "Étincelles",
        image: "/images/skills/raven/job1/SwordTakerSkill1.png",
        type: SKILL_TYPES.ACTIVE,
        level: 15,
        description: "Raven traverses les rangs de ses adversaires et touches chacun d'entre eux plusieurs fois avec son épée."
    },
    {
        id: "raven-st-skill-2",
        name: "Shockwave - Divider",
        nameFr: "Onde de choc - Ciseaux",
        image: "/images/skills/raven/job1/SwordTakerSkill2.png",
        type: SKILL_TYPES.STRENGTH,
        level: 15,
        description: "Raven déclenches une gigantesque onde de choc.\n" +
            "(Peut également être utilisé pendant un saut)."
    },
    {
        id: "raven-st-skill-3",
        name: "Focus",
        nameFr: "Focus",
        image: "/images/skills/raven/job1/SwordTakerPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 15,
        description: "Raven se concentre afin d’utiliser une technique d’épée plus rapide et plus précise.\n" +
            "Augmente la vitesse d’action et, lors de booster, augmente l’attaque physique ainsi que la durée du booster.\n" +
            "Tous les dégâts magiques des compétences sont convertis en dégâts physiques."
    },
    {
        id: "raven-st-skill-4",
        name: "Berserker Blade",
        nameFr: "Lame Berserk",
        image: "/images/skills/raven/job1/SwordTakerSkill3.png",
        type: SKILL_TYPES.TENACITY,
        level: 25,
        description: "Raven donnes un coup particulièrement puissant."
    },
    {
        id: "raven-st-skill-5",
        name: "Flying Slash",
        nameFr: "Frappe aérienne",
        image: "/images/skills/raven/job1/SwordTakerSkill4.png",
        type: SKILL_TYPES.STRENGTH,
        level: 30,
        description: "Raven bondit en diagonale tout en assénant un coup d’épée. " +
            "L’entaille crée une bourrasque qui repousse les ennemis.\n" +
            "Appuyez de nouveau sur la touche de compétence pendant le saut pour effectuer une attaque plongeante supplémentaire."
    },
    {
        id: "raven-st-skill-6",
        name: "Armor Crash",
        nameFr: "Armure fendue",
        image: "/images/skills/raven/job1/SwordTakerSkill5.png",
        type: SKILL_TYPES.ACTIVE,
        level: 30,
        description: "Raven détruis l'armure de ton adversaire, ce qui réduit sa défense."
    },
    {
        id: "raven-st-skill-7",
        name: "Hypersonic Stab",
        nameFr: "Lame sonique",
        image: "/images/skills/raven/job1/SwordTakerSkill6.png",
        type: SKILL_TYPES.BRAVERY,
        level: 35,
        description: "D'un mouvement éclair, Raven traverses les rangs ennemis en faisant tournoyer ton épée pour taillader les ennemis."
    },
    {
        id: "raven-st-skill-8",
        name: "Victor's Dignity",
        nameFr: "Fierté du vainqueur",
        image: "/images/skills/raven/job1/SwordTakerPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 40,
        description: "Diminue la valeur de K.O. et augmente l'attaque si tu possèdes un certain nombre de PV."
    },
    /*Maître de l'épée*/
    {
        id: "raven-bm-skill1",
        name: "Bloody Accel",
        nameFr: "Triomphe sanglant",
        image: "/images/skills/raven/job1/BladeMasterSkill1.png",
        type: SKILL_TYPES.BRAVERY,
        level: 35,
        description: "Renforce l'épée de Raven en concluant un Pacte de Sang."
    },
    {
        id: "raven-bm-skill2",
        name: "Sonic Slash",
        nameFr: "Coup sonique",
        image: "/images/skills/raven/job1/BladeMasterSkill2.png",
        type: SKILL_TYPES.ACTIVE,
        level: 35,
        description: "Exécute une série de coups d’épée à une vitesse extrême."
    },
    {
        id: "raven-bm-skill3",
        name: "Blade Mastery",
        nameFr: "Maîtrise du maniement de l'épée",
        image: "/images/skills/raven/job1/BladeMasterPassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 35,
        description: "Augmente la puissance d’attaque physique ainsi que les chances d’infliger un coup critique."
    },
    {
        id: "raven-bm-skill4",
        name: "Supersonic Draw",
        nameFr: "Tir rapide",
        image: "/images/skills/raven/job1/BladeMasterSkill3.png",
        type: SKILL_TYPES.ACTIVE,
        level: 40,
        description: "Raven adopte une posture de dégainage en maintenant la touche de compétence enfoncée. " +
            "Elle peut être maintenue pendant 1 seconde.\n" +
            "Relâchez la touche de compétence pour dégainer votre épée et effectuer une attaque perforante basse, moyenne ou haute selon la direction saisie.\n" +
            "Les ennemis touchés subissent un effet de Saignement."
    },
    {
        id: "raven-bm-skill5",
        name: "Giga Drive - Limiter",
        nameFr: "Giga drive: Limitation",
        image: "/images/skills/raven/job1/BladeMasterSkill4.png",
        type: SKILL_TYPES.STRENGTH,
        level: 45,
        description: "Raven rassemble de l’énergie afin de provoquer une explosion qui renforce le lanceur."
    },
    {
        id: "raven-bm-skill6",
        name: "Shockwave - Cutter",
        nameFr: "Onde de choc - Cisaille",
        image: "/images/skills/raven/job1/BladeMasterSkill5.png",
        type: SKILL_TYPES.STRENGTH,
        level: 45,
        description: "D’un habile coup d’épée vers l’avant, Raven libère une onde de choc en forme de faucille qui se déplace en frappant les ennemis à plusieurs reprises.\n" +
            "(Peut également être utilisée en plein saut.)"
    },
    {
        id: "raven-bm-skill7",
        name: "Cut Tendon",
        nameFr: "Rupture du tendon",
        image: "/images/skills/raven/job1/BladeMasterSkill6.png",
        type: SKILL_TYPES.ACTIVE,
        level: 50,
        description: "Raven tranche les tendons de ses ennemis afin de les empêcher de courir."
    },
    {
        id: "raven-bm-skill8",
        name: "Rising Dance",
        nameFr: "Danse aérienne",
        image: "/images/skills/raven/job1/BladeMasterSkill7.png",
        type: SKILL_TYPES.BRAVERY,
        level: 50,
        description: "Raven frappe le sol pour bondir et anéantir les ennemis avec une rafale d’aura d’épée.\n " +
            "(Peut également être utilisée en plein saut.)."
    },
    {
        id: "raven-bm-skill9",
        name: "Wolf Fang",
        nameFr: "Griffe du loup",
        image: "/images/skills/raven/job1/BladeMasterSkill8.png",
        type: SKILL_TYPES.TENACITY,
        level: 55,
        description: "Raven effectue une attaque en bond suivie d’un coup de saisie et de taille. " +
            "Si la première attaque ne touche pas, récupère la moitié des PM consommés et annule l’attaque."
    },
    {
        id: "raven-bm-skill10",
        name: "Winning Strategy",
        nameFr: "Stratégie Infaillible",
        image: "/images/skills/raven/job1/BladeMasterPassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        description: "Raven obtiens un buff qui augmente la récupération de mana à chaque 5e combo. " +
            "Temps de recharge de 1 seconde. (Maximum 4 cumuls.)\n" +
            "Pendant le Booster, attaquer un ennemi avec une compétence de transcendance augmente les dégâts qu’il subit provenant des attaques physiques et magiques."
    },
    {
        id: "raven-bm-skill11",
        name: "Extreme Reflexes",
        nameFr: "Réflexe surhumains",
        image: "/images/skills/raven/job1/BladeMasterPassive3.png",
        type: SKILL_TYPES.PASSIVE,
        level: 60,
        description: "Raven se concentre intensément pour atteindre une réactivité supersonique. " +
            "Cette vitesse extrême lui permet d’infliger davantage de dégâts.\n" +
            "Augmente ses PM max. " +
            "Pendant une durée déterminée, sa vitesse de déplacement, sa vitesse de saut et sa vitesse de charge du Booster sont augmentées. " +
            "Les dégâts de ses compétences actives spéciales infligés aux monstres de type Mid-Boss et Boss sont également augmentés."
    },
    {
        id: "raven-bm-skill12",
        name: "Extreme Blade",
        nameFr: "Lame de l'extrême",
        image: "/images/skills/raven/job1/BladeMasterHyperActive.png",
        type: SKILL_TYPES.HYPER_ACTIVE,
        level: 65,
        description: "Raven exécute une technique d’épée à grande vitesse qui tranche à travers l’espace et les ténèbres."
    },
    {
        id: "raven-bm-skill13",
        name: "Flash",
        nameFr: "Éclair",
        image: "/images/skills/raven/job1/BladeMasterSkill9.png",
        type: SKILL_TYPES.TENACITY,
        level: 70,
        description: "Raven se déplace rapidement pour prendre l’ennemi en embuscade. (Peut également être utilisée en plein saut.)"
    },
    {
        id: "raven-bm-skill14",
        name: "Awakened Will: Blade Master",
        nameFr: "Volonté déchaînée : maître de l'épée",
        image: "/images/skills/raven/job1/RavenTransPassive.png",
        type: SKILL_TYPES.PASSIVE,
        level: 70,
        description: "Augmente la vitesse de déplacement, la récupération après un renversement, ainsi que la puissance des compétences."
    },
    {
        id: "raven-bm-skill15",
        name: "Rend",
        nameFr: "Tir blessant",
        image: "/images/skills/raven/job1/BladeMasterSkill10.png",
        type: SKILL_TYPES.ACTIVE,
        level: 80,
        description: "Raven inflige une blessure grave à un ennemi afin de lui causer d’importants dégâts."
    },
    {
        id: "raven-bm-skill16",
        name: "Awakened One",
        nameFr: "Spécialisation",
        image: "/images/skills/el/lk/TransShared.webp",
        type: SKILL_TYPES.PASSIVE,
        level: 80,
        description: "Cette compétence améliore les capacités physiques."
    },
    {
        id: "raven-bm-skill17",
        name: "Shoot Up Genocide",
        nameFr: "La mort en costume",
        image: "/images/skills/raven/job1/BladeMasterSkill11.png",
        type: SKILL_TYPES.STRENGTH,
        level: 90,
        description: "Raven fonce sur l'adversaire et l'attaque à plusieurs reprises avec une vitesse effrayante."
    },
    {
        id: "raven-bm-skill18",
        name: "Counter Wave",
        nameFr: "Attaque",
        image: "/images/skills/raven/job1/BladeMasterPassive4.png",
        type: SKILL_TYPES.PASSIVE,
        level: 90,
        description: "Lors de l’utilisation de la compétence [Attaque], la 3e utilisation de [Attaque] consomme moins de PM et ignore partiellement la défense des ennemis.\n" +
            "Lorsque Attaque s’active, la récupération des compétences est accélérée pendant une durée déterminée."
    },
    {
        id: "raven-bm-skill19",
        name: "Sharp Charge",
        nameFr: "Attaque déguisé",
        image: "/images/skills/raven/job1/BladeMasterSkill12.png",
        type: SKILL_TYPES.BRAVERY,
        level: 95,
        description: "Raven exécute une immense entaille qui inflige d’importants dégâts aux ennemis et leur applique l’effet de Blessure."
    },
    /*Lame furieuse*/
    {
        id: "raven-fb-skill1",
        name: "Final Blade",
        nameFr: "Lame Ultime",
        image: "/images/skills/raven/job1/FinalBlade.png",
        type: SKILL_TYPES.HYPER_ACTIVE_2,
        badge: SKILL_BADGES.HYPER_ACTIVE_2,
        level: 99,
        description: "Raven utilise son bras nasod pour effectuer une figure rapide avec l'épée. " +
            "Son entourage baigne alors dans l'énergie de son arme."
    },
    {
        id: "raven-fb-skill2",
        name: "Overpower",
        nameFr: "Intimidation",
        image: "/images/skills/raven/job1/FuriousBladePassive1.png",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        description: [
            "Le bras nasod permet à Raven des attaques encore plus perfectionnées. Il a une certaine probabilité de réussir une double attaque.\n" +
            "En cumulant les compétence Giga Drive - Limitation et Triomphe sanglant, un bonus supplémentaire est activé.\n" +
            "En utilisant une compétence spéciale active, Raven a une certaine probabilité d'utiliser sa force d'attaque à sa puissance maximale.",
            {
                type: "title",
                text: "Renforcement de l'attaque combo"
            },
            "Les combos qui peuvent activer une double attaque : >>WWW, >>^WX",
            {
                type: "title",
                text: "Intimidation"
            },
            "En activant simultanément les bonus Giga Dive - Limitation et Triomphe sanglant, le bonus [Intimidation] est déclenché.\n" +
            "Les dégâts critiques augmentent tant que le bonus [Intimidation] est actif."
        ]
    },
    {
        id: "raven-fb-skill3",
        name: "Blade Acceleration",
        nameFr: "Lame agile",
        image: "/images/skills/raven/job1/FuriousBladePassive2.png",
        type: SKILL_TYPES.PASSIVE,
        level: 99,
        description: "Les capacités au combat de Raven se sont encore améliorées, ce qui renforcent certaines de ses compétences."
    },
    /*Lame furieuse Classe maître*/
    {
        id: "raven-fb-master1",
        name: "Atomic Cutting/Stage 1",
        nameFr: "Découpe atomique - Niveau 1",
        image: "/images/skills/raven/job1/AtomicCuttingStage1.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Raven déchire ses ennemis à une vitesse supersonique.",
            {
                type: "title",
                text: "Étape 1"
            },
            "Cette première étape est automatiquement débloquée lors du passage en Classe Maître"
        ]
    },
    {
        id: "raven-fb-master2",
        name: "Atomic Cutting/Stage 2",
        nameFr: "Découpe atomique - Niveau 2",
        image: "/images/skills/raven/job1/AtomicCuttingStage2.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Raven déchire ses ennemis à une vitesse supersonique.",
            {
                type: "title",
                text: "Étape 2"
            },
            "Cette deuxième étape se débloque grâce à une quête de compétence."
        ]
    },
    {
        id: "raven-fb-master3",
        name: "Atomic Cutting/Stage 3",
        nameFr: "Découpe atomique - Niveau 3",
        image: "/images/skills/raven/job1/AtomicCuttingStage3.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Raven déchire ses ennemis à une vitesse supersonique. La danse finale de l’épée les réduira en morceaux.",
            {
                type: "title",
                text: "Étape 3"
            },
            "Cette troisième étape se débloque grâce à une quête de compétence."
        ]
    },
    {
        id: "raven-fb-master4",
        name: "Atomic Cutting/Stage 4",
        nameFr: "Découpe atomique - Niveau 4",
        image: "/images/skills/raven/job1/AtomicCuttingStage4.png",
        type: SKILL_TYPES.MASTER,
        badge: SKILL_BADGES.MASTER_SKILL,
        level: "master",
        description: [
            "Raven déchire ses ennemis à une vitesse supersonique. " +
            "Son art du maniement de l’épée les désintègre jusqu’à un niveau atomique.",
            {
                type: "title",
                text: "Étape 4"
            },
            "Cette quatrième étape se débloque grâce à une quête de compétence."
        ]
    },
]