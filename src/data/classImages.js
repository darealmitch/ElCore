function createClassImage({
                              characterId,
                              character,
                              pathName,
                              pathNameFr,
                              jobStage,
                              className,
                              classNameFr,
                              fileName
                          }) {
    return {
        characterId,
        character,
        pathName,
        pathNameFr,
        jobStage,
        className,
        classNameFr,
        fileName,
        localPath: `/images/classes/${fileName}`,
        alt: `${character} en spécialisation ${classNameFr || className}`,
        dimensions: ""
    };
}

export const classImages = [
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Knight Emperor",
        pathNameFr: "Chevalier Royal",
        jobStage: "job1",
        className: "Sword Knight",
        classNameFr: "Chevalier de l'épée",
        fileName: "elsword-sword-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Knight Emperor",
        pathNameFr: "Chevalier Royal",
        jobStage: "job2",
        className: "Lord Knight",
        classNameFr: "Haut Chevalier",
        fileName: "elsword-lord-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Knight Emperor",
        pathNameFr: "Chevalier Royal",
        jobStage: "job3",
        className: "Knight Emperor",
        classNameFr: "Chevalier Royal",
        fileName: "elsword-knight-emperor.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Knight Emperor",
        pathNameFr: "Chevalier Royal",
        jobStage: "master",
        className: "Knight Emperor",
        classNameFr: "Chevalier Royal",
        fileName: "elsword-knight-emperor-master.png"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "job1",
        className: "Magic Knight",
        classNameFr: "Chevalier Mage",
        fileName: "elsword-magic-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "job2",
        className: "Rune Knight",
        classNameFr: "Chevalier Runique",
        fileName: "elsword-rune-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "job3",
        className: "Rune Master",
        classNameFr: "Maître des runes",
        fileName: "elsword-rune-master.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "master",
        className: "Rune Master",
        classNameFr: "Maître des runes",
        fileName: "elsword-rune-master-master.png"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "job1",
        className: "Sheath Knight",
        classNameFr: "Chevalier de Cornwell",
        fileName: "elsword-sheath-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "job2",
        className: "Infinity Sword",
        classNameFr: "Invocateur d'épées",
        fileName: "elsword-infinity-sword.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "job3",
        className: "Immortal",
        classNameFr: "Immortel",
        fileName: "elsword-immortal.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "master",
        className: "Immortal",
        classNameFr: "Immortel",
        fileName: "elsword-immortal-master.png"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "job1",
        className: "Root Knight",
        classNameFr: "Bénitier",
        fileName: "elsword-root-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "job2",
        className: "Sacred Templar",
        classNameFr: "Templier",
        fileName: "elsword-sacred-templar.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "job3",
        className: "Genesis",
        classNameFr: "Séphiroth",
        fileName: "elsword-genesis.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "master",
        className: "Genesis",
        classNameFr: "Séphiroth",
        fileName: "elsword-genesis-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "job1",
        className: "High Magician",
        classNameFr: "Archimage",
        fileName: "aisha-high-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "job2",
        className: "Elemental Master",
        classNameFr: "Maîtresse des éléments",
        fileName: "aisha-elemental-master.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "job3",
        className: "Aether Sage",
        classNameFr: "Étheriste",
        fileName: "aisha-aether-sage.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "master",
        className: "Aether Sage",
        classNameFr: "Étheriste",
        fileName: "aisha-aether-sage-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job1",
        className: "Dark Magician",
        classNameFr: "Magicienne de l'occulte",
        fileName: "aisha-dark-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job2",
        className: "Void Princess",
        classNameFr: "Princesse des âmes",
        fileName: "aisha-void-princess.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job3",
        className: "Oz Sorcerer",
        classNameFr: "Magicienne d'Oz",
        fileName: "aisha-oz-sorcerer.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "master",
        className: "Oz Sorcerer",
        classNameFr: "Magicienne d'Oz",
        fileName: "aisha-oz-sorcerer-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "job1",
        className: "Battle Magician",
        classNameFr: "Mage de bataille",
        fileName: "aisha-battle-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "job2",
        className: "Dimension Witch",
        classNameFr: "Sorcière dimensionnelle",
        fileName: "aisha-dimension-witch.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "job3",
        className: "Metamorphy",
        classNameFr: "Métamorphia",
        fileName: "aisha-metamorphy.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "master",
        className: "Metamorphy",
        classNameFr: "Métamorphia",
        fileName: "aisha-metamorphy-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "job1",
        className: "Wiz Magician",
        classNameFr: "Wiz Magician",
        fileName: "aisha-wiz-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "job2",
        className: "Mystic Alchemist",
        classNameFr: "Mystic Alchemist",
        fileName: "aisha-mystic-alchemist.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "job3",
        className: "Lord Azoth",
        classNameFr: "Druidesse d'Azoth",
        fileName: "aisha-lord-azoth.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "master",
        className: "Lord Azoth",
        classNameFr: "Druidesse d'Azoth",
        fileName: "aisha-lord-azoth-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "job1",
        className: "Combat Ranger",
        classNameFr: "Guerrière archère",
        fileName: "rena-combat-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "job2",
        className: "Wind Sneaker",
        classNameFr: "Voyageuse du vent",
        fileName: "rena-wind-sneaker.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "job3",
        className: "Anemos",
        classNameFr: "Anemos",
        fileName: "rena-anemos.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "master",
        className: "Anemos",
        classNameFr: "Anemos",
        fileName: "rena-anemos-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "job1",
        className: "Sniping Ranger",
        classNameFr: "Chasseresse",
        fileName: "rena-sniping-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "job2",
        className: "Grand Archer",
        classNameFr: "Maîtresse-archère",
        fileName: "rena-grand-archer.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "job3",
        className: "Daybreaker",
        classNameFr: "Aube",
        fileName: "rena-daybreaker.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "master",
        className: "Daybreaker",
        classNameFr: "Aube",
        fileName: "rena-daybreaker-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "job1",
        className: "Trapping Ranger",
        classNameFr: "Guerrière d'Erendil",
        fileName: "rena-trapping-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "job2",
        className: "Night Watcher",
        classNameFr: "Ombre sylvestre",
        fileName: "rena-night-watcher.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "job3",
        className: "Twilight",
        classNameFr: "Crépuscule",
        fileName: "rena-twilight.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "master",
        className: "Twilight",
        classNameFr: "Crépuscule",
        fileName: "rena-twilight-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "job1",
        className: "Poetic Ranger",
        classNameFr: "Poétesse archère",
        fileName: "rena-poetic-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "job2",
        className: "Tale Spinner",
        classNameFr: "Tisseuse d'histoires",
        fileName: "rena-tale-spinner.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "job3",
        className: "Prophetess",
        classNameFr: "Prophétesse",
        fileName: "rena-prophetess.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "master",
        className: "Prophetess",
        classNameFr: "Prophétesse",
        fileName: "rena-prophetess-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "job1",
        className: "Sword Taker",
        classNameFr: "Porteur d'épée",
        fileName: "raven-sword-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "job2",
        className: "Blade Master",
        classNameFr: "Maître de l'épée",
        fileName: "raven-blade-master.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "job3",
        className: "Furious Blade",
        classNameFr: "Lame furieuse",
        fileName: "raven-furious-blade.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "master",
        className: "Furious Blade",
        classNameFr: "Lame furieuse",
        fileName: "raven-furious-blade-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "job1",
        className: "Over Taker",
        classNameFr: "Porteur de lame",
        fileName: "raven-over-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "job2",
        className: "Reckless Fist",
        classNameFr: "Poing de feu",
        fileName: "raven-reckless-fist.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "job3",
        className: "Rage Hearts",
        classNameFr: "Cœur enragé",
        fileName: "raven-rage-hearts.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "master",
        className: "Rage Hearts",
        classNameFr: "Cœur enragé",
        fileName: "raven-rage-hearts-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Nova Imperator",
        pathNameFr: "Nova Imperator",
        jobStage: "job1",
        className: "Weapon Taker",
        classNameFr: "Maître de la destinée",
        fileName: "raven-weapon-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Nova Imperator",
        pathNameFr: "Nova Imperator",
        jobStage: "job2",
        className: "Veteran Commander",
        classNameFr: "Commandant Vétéran",
        fileName: "raven-veteran-commander.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Nova Imperator",
        pathNameFr: "Nova Imperator",
        jobStage: "job3",
        className: "Nova Imperator",
        classNameFr: "Nova Imperator",
        fileName: "raven-nova-imperator.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Nova Imperator",
        pathNameFr: "Nova Imperator",
        jobStage: "master",
        className: "Nova Imperator",
        classNameFr: "Nova Imperator",
        fileName: "raven-nova-imperator-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "job1",
        className: "Venom Taker",
        classNameFr: "Venimophore",
        fileName: "raven-venom-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "job2",
        className: "Mutant Reaper",
        classNameFr: "Métalame",
        fileName: "raven-mutant-reaper.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "job3",
        className: "Revenant",
        classNameFr: "Âme fatale",
        fileName: "raven-revenant.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "master",
        className: "Revenant",
        classNameFr: "Âme fatale",
        fileName: "raven-revenant-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "job1",
        className: "Code: Exotic",
        classNameFr: "Vengeresse nasod",
        fileName: "eve-code-exotic.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "job2",
        className: "Code: Nemesis",
        classNameFr: "Némésis nasod",
        fileName: "eve-code-nemesis.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "job3",
        className: "Code: Ultimate",
        classNameFr: "Nasod ultime",
        fileName: "eve-code-ultimate.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "master",
        className: "Code: Ultimate",
        classNameFr: "Nasod ultime",
        fileName: "eve-code-ultimate-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "job1",
        className: "Code: Architecture",
        classNameFr: "Espérance nasod",
        fileName: "eve-code-architecture.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "job2",
        className: "Code: Empress",
        classNameFr: "Impératrice Nasod",
        fileName: "eve-code-empress.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "job3",
        className: "Code: Esencia",
        classNameFr: "Nasod essentielle",
        fileName: "eve-code-esencia.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "master",
        className: "Code: Esencia",
        classNameFr: "Nasod essentielle",
        fileName: "eve-code-esencia-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "job1",
        className: "Code: Electra",
        classNameFr: "Nasod Elektra",
        fileName: "eve-code-electra.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "job2",
        className: "Code: Battle Seraph",
        classNameFr: "Séraphin Nasod",
        fileName: "eve-code-battle-seraph.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "job3",
        className: "Code: Sariel",
        classNameFr: "Nasod Sariel",
        fileName: "eve-code-sariel.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "master",
        className: "Code: Sariel",
        classNameFr: "Nasod Sariel",
        fileName: "eve-code-sariel-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "job1",
        className: "Code: Unknown",
        classNameFr: "Nasod Incognita",
        fileName: "eve-code-unknown.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "job2",
        className: "Code: Failess",
        classNameFr: "Nasod Absoluta",
        fileName: "eve-code-failess.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "job3",
        className: "Code: Antithese",
        classNameFr: "Nasod Antithesa",
        fileName: "eve-code-antithese.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "master",
        className: "Code: Antithese",
        classNameFr: "Nasod Antithesa",
        fileName: "eve-code-antithese-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job1",
        className: "Fury Guardian",
        classNameFr: "Gardien colérique",
        fileName: "chung-fury-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job2",
        className: "Iron Paladin",
        classNameFr: "Paladin adamantium",
        fileName: "chung-iron-paladin.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job3",
        className: "Comet Crusader",
        classNameFr: "Chevalier croisé cométaire",
        fileName: "chung-comet-crusader.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "master",
        className: "Comet Crusader",
        classNameFr: "Chevalier croisé cométaire",
        fileName: "chung-comet-crusader-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job1",
        className: "Shooting Guardian",
        classNameFr: "Gardien tireur",
        fileName: "chung-shooting-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job2",
        className: "Deadly Chaser",
        classNameFr: "Flingeur",
        fileName: "chung-deadly-chaser.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job3",
        className: "Fatal Phantom",
        classNameFr: "Fantôme Fatal",
        fileName: "chung-fatal-phantom.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "master",
        className: "Fatal Phantom",
        classNameFr: "Fantôme Fatal",
        fileName: "chung-fatal-phantom-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "job1",
        className: "Shelling Guardian",
        classNameFr: "Gardien artilleur",
        fileName: "chung-shelling-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "job2",
        className: "Tactical Trooper",
        classNameFr: "Canonnier de commando",
        fileName: "chung-tactical-trooper.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "job3",
        className: "Centurion",
        classNameFr: "Centurion",
        fileName: "chung-centurion.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "master",
        className: "Centurion",
        classNameFr: "Centurion",
        fileName: "chung-centurion-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "job1",
        className: "Core Guardian",
        classNameFr: "Gardien des cœurs",
        fileName: "chung-core-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "job2",
        className: "Divine Phanes",
        classNameFr: "Phanès sacré",
        fileName: "chung-divine-phanes.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "job3",
        className: "Dius Aer",
        classNameFr: "Dius Aer",
        fileName: "chung-dius-aer.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "master",
        className: "Dius Aer",
        classNameFr: "Dius Aer",
        fileName: "chung-dius-aer-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "job1",
        className: "Little Hsien",
        classNameFr: "Petite Hsien",
        fileName: "ara-little-hsien.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "job2",
        className: "Sakra Devanam",
        classNameFr: "Sakra Devanam",
        fileName: "ara-sakra-devanam.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "job3",
        className: "Apsara",
        classNameFr: "Apsara",
        fileName: "ara-apsara.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "master",
        className: "Apsara",
        classNameFr: "Apsara",
        fileName: "ara-apsara-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "job1",
        className: "Little Devil",
        classNameFr: "Diablotin",
        fileName: "ara-little-devil.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "job2",
        className: "Yama Raja",
        classNameFr: "Yama Raja",
        fileName: "ara-yama-raja.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "job3",
        className: "Devi",
        classNameFr: "Devi",
        fileName: "ara-devi.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "master",
        className: "Devi",
        classNameFr: "Devi",
        fileName: "ara-devi-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "job1",
        className: "Little Specter",
        classNameFr: "Petit Spectre",
        fileName: "ara-little-specter.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "job2",
        className: "Asura",
        classNameFr: "Asura",
        fileName: "ara-asura.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "job3",
        className: "Shakti",
        classNameFr: "Shakti",
        fileName: "ara-shakti.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "master",
        className: "Shakti",
        classNameFr: "Shakti",
        fileName: "ara-shakti-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "job1",
        className: "Little Helper",
        classNameFr: "Bienfaitrice",
        fileName: "ara-little-helper.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "job2",
        className: "Marici",
        classNameFr: "Yang Yan",
        fileName: "ara-marici.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "job3",
        className: "Surya",
        classNameFr: "Surya",
        fileName: "ara-surya.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "master",
        className: "Surya",
        classNameFr: "Surya",
        fileName: "ara-surya-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "job1",
        className: "Saber Knight",
        classNameFr: "Maître-escrimeur",
        fileName: "elesis-saber-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "job2",
        className: "Grand Master",
        classNameFr: "Grand Maître",
        fileName: "elesis-grand-master.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "job3",
        className: "Empire Sword",
        classNameFr: "Épée de l'empire",
        fileName: "elesis-empire-sword.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "master",
        className: "Empire Sword",
        classNameFr: "Épée de l'empire",
        fileName: "elesis-empire-sword-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job1",
        className: "Pyro Knight",
        classNameFr: "Chevalier Pyromane",
        fileName: "elesis-pyro-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job2",
        className: "Blazing Heart",
        classNameFr: "Cœur de Flammes",
        fileName: "elesis-blazing-heart.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job3",
        className: "Flame Lord",
        classNameFr: "Maîtresse des flammes",
        fileName: "elesis-flame-lord.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "master",
        className: "Flame Lord",
        classNameFr: "Maîtresse des flammes",
        fileName: "elesis-flame-lord-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "job1",
        className: "Dark Knight",
        classNameFr: "Chevalier ténébreux",
        fileName: "elesis-dark-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "job2",
        className: "Crimson Avenger",
        classNameFr: "Vengeresse pourpre",
        fileName: "elesis-crimson-avenger.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "job3",
        className: "Bloody Queen",
        classNameFr: "Reine sanglante",
        fileName: "elesis-bloody-queen.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "master",
        className: "Bloody Queen",
        classNameFr: "Reine sanglante",
        fileName: "elesis-bloody-queen-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "job1",
        className: "Soar Knight",
        classNameFr: "Chevalier fauconnier",
        fileName: "elesis-soar-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "job2",
        className: "Patrona",
        classNameFr: "Patrona",
        fileName: "elesis-patrona.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "job3",
        className: "Adrestia",
        classNameFr: "Adrestia",
        fileName: "elesis-adrestia.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "master",
        className: "Adrestia",
        classNameFr: "Adrestia",
        fileName: "elesis-adrestia-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "job1",
        className: "Psychic Tracer",
        classNameFr: "Traqueur psychique",
        fileName: "add-psychic-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "job2",
        className: "Lunatic Psyker",
        classNameFr: "Psychopathe",
        fileName: "add-lunatic-psyker.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "job3",
        className: "Doom Bringer",
        classNameFr: "Calamité",
        fileName: "add-doom-bringer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "master",
        className: "Doom Bringer",
        classNameFr: "Calamité",
        fileName: "add-doom-bringer-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "job1",
        className: "Arc Tracer",
        classNameFr: "Maître de l'IA",
        fileName: "add-arc-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "job2",
        className: "Mastermind",
        classNameFr: "Machiavel",
        fileName: "add-mastermind.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "job3",
        className: "Dominator",
        classNameFr: "Dominateur",
        fileName: "add-dominator.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "master",
        className: "Dominator",
        classNameFr: "Dominateur",
        fileName: "add-dominator-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "job1",
        className: "Time Tracer",
        classNameFr: "Voyageur Temporel",
        fileName: "add-time-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "job2",
        className: "Diabolic Esper",
        classNameFr: "Seigneur du Temps",
        fileName: "add-diabolic-esper.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "job3",
        className: "Mad Paradox",
        classNameFr: "Paradoxe",
        fileName: "add-mad-paradox.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "master",
        className: "Mad Paradox",
        classNameFr: "Paradoxe",
        fileName: "add-mad-paradox-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "job1",
        className: "Affect Tracer",
        classNameFr: "Affect Tracer",
        fileName: "add-affect-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "job2",
        className: "Dissembler",
        classNameFr: "Dissembler",
        fileName: "add-dissembler.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "job3",
        className: "Overmind",
        classNameFr: "Subjugueur",
        fileName: "add-overmind.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "master",
        className: "Overmind",
        classNameFr: "Subjugueur",
        fileName: "add-overmind-master.png"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "job1",
        className: "Chiliarch",
        classNameFr: "Chiliarque",
        fileName: "luciel-chiliarch.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "job2",
        className: "Dreadlord",
        classNameFr: "Ange de la Mort",
        fileName: "luciel-dreadlord.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "job3",
        className: "Catastrophe",
        classNameFr: "",
        fileName: "luciel-catastrophe.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "master",
        className: "Catastrophe",
        classNameFr: "",
        fileName: "luciel-catastrophe-master.png"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocent",
        jobStage: "job1",
        className: "Royal Guard",
        classNameFr: "Garde Royal",
        fileName: "luciel-royal-guard.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocent",
        jobStage: "job2",
        className: "Noblesse",
        classNameFr: "Noble",
        fileName: "luciel-noblesse.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocent",
        jobStage: "job3",
        className: "Innocent",
        classNameFr: "",
        fileName: "luciel-innocent.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocent",
        jobStage: "master",
        className: "Innocent",
        classNameFr: "",
        fileName: "luciel-innocent-master.png"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "",
        jobStage: "job1",
        className: "Diabla",
        classNameFr: "Diabla",
        fileName: "luciel-diabla.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "",
        jobStage: "job2",
        className: "Demonio",
        classNameFr: "Demonio",
        fileName: "luciel-demonio.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "",
        jobStage: "job3",
        className: "Diangelion",
        classNameFr: "",
        fileName: "luciel-diangelion.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "",
        jobStage: "master",
        className: "Diangelion",
        classNameFr: "",
        fileName: "luciel-diangelion-master.png"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "",
        jobStage: "job1",
        className: "Emptiness",
        classNameFr: "",
        fileName: "luciel-emptiness.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "",
        jobStage: "job2",
        className: "Turbids",
        classNameFr: "",
        fileName: "luciel-turbids.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "",
        jobStage: "job3",
        className: "Demersio",
        classNameFr: "",
        fileName: "luciel-demersio.png"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "",
        jobStage: "master",
        className: "Demersio",
        classNameFr: "",
        fileName: "luciel-demersio-master.png"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "job1",
        className: "Heavy Barrel",
        classNameFr: "Grand Calibre",
        fileName: "rose-heavy-barrel.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "job2",
        className: "Storm Trooper",
        classNameFr: "Avant-Garde",
        fileName: "rose-storm-trooper.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "job3",
        className: "Tempest Burster",
        classNameFr: "Tempête furieuse",
        fileName: "rose-tempest-burster.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "master",
        className: "Tempest Burster",
        classNameFr: "Tempête furieuse",
        fileName: "rose-tempest-burster-master.png"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "job1",
        className: "Bloodia",
        classNameFr: "Sanguinaire",
        fileName: "rose-bloodia.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "job2",
        className: "Crimson Rose",
        classNameFr: "Rose pourpre",
        fileName: "rose-crimson-rose.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "job3",
        className: "Black Massacre",
        classNameFr: "Veuve Noire",
        fileName: "rose-black-massacre.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "master",
        className: "Black Massacre",
        classNameFr: "Veuve Noire",
        fileName: "rose-black-massacre-master.png"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "job1",
        className: "Valkyrie",
        classNameFr: "Valkyrie",
        fileName: "rose-valkyrie.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "job2",
        className: "Freyja",
        classNameFr: "Freyja",
        fileName: "rose-freyja.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "job3",
        className: "Minerva",
        classNameFr: "Minerve",
        fileName: "rose-minerva.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "master",
        className: "Minerva",
        classNameFr: "Minerve",
        fileName: "rose-minerva-master.png"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "job1",
        className: "Metal Heart",
        classNameFr: "Cœur d'acier",
        fileName: "rose-metal-heart.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "job2",
        className: "Optimus",
        classNameFr: "",
        fileName: "rose-optimus.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "job3",
        className: "Prime Operator",
        classNameFr: "Prime Opératrice",
        fileName: "rose-prime-operator.png"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "master",
        className: "Prime Operator",
        classNameFr: "Prime Opératrice",
        fileName: "rose-prime-operator-master.png"
    }),
    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "job1",
        className: "Lofty: Executor",
        classNameFr: "Exactor",
        fileName: "ain-lofty-executor.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "job2",
        className: "Arme Thaumaturgy",
        classNameFr: "Prodigium",
        fileName: "ain-arme-thaumaturgy.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "job3",
        className: "Richter",
        classNameFr: "Arbiter",
        fileName: "ain-richter.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "master",
        className: "Richter",
        classNameFr: "Arbiter",
        fileName: "ain-richter-master.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "job1",
        className: "Lofty: Anpassen",
        classNameFr: "Aptare",
        fileName: "ain-lofty-anpassen.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "job2",
        className: "Erbluhen Emotion",
        classNameFr: "Vigere",
        fileName: "ain-erbluhen-emotion.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "job3",
        className: "Bluhen",
        classNameFr: "Florere",
        fileName: "ain-bluhen.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "master",
        className: "Bluhen",
        classNameFr: "Florere",
        fileName: "ain-bluhen-master.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "job1",
        className: "Lofty: Wanderer",
        classNameFr: "Viator",
        fileName: "ain-lofty-wanderer.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "job2",
        className: "Apostasia",
        classNameFr: "Apostata",
        fileName: "ain-apostasia.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "job3",
        className: "Herrscher",
        classNameFr: "Regnator",
        fileName: "ain-herrscher.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "master",
        className: "Herrscher",
        classNameFr: "Regnator",
        fileName: "ain-herrscher-master.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "job1",
        className: "Lofty: Schreier",
        classNameFr: "Adoleo",
        fileName: "ain-lofty-schreier.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "job2",
        className: "Schatz Reprise",
        classNameFr: "Captura",
        fileName: "ain-schatz-reprise.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "job3",
        className: "Opferung",
        classNameFr: "Sacratus",
        fileName: "ain-opferung.png"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "master",
        className: "Opferung",
        classNameFr: "Sacratus",
        fileName: "ain-opferung-master.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "job1",
        className: "Sparky Child",
        classNameFr: "Bébé Étincelle",
        fileName: "laby-sparky-child.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "job2",
        className: "Rumble Pumn",
        classNameFr: "Bébé Cyclone",
        fileName: "laby-rumble-pumn.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "job3",
        className: "Eternity Winner",
        classNameFr: "Championne Éonienne",
        fileName: "laby-eternity-winner.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "master",
        className: "Eternity Winner",
        classNameFr: "Championne Éonienne",
        fileName: "laby-eternity-winner-master.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "job1",
        className: "Twinkle Child",
        classNameFr: "Bébé Paillette",
        fileName: "laby-twinkle-child.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "job2",
        className: "Shining Romantica",
        classNameFr: "Auralice",
        fileName: "laby-shining-romantica.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "job3",
        className: "Radiant Soul",
        classNameFr: "Lumièle",
        fileName: "laby-radiant-soul.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "master",
        className: "Radiant Soul",
        classNameFr: "Lumièle",
        fileName: "laby-radiant-soul-master.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "job1",
        className: "Rusty Child",
        classNameFr: "Bébé obscur",
        fileName: "laby-rusty-child.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "job2",
        className: "Daydreamer",
        classNameFr: "Rêveuse diurne",
        fileName: "laby-daydreamer.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "job3",
        className: "Nisha Labyrinth",
        classNameFr: "Labyrinthe de Nisha",
        fileName: "laby-nisha-labyrinth.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "master",
        className: "Nisha Labyrinth",
        classNameFr: "Labyrinthe de Nisha",
        fileName: "laby-nisha-labyrinth-master.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "job1",
        className: "Rough Child",
        classNameFr: "Morveuse",
        fileName: "laby-rough-child.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "job2",
        className: "Punky Poppet",
        classNameFr: "Filoute",
        fileName: "laby-punky-poppet.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "job3",
        className: "Twins Picaro",
        classNameFr: "Arlequine",
        fileName: "laby-twins-picaro.png"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "master",
        className: "Twins Picaro",
        classNameFr: "Arlequine",
        fileName: "laby-twins-picaro-master.png"
    }),
    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "job1",
        className: "Second Revenger",
        classNameFr: "Vengeur d'Âmes",
        fileName: "noah-second-revenger.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "job2",
        className: "Silent Shadow",
        classNameFr: "Ombre Silencieuse",
        fileName: "noah-silent-shadow.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "job3",
        className: "Liberator",
        classNameFr: "Libérator",
        fileName: "noah-liberator.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "master",
        className: "Liberator",
        classNameFr: "Libérator",
        fileName: "noah-liberator-master.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "job1",
        className: "Second Selection",
        classNameFr: "Destinator",
        fileName: "noah-second-selection.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "job2",
        className: "Stellar Caster",
        classNameFr: "Lanceur d'Étoiles",
        fileName: "noah-stellar-caster.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "job3",
        className: "Celestia",
        classNameFr: "Céléstia",
        fileName: "noah-celestia.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "master",
        className: "Celestia",
        classNameFr: "Céléstia",
        fileName: "noah-celestia-master.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "job1",
        className: "Second Grief",
        classNameFr: "Lune Soucieuse",
        fileName: "noah-second-grief.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "job2",
        className: "Pale Pilgrim",
        classNameFr: "Pélerin Lunaire",
        fileName: "noah-pale-pilgrim.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "job3",
        className: "Nyx Pieta",
        classNameFr: "Nyx Pieta",
        fileName: "noah-nyx-pieta.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "master",
        className: "Nyx Pieta",
        classNameFr: "Nyx Pieta",
        fileName: "noah-nyx-pieta-master.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "job1",
        className: "Second Dejection",
        classNameFr: "Errelune",
        fileName: "noah-second-dejection.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "job2",
        className: "Hazy Delusion",
        classNameFr: "Incandesonge",
        fileName: "noah-hazy-delusion.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "job3",
        className: "Morpheus",
        classNameFr: "Morphée",
        fileName: "noah-morpheus.png"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "master",
        className: "Morpheus",
        classNameFr: "Morphée",
        fileName: "noah-morpheus-master.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "job1",
        className: "Poten Finder",
        classNameFr: "Minéralista",
        fileName: "lithia-poten-finder.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "job2",
        className: "Mighty Miner",
        classNameFr: "Cristalina",
        fileName: "lithia-mighty-miner.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "job3",
        className: "Gembliss",
        classNameFr: "Eméraldia",
        fileName: "lithia-gembliss.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "master",
        className: "Gembliss",
        classNameFr: "Eméraldia",
        fileName: "lithia-gembliss-master.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "job1",
        className: "Fortune Finder",
        classNameFr: "Jadoyante",
        fileName: "lithia-fortune-finder.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "job2",
        className: "Greedy Wonder",
        classNameFr: "Adamantine",
        fileName: "lithia-greedy-wonder.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "job3",
        className: "Avarice",
        classNameFr: "Avaricia",
        fileName: "lithia-avarice.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "master",
        className: "Avarice",
        classNameFr: "Avaricia",
        fileName: "lithia-avarice-master.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "",
        jobStage: "job1",
        className: "Path Finder",
        classNameFr: "",
        fileName: "lithia-path-finder.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "",
        jobStage: "job2",
        className: "Rima Clavis",
        classNameFr: "",
        fileName: "lithia-rima-clavis.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "",
        jobStage: "job3",
        className: "Achlys",
        classNameFr: "",
        fileName: "lithia-achlys.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "",
        jobStage: "master",
        className: "Achlys",
        classNameFr: "",
        fileName: "lithia-achlys-master.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "",
        jobStage: "job1",
        className: "Trick Finder",
        classNameFr: "Cupido Girl",
        fileName: "lithia-trick-finder.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "",
        jobStage: "job2",
        className: "Cynical Sneer",
        classNameFr: "Cynical Girl",
        fileName: "lithia-cynical-sneer.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "",
        jobStage: "job3",
        className: "Mischief",
        classNameFr: "Delinquenta",
        fileName: "lithia-mischief.png"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "",
        jobStage: "master",
        className: "Mischief",
        classNameFr: "Delinquenta",
        fileName: "lithia-mischief-master.png"
    }),
];