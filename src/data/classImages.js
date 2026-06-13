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
        fileName: "elsword-sword-knight.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Knight Emperor",
        pathNameFr: "Chevalier Royal",
        jobStage: "job2",
        className: "Lord Knight",
        classNameFr: "Haut Chevalier",
        fileName: "elsword-lord-knight.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Knight Emperor",
        pathNameFr: "Chevalier Royal",
        jobStage: "job3",
        className: "Knight Emperor",
        classNameFr: "Chevalier Royal",
        fileName: "elsword-knight-emperor.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Knight Emperor",
        pathNameFr: "Chevalier Royal",
        jobStage: "master",
        className: "Knight Emperor",
        classNameFr: "Chevalier Royal",
        fileName: "elsword-knight-emperor-master.webp"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "job1",
        className: "Magic Knight",
        classNameFr: "Chevalier Mage",
        fileName: "elsword-magic-knight.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "job2",
        className: "Rune Knight",
        classNameFr: "Chevalier Runique",
        fileName: "elsword-rune-knight.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "job3",
        className: "Rune Master",
        classNameFr: "Maître des runes",
        fileName: "elsword-rune-master.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Rune Master",
        pathNameFr: "Maître des runes",
        jobStage: "master",
        className: "Rune Master",
        classNameFr: "Maître des runes",
        fileName: "elsword-rune-master-master.webp"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "job1",
        className: "Sheath Knight",
        classNameFr: "Chevalier de Cornwell",
        fileName: "elsword-sheath-knight.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "job2",
        className: "Infinity Sword",
        classNameFr: "Invocateur d'épées",
        fileName: "elsword-infinity-sword.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "job3",
        className: "Immortal",
        classNameFr: "Immortel",
        fileName: "elsword-immortal.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Immortal",
        pathNameFr: "Immortel",
        jobStage: "master",
        className: "Immortal",
        classNameFr: "Immortel",
        fileName: "elsword-immortal-master.webp"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "job1",
        className: "Root Knight",
        classNameFr: "Bénitier",
        fileName: "elsword-root-knight.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "job2",
        className: "Sacred Templar",
        classNameFr: "Templier",
        fileName: "elsword-sacred-templar.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "job3",
        className: "Genesis",
        classNameFr: "Séphiroth",
        fileName: "elsword-genesis.webp"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Genesis",
        pathNameFr: "Séphiroth",
        jobStage: "master",
        className: "Genesis",
        classNameFr: "Séphiroth",
        fileName: "elsword-genesis-master.webp"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "job1",
        className: "High Magician",
        classNameFr: "Archimage",
        fileName: "aisha-high-magician.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "job2",
        className: "Elemental Master",
        classNameFr: "Maîtresse des éléments",
        fileName: "aisha-elemental-master.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "job3",
        className: "Aether Sage",
        classNameFr: "Étheriste",
        fileName: "aisha-aether-sage.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Aether Sage",
        pathNameFr: "Étheriste",
        jobStage: "master",
        className: "Aether Sage",
        classNameFr: "Étheriste",
        fileName: "aisha-aether-sage-master.webp"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job1",
        className: "Dark Magician",
        classNameFr: "Magicienne de l'occulte",
        fileName: "aisha-dark-magician.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job2",
        className: "Void Princess",
        classNameFr: "Princesse des âmes",
        fileName: "aisha-void-princess.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job3",
        className: "Oz Sorcerer",
        classNameFr: "Magicienne d'Oz",
        fileName: "aisha-oz-sorcerer.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Oz Sorcerer",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "master",
        className: "Oz Sorcerer",
        classNameFr: "Magicienne d'Oz",
        fileName: "aisha-oz-sorcerer-master.webp"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "job1",
        className: "Battle Magician",
        classNameFr: "Mage de bataille",
        fileName: "aisha-battle-magician.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "job2",
        className: "Dimension Witch",
        classNameFr: "Sorcière dimensionnelle",
        fileName: "aisha-dimension-witch.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "job3",
        className: "Metamorphy",
        classNameFr: "Métamorphia",
        fileName: "aisha-metamorphy.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Metamorphy",
        pathNameFr: "Métamorphia",
        jobStage: "master",
        className: "Metamorphy",
        classNameFr: "Métamorphia",
        fileName: "aisha-metamorphy-master.webp"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "job1",
        className: "Wiz Magician",
        classNameFr: "Magicienne de génie",
        fileName: "aisha-wiz-magician.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "job2",
        className: "Mystic Alchemist",
        classNameFr: "Alchimiste mystique",
        fileName: "aisha-mystic-alchemist.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "job3",
        className: "Lord Azoth",
        classNameFr: "Druidesse d'Azoth",
        fileName: "aisha-lord-azoth.webp"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Lord Azoth",
        pathNameFr: "Druidesse d'Azoth",
        jobStage: "master",
        className: "Lord Azoth",
        classNameFr: "Druidesse d'Azoth",
        fileName: "aisha-lord-azoth-master.webp"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "job1",
        className: "Combat Ranger",
        classNameFr: "Guerrière archère",
        fileName: "rena-combat-ranger.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "job2",
        className: "Wind Sneaker",
        classNameFr: "Voyageuse du vent",
        fileName: "rena-wind-sneaker.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "job3",
        className: "Anemos",
        classNameFr: "Anemos",
        fileName: "rena-anemos.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Anemos",
        pathNameFr: "Anemos",
        jobStage: "master",
        className: "Anemos",
        classNameFr: "Anemos",
        fileName: "rena-anemos-master.webp"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "job1",
        className: "Sniping Ranger",
        classNameFr: "Chasseresse",
        fileName: "rena-sniping-ranger.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "job2",
        className: "Grand Archer",
        classNameFr: "Maîtresse-archère",
        fileName: "rena-grand-archer.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "job3",
        className: "Daybreaker",
        classNameFr: "Aube",
        fileName: "rena-daybreaker.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Daybreaker",
        pathNameFr: "Aube",
        jobStage: "master",
        className: "Daybreaker",
        classNameFr: "Aube",
        fileName: "rena-daybreaker-master.webp"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "job1",
        className: "Trapping Ranger",
        classNameFr: "Guerrière d'Erendil",
        fileName: "rena-trapping-ranger.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "job2",
        className: "Night Watcher",
        classNameFr: "Ombre sylvestre",
        fileName: "rena-night-watcher.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "job3",
        className: "Twilight",
        classNameFr: "Crépuscule",
        fileName: "rena-twilight.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Twilight",
        pathNameFr: "Crépuscule",
        jobStage: "master",
        className: "Twilight",
        classNameFr: "Crépuscule",
        fileName: "rena-twilight-master.webp"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "job1",
        className: "Poetic Ranger",
        classNameFr: "Poétesse archère",
        fileName: "rena-poetic-ranger.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "job2",
        className: "Tale Spinner",
        classNameFr: "Tisseuse d'histoires",
        fileName: "rena-tale-spinner.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "job3",
        className: "Prophetess",
        classNameFr: "Prophétesse",
        fileName: "rena-prophetess.webp"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Prophetess",
        pathNameFr: "Prophétesse",
        jobStage: "master",
        className: "Prophetess",
        classNameFr: "Prophétesse",
        fileName: "rena-prophetess-master.webp"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "job1",
        className: "Sword Taker",
        classNameFr: "Porteur d'épée",
        fileName: "raven-sword-taker.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "job2",
        className: "Blade Master",
        classNameFr: "Maître de l'épée",
        fileName: "raven-blade-master.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "job3",
        className: "Furious Blade",
        classNameFr: "Lame furieuse",
        fileName: "raven-furious-blade.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Furious Blade",
        pathNameFr: "Lame furieuse",
        jobStage: "master",
        className: "Furious Blade",
        classNameFr: "Lame furieuse",
        fileName: "raven-furious-blade-master.webp"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "job1",
        className: "Over Taker",
        classNameFr: "Porteur de lame",
        fileName: "raven-over-taker.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "job2",
        className: "Reckless Fist",
        classNameFr: "Poing de feu",
        fileName: "raven-reckless-fist.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "job3",
        className: "Rage Hearts",
        classNameFr: "Cœur enragé",
        fileName: "raven-rage-hearts.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Rage Hearts",
        pathNameFr: "Cœur enragé",
        jobStage: "master",
        className: "Rage Hearts",
        classNameFr: "Cœur enragé",
        fileName: "raven-rage-hearts-master.webp"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Nova Imperator",
        pathNameFr: "Nova Imperator",
        jobStage: "job1",
        className: "Weapon Taker",
        classNameFr: "Maître de la destinée",
        fileName: "raven-weapon-taker.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Imperator Nova",
        pathNameFr: "Imperator Nova",
        jobStage: "job2",
        className: "Veteran Commander",
        classNameFr: "Commandant Vétéran",
        fileName: "raven-veteran-commander.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Imperator Nova",
        pathNameFr: "Imperator Nova",
        jobStage: "job3",
        className: "Nova Imperator",
        classNameFr: "Imperator Nova",
        fileName: "raven-nova-imperator.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Imperator Nova",
        pathNameFr: "Imperator Nova",
        jobStage: "master",
        className: "Nova Imperator",
        classNameFr: "Imperator Nova",
        fileName: "raven-nova-imperator-master.webp"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "job1",
        className: "Venom Taker",
        classNameFr: "Venimophore",
        fileName: "raven-venom-taker.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "job2",
        className: "Mutant Reaper",
        classNameFr: "Métalame",
        fileName: "raven-mutant-reaper.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "job3",
        className: "Revenant",
        classNameFr: "Âme fatale",
        fileName: "raven-revenant.webp"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Revenant",
        pathNameFr: "Âme fatale",
        jobStage: "master",
        className: "Revenant",
        classNameFr: "Âme fatale",
        fileName: "raven-revenant-master.webp"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "job1",
        className: "Code: Exotic",
        classNameFr: "Vengeresse nasod",
        fileName: "eve-code-exotic.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "job2",
        className: "Code: Nemesis",
        classNameFr: "Némésis nasod",
        fileName: "eve-code-nemesis.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "job3",
        className: "Code: Ultimate",
        classNameFr: "Nasod ultime",
        fileName: "eve-code-ultimate.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Ultimate",
        pathNameFr: "Nasod ultime",
        jobStage: "master",
        className: "Code: Ultimate",
        classNameFr: "Nasod ultime",
        fileName: "eve-code-ultimate-master.webp"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "job1",
        className: "Code: Architecture",
        classNameFr: "Espérance nasod",
        fileName: "eve-code-architecture.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "job2",
        className: "Code: Empress",
        classNameFr: "Impératrice Nasod",
        fileName: "eve-code-empress.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "job3",
        className: "Code: Esencia",
        classNameFr: "Nasod essentielle",
        fileName: "eve-code-esencia.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Esencia",
        pathNameFr: "Nasod essentielle",
        jobStage: "master",
        className: "Code: Esencia",
        classNameFr: "Nasod essentielle",
        fileName: "eve-code-esencia-master.webp"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "job1",
        className: "Code: Electra",
        classNameFr: "Nasod Elektra",
        fileName: "eve-code-electra.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "job2",
        className: "Code: Battle Seraph",
        classNameFr: "Séraphin Nasod",
        fileName: "eve-code-battle-seraph.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "job3",
        className: "Code: Sariel",
        classNameFr: "Nasod Sariel",
        fileName: "eve-code-sariel.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Sariel",
        pathNameFr: "Nasod Sariel",
        jobStage: "master",
        className: "Code: Sariel",
        classNameFr: "Nasod Sariel",
        fileName: "eve-code-sariel-master.webp"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "job1",
        className: "Code: Unknown",
        classNameFr: "Nasod Incognita",
        fileName: "eve-code-unknown.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "job2",
        className: "Code: Failess",
        classNameFr: "Nasod Absoluta",
        fileName: "eve-code-failess.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "job3",
        className: "Code: Antithese",
        classNameFr: "Nasod Antithesa",
        fileName: "eve-code-antithese.webp"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Antithese",
        pathNameFr: "Nasod Antithesa",
        jobStage: "master",
        className: "Code: Antithese",
        classNameFr: "Nasod Antithesa",
        fileName: "eve-code-antithese-master.webp"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job1",
        className: "Fury Guardian",
        classNameFr: "Gardien colérique",
        fileName: "chung-fury-guardian.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job2",
        className: "Iron Paladin",
        classNameFr: "Paladin adamantium",
        fileName: "chung-iron-paladin.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job3",
        className: "Comet Crusader",
        classNameFr: "Chevalier croisé cométaire",
        fileName: "chung-comet-crusader.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Comet Crusader",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "master",
        className: "Comet Crusader",
        classNameFr: "Chevalier croisé cométaire",
        fileName: "chung-comet-crusader-master.webp"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job1",
        className: "Shooting Guardian",
        classNameFr: "Gardien tireur",
        fileName: "chung-shooting-guardian.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job2",
        className: "Deadly Chaser",
        classNameFr: "Flingeur",
        fileName: "chung-deadly-chaser.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job3",
        className: "Fatal Phantom",
        classNameFr: "Fantôme Fatal",
        fileName: "chung-fatal-phantom.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fatal Phantom",
        pathNameFr: "Fantôme Fatal",
        jobStage: "master",
        className: "Fatal Phantom",
        classNameFr: "Fantôme Fatal",
        fileName: "chung-fatal-phantom-master.webp"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "job1",
        className: "Shelling Guardian",
        classNameFr: "Gardien artilleur",
        fileName: "chung-shelling-guardian.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "job2",
        className: "Tactical Trooper",
        classNameFr: "Canonnier de commando",
        fileName: "chung-tactical-trooper.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "job3",
        className: "Centurion",
        classNameFr: "Centurion",
        fileName: "chung-centurion.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Centurion",
        pathNameFr: "Centurion",
        jobStage: "master",
        className: "Centurion",
        classNameFr: "Centurion",
        fileName: "chung-centurion-master.webp"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "job1",
        className: "Core Guardian",
        classNameFr: "Gardien des cœurs",
        fileName: "chung-core-guardian.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "job2",
        className: "Divine Phanes",
        classNameFr: "Phanès sacré",
        fileName: "chung-divine-phanes.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "job3",
        className: "Dius Aer",
        classNameFr: "Dius Aer",
        fileName: "chung-dius-aer.webp"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Dius Aer",
        pathNameFr: "Dius Aer",
        jobStage: "master",
        className: "Dius Aer",
        classNameFr: "Dius Aer",
        fileName: "chung-dius-aer-master.webp"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "job1",
        className: "Little Hsien",
        classNameFr: "Petite Hsien",
        fileName: "ara-little-hsien.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "job2",
        className: "Sakra Devanam",
        classNameFr: "Sakra Devanam",
        fileName: "ara-sakra-devanam.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "job3",
        className: "Apsara",
        classNameFr: "Apsara",
        fileName: "ara-apsara.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Apsara",
        pathNameFr: "Apsara",
        jobStage: "master",
        className: "Apsara",
        classNameFr: "Apsara",
        fileName: "ara-apsara-master.webp"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "job1",
        className: "Little Devil",
        classNameFr: "Diablotin",
        fileName: "ara-little-devil.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "job2",
        className: "Yama Raja",
        classNameFr: "Yama Raja",
        fileName: "ara-yama-raja.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "job3",
        className: "Devi",
        classNameFr: "Devi",
        fileName: "ara-devi.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Devi",
        pathNameFr: "Devi",
        jobStage: "master",
        className: "Devi",
        classNameFr: "Devi",
        fileName: "ara-devi-master.webp"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "job1",
        className: "Little Specter",
        classNameFr: "Petit Spectre",
        fileName: "ara-little-specter.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "job2",
        className: "Asura",
        classNameFr: "Asura",
        fileName: "ara-asura.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "job3",
        className: "Shakti",
        classNameFr: "Shakti",
        fileName: "ara-shakti.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Shakti",
        pathNameFr: "Shakti",
        jobStage: "master",
        className: "Shakti",
        classNameFr: "Shakti",
        fileName: "ara-shakti-master.webp"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "job1",
        className: "Little Helper",
        classNameFr: "Bienfaitrice",
        fileName: "ara-little-helper.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "job2",
        className: "Marici",
        classNameFr: "Yang Yan",
        fileName: "ara-marici.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "job3",
        className: "Surya",
        classNameFr: "Surya",
        fileName: "ara-surya.webp"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Surya",
        pathNameFr: "Surya",
        jobStage: "master",
        className: "Surya",
        classNameFr: "Surya",
        fileName: "ara-surya-master.webp"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "job1",
        className: "Saber Knight",
        classNameFr: "Maître-escrimeur",
        fileName: "elesis-saber-knight.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "job2",
        className: "Grand Master",
        classNameFr: "Grand Maître",
        fileName: "elesis-grand-master.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "job3",
        className: "Empire Sword",
        classNameFr: "Épée de l'empire",
        fileName: "elesis-empire-sword.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Empire Sword",
        pathNameFr: "Épée de l'empire",
        jobStage: "master",
        className: "Empire Sword",
        classNameFr: "Épée de l'empire",
        fileName: "elesis-empire-sword-master.webp"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job1",
        className: "Pyro Knight",
        classNameFr: "Chevalier Pyromane",
        fileName: "elesis-pyro-knight.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job2",
        className: "Blazing Heart",
        classNameFr: "Cœur de Flammes",
        fileName: "elesis-blazing-heart.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job3",
        className: "Flame Lord",
        classNameFr: "Maîtresse des flammes",
        fileName: "elesis-flame-lord.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Flame Lord",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "master",
        className: "Flame Lord",
        classNameFr: "Maîtresse des flammes",
        fileName: "elesis-flame-lord-master.webp"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "job1",
        className: "Dark Knight",
        classNameFr: "Chevalier ténébreux",
        fileName: "elesis-dark-knight.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "job2",
        className: "Crimson Avenger",
        classNameFr: "Vengeresse pourpre",
        fileName: "elesis-crimson-avenger.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "job3",
        className: "Bloody Queen",
        classNameFr: "Reine sanglante",
        fileName: "elesis-bloody-queen.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Bloody Queen",
        pathNameFr: "Reine sanglante",
        jobStage: "master",
        className: "Bloody Queen",
        classNameFr: "Reine sanglante",
        fileName: "elesis-bloody-queen-master.webp"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "job1",
        className: "Soar Knight",
        classNameFr: "Chevalier fauconnier",
        fileName: "elesis-soar-knight.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "job2",
        className: "Patrona",
        classNameFr: "Patrona",
        fileName: "elesis-patrona.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "job3",
        className: "Adrestia",
        classNameFr: "Adrestia",
        fileName: "elesis-adrestia.webp"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Adrestia",
        pathNameFr: "Adrestia",
        jobStage: "master",
        className: "Adrestia",
        classNameFr: "Adrestia",
        fileName: "elesis-adrestia-master.webp"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "job1",
        className: "Psychic Tracer",
        classNameFr: "Traqueur psychique",
        fileName: "add-psychic-tracer.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "job2",
        className: "Lunatic Psyker",
        classNameFr: "Psychopathe",
        fileName: "add-lunatic-psyker.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "job3",
        className: "Doom Bringer",
        classNameFr: "Calamité",
        fileName: "add-doom-bringer.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Doom Bringer",
        pathNameFr: "Calamité",
        jobStage: "master",
        className: "Doom Bringer",
        classNameFr: "Calamité",
        fileName: "add-doom-bringer-master.webp"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "job1",
        className: "Arc Tracer",
        classNameFr: "Maître de l'IA",
        fileName: "add-arc-tracer.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "job2",
        className: "Mastermind",
        classNameFr: "Machiavel",
        fileName: "add-mastermind.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "job3",
        className: "Dominator",
        classNameFr: "Dominateur",
        fileName: "add-dominator.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Dominator",
        pathNameFr: "Dominateur",
        jobStage: "master",
        className: "Dominator",
        classNameFr: "Dominateur",
        fileName: "add-dominator-master.webp"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "job1",
        className: "Time Tracer",
        classNameFr: "Voyageur Temporel",
        fileName: "add-time-tracer.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "job2",
        className: "Diabolic Esper",
        classNameFr: "Seigneur du Temps",
        fileName: "add-diabolic-esper.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "job3",
        className: "Mad Paradox",
        classNameFr: "Paradoxe",
        fileName: "add-mad-paradox.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Mad Paradox",
        pathNameFr: "Paradoxe",
        jobStage: "master",
        className: "Mad Paradox",
        classNameFr: "Paradoxe",
        fileName: "add-mad-paradox-master.webp"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "job1",
        className: "Affect Tracer",
        classNameFr: "Traceur d'impulsions",
        fileName: "add-affect-tracer.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "job2",
        className: "Dissembler",
        classNameFr: "Décomposeur",
        fileName: "add-dissembler.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "job3",
        className: "Overmind",
        classNameFr: "Subjugueur",
        fileName: "add-overmind.webp"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Overmind",
        pathNameFr: "Subjugueur",
        jobStage: "master",
        className: "Overmind",
        classNameFr: "Subjugueur",
        fileName: "add-overmind-master.webp"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "job1",
        className: "Chiliarch",
        classNameFr: "Chiliarque",
        fileName: "luciel-chiliarch.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "job2",
        className: "Dreadlord",
        classNameFr: "Ange de la Mort",
        fileName: "luciel-dreadlord.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "job3",
        className: "Catastrophe",
        classNameFr: "",
        fileName: "luciel-catastrophe.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Catastrophe",
        pathNameFr: "",
        jobStage: "master",
        className: "Catastrophe",
        classNameFr: "",
        fileName: "luciel-catastrophe-master.webp"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocence",
        jobStage: "job1",
        className: "Royal Guard",
        classNameFr: "Garde Royal",
        fileName: "luciel-royal-guard.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocence",
        jobStage: "job2",
        className: "Noblesse",
        classNameFr: "Noble",
        fileName: "luciel-noblesse.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocence",
        jobStage: "job3",
        className: "Innocent",
        classNameFr: "Innocence",
        fileName: "luciel-innocent.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Innocent",
        pathNameFr: "Innocence",
        jobStage: "master",
        className: "Innocent",
        classNameFr: "Innocence",
        fileName: "luciel-innocent-master.webp"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "Diangelion",
        jobStage: "job1",
        className: "Diabla",
        classNameFr: "Diabla",
        fileName: "luciel-diabla.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "Diangelion",
        jobStage: "job2",
        className: "Demonio",
        classNameFr: "Demonio",
        fileName: "luciel-demonio.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "Diangelion",
        jobStage: "job3",
        className: "Diangelion",
        classNameFr: "Diangelion",
        fileName: "luciel-diangelion.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Diangelion",
        pathNameFr: "Diangelion",
        jobStage: "master",
        className: "Diangelion",
        classNameFr: "Diangelion",
        fileName: "luciel-diangelion-master.webp"
    }),

    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "Demersio",
        jobStage: "job1",
        className: "Emptiness",
        classNameFr: "Isolatesse",
        fileName: "luciel-emptiness.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "Demersio",
        jobStage: "job2",
        className: "Turbids",
        classNameFr: "Tristesso",
        fileName: "luciel-turbids.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "Demersio",
        jobStage: "job3",
        className: "Demersio",
        classNameFr: "Demersio",
        fileName: "luciel-demersio.webp"
    }),
    createClassImage({
        characterId: "luciel",
        character: "Lu/Ciel",
        pathName: "Demersio",
        pathNameFr: "Demersio",
        jobStage: "master",
        className: "Demersio",
        classNameFr: "Demersio",
        fileName: "luciel-demersio-master.webp"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "job1",
        className: "Heavy Barrel",
        classNameFr: "Grand Calibre",
        fileName: "rose-heavy-barrel.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "job2",
        className: "Storm Trooper",
        classNameFr: "Avant-Garde",
        fileName: "rose-storm-trooper.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "job3",
        className: "Tempest Burster",
        classNameFr: "Tempête furieuse",
        fileName: "rose-tempest-burster.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Tempest Burster",
        pathNameFr: "",
        jobStage: "master",
        className: "Tempest Burster",
        classNameFr: "Tempête furieuse",
        fileName: "rose-tempest-burster-master.webp"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "job1",
        className: "Bloodia",
        classNameFr: "Sanguinaire",
        fileName: "rose-bloodia.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "job2",
        className: "Crimson Rose",
        classNameFr: "Rose pourpre",
        fileName: "rose-crimson-rose.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "job3",
        className: "Black Massacre",
        classNameFr: "Veuve Noire",
        fileName: "rose-black-massacre.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Black Massacre",
        pathNameFr: "Veuve Noire",
        jobStage: "master",
        className: "Black Massacre",
        classNameFr: "Veuve Noire",
        fileName: "rose-black-massacre-master.webp"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "job1",
        className: "Valkyrie",
        classNameFr: "Valkyrie",
        fileName: "rose-valkyrie.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "job2",
        className: "Freyja",
        classNameFr: "Freyja",
        fileName: "rose-freyja.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "job3",
        className: "Minerva",
        classNameFr: "Minerve",
        fileName: "rose-minerva.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Minerva",
        pathNameFr: "Minerve",
        jobStage: "master",
        className: "Minerva",
        classNameFr: "Minerve",
        fileName: "rose-minerva-master.webp"
    }),

    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "job1",
        className: "Metal Heart",
        classNameFr: "Cœur d'acier",
        fileName: "rose-metal-heart.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "job2",
        className: "Optimus",
        classNameFr: "",
        fileName: "rose-optimus.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "job3",
        className: "Prime Operator",
        classNameFr: "Prime Opératrice",
        fileName: "rose-prime-operator.webp"
    }),
    createClassImage({
        characterId: "rose",
        character: "Rose",
        pathName: "Prime Operator",
        pathNameFr: "Prime Opératrice",
        jobStage: "master",
        className: "Prime Operator",
        classNameFr: "Prime Opératrice",
        fileName: "rose-prime-operator-master.webp"
    }),
    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "job1",
        className: "Lofty: Executor",
        classNameFr: "Exactor",
        fileName: "ain-lofty-executor.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "job2",
        className: "Arme Thaumaturgy",
        classNameFr: "Prodigium",
        fileName: "ain-arme-thaumaturgy.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "job3",
        className: "Richter",
        classNameFr: "Arbiter",
        fileName: "ain-richter.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Richter",
        pathNameFr: "Arbiter",
        jobStage: "master",
        className: "Richter",
        classNameFr: "Arbiter",
        fileName: "ain-richter-master.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "job1",
        className: "Lofty: Anpassen",
        classNameFr: "Aptare",
        fileName: "ain-lofty-anpassen.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "job2",
        className: "Erbluhen Emotion",
        classNameFr: "Vigere",
        fileName: "ain-erbluhen-emotion.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "job3",
        className: "Bluhen",
        classNameFr: "Florere",
        fileName: "ain-bluhen.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Bluhen",
        pathNameFr: "Florere",
        jobStage: "master",
        className: "Bluhen",
        classNameFr: "Florere",
        fileName: "ain-bluhen-master.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "job1",
        className: "Lofty: Wanderer",
        classNameFr: "Viator",
        fileName: "ain-lofty-wanderer.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "job2",
        className: "Apostasia",
        classNameFr: "Apostata",
        fileName: "ain-apostasia.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "job3",
        className: "Herrscher",
        classNameFr: "Regnator",
        fileName: "ain-herrscher.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Herrscher",
        pathNameFr: "Regnator",
        jobStage: "master",
        className: "Herrscher",
        classNameFr: "Regnator",
        fileName: "ain-herrscher-master.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "job1",
        className: "Lofty: Schreier",
        classNameFr: "Adoleo",
        fileName: "ain-lofty-schreier.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "job2",
        className: "Schatz Reprise",
        classNameFr: "Captura",
        fileName: "ain-schatz-reprise.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "job3",
        className: "Opferung",
        classNameFr: "Sacratus",
        fileName: "ain-opferung.webp"
    }),

    createClassImage({
        characterId: "ain",
        character: "Ain",
        pathName: "Opferung",
        pathNameFr: "Sacratus",
        jobStage: "master",
        className: "Opferung",
        classNameFr: "Sacratus",
        fileName: "ain-opferung-master.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "job1",
        className: "Sparky Child",
        classNameFr: "Bébé Étincelle",
        fileName: "laby-sparky-child.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "job2",
        className: "Rumble Pumn",
        classNameFr: "Bébé Cyclone",
        fileName: "laby-rumble-pumn.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "job3",
        className: "Eternity Winner",
        classNameFr: "Championne Éonienne",
        fileName: "laby-eternity-winner.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Eternity Winner",
        pathNameFr: "Championne Éonienne",
        jobStage: "master",
        className: "Eternity Winner",
        classNameFr: "Championne Éonienne",
        fileName: "laby-eternity-winner-master.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "job1",
        className: "Twinkle Child",
        classNameFr: "Bébé Paillette",
        fileName: "laby-twinkle-child.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "job2",
        className: "Shining Romantica",
        classNameFr: "Auralice",
        fileName: "laby-shining-romantica.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "job3",
        className: "Radiant Soul",
        classNameFr: "Lumièle",
        fileName: "laby-radiant-soul.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Radiant Soul",
        pathNameFr: "Lumièle",
        jobStage: "master",
        className: "Radiant Soul",
        classNameFr: "Lumièle",
        fileName: "laby-radiant-soul-master.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "job1",
        className: "Rusty Child",
        classNameFr: "Bébé obscur",
        fileName: "laby-rusty-child.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "job2",
        className: "Daydreamer",
        classNameFr: "Rêveuse diurne",
        fileName: "laby-daydreamer.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "job3",
        className: "Nisha Labyrinth",
        classNameFr: "Labyrinthe de Nisha",
        fileName: "laby-nisha-labyrinth.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Nisha Labyrinth",
        pathNameFr: "Labyrinthe de Nisha",
        jobStage: "master",
        className: "Nisha Labyrinth",
        classNameFr: "Labyrinthe de Nisha",
        fileName: "laby-nisha-labyrinth-master.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "job1",
        className: "Rough Child",
        classNameFr: "Morveuse",
        fileName: "laby-rough-child.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "job2",
        className: "Punky Poppet",
        classNameFr: "Filoute",
        fileName: "laby-punky-poppet.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "job3",
        className: "Twins Picaro",
        classNameFr: "Arlequine",
        fileName: "laby-twins-picaro.webp"
    }),

    createClassImage({
        characterId: "laby",
        character: "Laby",
        pathName: "Twins Picaro",
        pathNameFr: "Arlequine",
        jobStage: "master",
        className: "Twins Picaro",
        classNameFr: "Arlequine",
        fileName: "laby-twins-picaro-master.webp"
    }),
    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "job1",
        className: "Second Revenger",
        classNameFr: "Vengeur d'Âmes",
        fileName: "noah-second-revenger.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "job2",
        className: "Silent Shadow",
        classNameFr: "Ombre Silencieuse",
        fileName: "noah-silent-shadow.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "job3",
        className: "Liberator",
        classNameFr: "Libérator",
        fileName: "noah-liberator.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Liberator",
        pathNameFr: "Libérator",
        jobStage: "master",
        className: "Liberator",
        classNameFr: "Libérator",
        fileName: "noah-liberator-master.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "job1",
        className: "Second Selection",
        classNameFr: "Destinator",
        fileName: "noah-second-selection.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "job2",
        className: "Stellar Caster",
        classNameFr: "Lanceur d'Étoiles",
        fileName: "noah-stellar-caster.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "job3",
        className: "Celestia",
        classNameFr: "Céléstia",
        fileName: "noah-celestia.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Celestia",
        pathNameFr: "Céléstia",
        jobStage: "master",
        className: "Celestia",
        classNameFr: "Céléstia",
        fileName: "noah-celestia-master.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "job1",
        className: "Second Grief",
        classNameFr: "Lune Soucieuse",
        fileName: "noah-second-grief.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "job2",
        className: "Pale Pilgrim",
        classNameFr: "Pélerin Lunaire",
        fileName: "noah-pale-pilgrim.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "job3",
        className: "Nyx Pieta",
        classNameFr: "Nyx Pieta",
        fileName: "noah-nyx-pieta.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Nyx Pieta",
        pathNameFr: "Nyx Pieta",
        jobStage: "master",
        className: "Nyx Pieta",
        classNameFr: "Nyx Pieta",
        fileName: "noah-nyx-pieta-master.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "job1",
        className: "Second Dejection",
        classNameFr: "Errelune",
        fileName: "noah-second-dejection.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "job2",
        className: "Hazy Delusion",
        classNameFr: "Incandesonge",
        fileName: "noah-hazy-delusion.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "job3",
        className: "Morpheus",
        classNameFr: "Morphée",
        fileName: "noah-morpheus.webp"
    }),

    createClassImage({
        characterId: "noah",
        character: "Noah",
        pathName: "Morpheus",
        pathNameFr: "Morphée",
        jobStage: "master",
        className: "Morpheus",
        classNameFr: "Morphée",
        fileName: "noah-morpheus-master.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "job1",
        className: "Poten Finder",
        classNameFr: "Minéralista",
        fileName: "lithia-poten-finder.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "job2",
        className: "Mighty Miner",
        classNameFr: "Cristalina",
        fileName: "lithia-mighty-miner.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "job3",
        className: "Gembliss",
        classNameFr: "Eméraldia",
        fileName: "lithia-gembliss.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Gembliss",
        pathNameFr: "Eméraldia",
        jobStage: "master",
        className: "Gembliss",
        classNameFr: "Eméraldia",
        fileName: "lithia-gembliss-master.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "job1",
        className: "Fortune Finder",
        classNameFr: "Jadoyante",
        fileName: "lithia-fortune-finder.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "job2",
        className: "Greedy Wonder",
        classNameFr: "Adamantine",
        fileName: "lithia-greedy-wonder.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "job3",
        className: "Avarice",
        classNameFr: "Avaricia",
        fileName: "lithia-avarice.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Avarice",
        pathNameFr: "Avaricia",
        jobStage: "master",
        className: "Avarice",
        classNameFr: "Avaricia",
        fileName: "lithia-avarice-master.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "Achlys",
        jobStage: "job1",
        className: "Path Finder",
        classNameFr: "Détraqueuse",
        fileName: "lithia-path-finder.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "Achlys",
        jobStage: "job2",
        className: "Rima Clavis",
        classNameFr: "Rima Clavis",
        fileName: "lithia-rima-clavis.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "Achlys",
        jobStage: "job3",
        className: "Achlys",
        classNameFr: "Achlys",
        fileName: "lithia-achlys.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Achlys",
        pathNameFr: "Achlys",
        jobStage: "master",
        className: "Achlys",
        classNameFr: "Achlys",
        fileName: "lithia-achlys-master.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "Delinquenta",
        jobStage: "job1",
        className: "Trick Finder",
        classNameFr: "Cupido Girl",
        fileName: "lithia-trick-finder.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "Delinquenta",
        jobStage: "job2",
        className: "Cynical Sneer",
        classNameFr: "Cynical Girl",
        fileName: "lithia-cynical-sneer.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "Delinquenta",
        jobStage: "job3",
        className: "Mischief",
        classNameFr: "Delinquenta",
        fileName: "lithia-mischief.webp"
    }),

    createClassImage({
        characterId: "lithia",
        character: "Lithia",
        pathName: "Mischief",
        pathNameFr: "Delinquenta",
        jobStage: "master",
        className: "Mischief",
        classNameFr: "Delinquenta",
        fileName: "lithia-mischief-master.webp"
    }),
];