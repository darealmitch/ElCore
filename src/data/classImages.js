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
        alt: `${character} en spécialisation ${classNameFr}`,
        dimensions: ""
    };
}

export const classImages = [
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sword Knight",
        pathNameFr: "Chevalier Royal",
        jobStage: "job1",
        className: "Sword Knight",
        classNameFr: "Chevalier de l'épée",
        fileName: "elsword-sword-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sword Knight",
        pathNameFr: "Chevalier Royal",
        jobStage: "job2",
        className: "Lord Knight",
        classNameFr: "Haut Chevalier",
        fileName: "elsword-lord-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sword Knight",
        pathNameFr: "Chevalier Royal",
        jobStage: "job3",
        className: "Knight Emperor",
        classNameFr: "Chevalier Royal",
        fileName: "elsword-knight-emperor.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sword Knight",
        pathNameFr: "Chevalier Royal",
        jobStage: "master",
        className: "Knight Emperor",
        classNameFr: "Chevalier Royal",
        fileName: "elsword-knight-emperor-master.png"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Magic Knight",
        pathNameFr: "Maître des runes",
        jobStage: "job1",
        className: "Magic Knight",
        classNameFr: "Chevalier Mage",
        fileName: "elsword-magic-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Magic Knight",
        pathNameFr: "Maître des runes",
        jobStage: "job2",
        className: "Rune Knight",
        classNameFr: "Chevalier Runique",
        fileName: "elsword-rune-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Magic Knight",
        pathNameFr: "Maître des runes",
        jobStage: "job3",
        className: "Rune Master",
        classNameFr: "Maître des runes",
        fileName: "elsword-rune-master.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Magic Knight",
        pathNameFr: "Maître des runes",
        jobStage: "master",
        className: "Rune Master",
        classNameFr: "Maître des runes",
        fileName: "elsword-rune-master-master.png"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sheath Knight",
        pathNameFr: "Immortel",
        jobStage: "job1",
        className: "Sheath Knight",
        classNameFr: "Chevalier de Cornwell",
        fileName: "elsword-sheath-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sheath Knight",
        pathNameFr: "Immortel",
        jobStage: "job2",
        className: "Infinity Sword",
        classNameFr: "Invocateur d'épées",
        fileName: "elsword-infinity-sword.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sheath Knight",
        pathNameFr: "Immortel",
        jobStage: "job3",
        className: "Immortal",
        classNameFr: "Immortel",
        fileName: "elsword-immortal.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Sheath Knight",
        pathNameFr: "Immortel",
        jobStage: "master",
        className: "Immortal",
        classNameFr: "Immortel",
        fileName: "elsword-immortal-master.png"
    }),

    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Root Knight",
        pathNameFr: "Séphiroth",
        jobStage: "job1",
        className: "Root Knight",
        classNameFr: "Bénitier",
        fileName: "elsword-root-knight.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Root Knight",
        pathNameFr: "Séphiroth",
        jobStage: "job2",
        className: "Sacred Templar",
        classNameFr: "Templier",
        fileName: "elsword-sacred-templar.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Root Knight",
        pathNameFr: "Séphiroth",
        jobStage: "job3",
        className: "Genesis",
        classNameFr: "Séphiroth",
        fileName: "elsword-genesis.png"
    }),
    createClassImage({
        characterId: "elsword",
        character: "Elsword",
        pathName: "Root Knight",
        pathNameFr: "Séphiroth",
        jobStage: "master",
        className: "Genesis",
        classNameFr: "Séphiroth",
        fileName: "elsword-genesis-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "High Magician",
        pathNameFr: "Étheriste",
        jobStage: "job1",
        className: "High Magician",
        classNameFr: "Archimage",
        fileName: "aisha-high-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "High Magician",
        pathNameFr: "Étheriste",
        jobStage: "job2",
        className: "Elemental Master",
        classNameFr: "Maîtresse des éléments",
        fileName: "aisha-elemental-master.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "High Magician",
        pathNameFr: "Étheriste",
        jobStage: "job3",
        className: "Aether Sage",
        classNameFr: "Étheriste",
        fileName: "aisha-aether-sage.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "High Magician",
        pathNameFr: "Étheriste",
        jobStage: "master",
        className: "Aether Sage",
        classNameFr: "Étheriste",
        fileName: "aisha-aether-sage-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Dark Magician",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job1",
        className: "Dark Magician",
        classNameFr: "Magicienne de l'occulte",
        fileName: "aisha-dark-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Dark Magician",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job2",
        className: "Void Princess",
        classNameFr: "Princesse des âmes",
        fileName: "aisha-void-princess.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Dark Magician",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "job3",
        className: "Oz Sorcerer",
        classNameFr: "Magicienne d'Oz",
        fileName: "aisha-oz-sorcerer.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Dark Magician",
        pathNameFr: "Magicienne d'Oz",
        jobStage: "master",
        className: "Oz Sorcerer",
        classNameFr: "Magicienne d'Oz",
        fileName: "aisha-oz-sorcerer-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Battle Magician",
        pathNameFr: "Métamorphia",
        jobStage: "job1",
        className: "Battle Magician",
        classNameFr: "Mage de bataille",
        fileName: "aisha-battle-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Battle Magician",
        pathNameFr: "Métamorphia",
        jobStage: "job2",
        className: "Dimension Witch",
        classNameFr: "Sorcière dimensionnelle",
        fileName: "aisha-dimension-witch.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Battle Magician",
        pathNameFr: "Métamorphia",
        jobStage: "job3",
        className: "Metamorphy",
        classNameFr: "Métamorphia",
        fileName: "aisha-metamorphy.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Battle Magician",
        pathNameFr: "Métamorphia",
        jobStage: "master",
        className: "Metamorphy",
        classNameFr: "Métamorphia",
        fileName: "aisha-metamorphy-master.png"
    }),

    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Wiz Magician",
        pathNameFr: "Lord Azoth",
        jobStage: "job1",
        className: "Wiz Magician",
        classNameFr: "Wiz Magician",
        fileName: "aisha-wiz-magician.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Wiz Magician",
        pathNameFr: "Lord Azoth",
        jobStage: "job2",
        className: "Mystic Alchemist",
        classNameFr: "Mystic Alchemist",
        fileName: "aisha-mystic-alchemist.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Wiz Magician",
        pathNameFr: "Lord Azoth",
        jobStage: "job3",
        className: "Lord Azoth",
        classNameFr: "Lord Azoth",
        fileName: "aisha-lord-azoth.png"
    }),
    createClassImage({
        characterId: "aisha",
        character: "Aisha",
        pathName: "Wiz Magician",
        pathNameFr: "Lord Azoth",
        jobStage: "master",
        className: "Lord Azoth",
        classNameFr: "Lord Azoth",
        fileName: "aisha-lord-azoth-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Combat Ranger",
        pathNameFr: "Anemos",
        jobStage: "job1",
        className: "Combat Ranger",
        classNameFr: "Guerrière archère",
        fileName: "rena-combat-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Combat Ranger",
        pathNameFr: "Anemos",
        jobStage: "job2",
        className: "Wind Sneaker",
        classNameFr: "Voyageuse du vent",
        fileName: "rena-wind-sneaker.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Combat Ranger",
        pathNameFr: "Anemos",
        jobStage: "job3",
        className: "Anemos",
        classNameFr: "Anemos",
        fileName: "rena-anemos.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Combat Ranger",
        pathNameFr: "Anemos",
        jobStage: "master",
        className: "Anemos",
        classNameFr: "Anemos",
        fileName: "rena-anemos-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Sniping Ranger",
        pathNameFr: "Aube",
        jobStage: "job1",
        className: "Sniping Ranger",
        classNameFr: "Chasseresse",
        fileName: "rena-sniping-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Sniping Ranger",
        pathNameFr: "Aube",
        jobStage: "job2",
        className: "Grand Archer",
        classNameFr: "Maîtresse-archère",
        fileName: "rena-grand-archer.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Sniping Ranger",
        pathNameFr: "Aube",
        jobStage: "job3",
        className: "Daybreaker",
        classNameFr: "Aube",
        fileName: "rena-daybreaker.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Sniping Ranger",
        pathNameFr: "Aube",
        jobStage: "master",
        className: "Daybreaker",
        classNameFr: "Aube",
        fileName: "rena-daybreaker-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Trapping Ranger",
        pathNameFr: "Crépuscule",
        jobStage: "job1",
        className: "Trapping Ranger",
        classNameFr: "Guerrière d'Erendil",
        fileName: "rena-trapping-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Trapping Ranger",
        pathNameFr: "Crépuscule",
        jobStage: "job2",
        className: "Night Watcher",
        classNameFr: "Ombre sylvestre",
        fileName: "rena-night-watcher.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Trapping Ranger",
        pathNameFr: "Crépuscule",
        jobStage: "job3",
        className: "Twilight",
        classNameFr: "Crépuscule",
        fileName: "rena-twilight.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Trapping Ranger",
        pathNameFr: "Crépuscule",
        jobStage: "master",
        className: "Twilight",
        classNameFr: "Crépuscule",
        fileName: "rena-twilight-master.png"
    }),

    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Poetic Ranger",
        pathNameFr: "Prophetess",
        jobStage: "job1",
        className: "Poetic Ranger",
        classNameFr: "Poetic Ranger",
        fileName: "rena-poetic-ranger.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Poetic Ranger",
        pathNameFr: "Prophetess",
        jobStage: "job2",
        className: "Tale Spinner",
        classNameFr: "Tale Spinner",
        fileName: "rena-tale-spinner.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Poetic Ranger",
        pathNameFr: "Prophetess",
        jobStage: "job3",
        className: "Prophetess",
        classNameFr: "Prophetess",
        fileName: "rena-prophetess.png"
    }),
    createClassImage({
        characterId: "rena",
        character: "Rena",
        pathName: "Poetic Ranger",
        pathNameFr: "Prophetess",
        jobStage: "master",
        className: "Prophetess",
        classNameFr: "Prophetess",
        fileName: "rena-prophetess-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Sword Taker",
        pathNameFr: "Lame furieuse",
        jobStage: "job1",
        className: "Sword Taker",
        classNameFr: "Porteur d'épée",
        fileName: "raven-sword-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Sword Taker",
        pathNameFr: "Lame furieuse",
        jobStage: "job2",
        className: "Blade Master",
        classNameFr: "Maître de l'épée",
        fileName: "raven-blade-master.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Sword Taker",
        pathNameFr: "Lame furieuse",
        jobStage: "job3",
        className: "Furious Blade",
        classNameFr: "Lame furieuse",
        fileName: "raven-furious-blade.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Sword Taker",
        pathNameFr: "Lame furieuse",
        jobStage: "master",
        className: "Furious Blade",
        classNameFr: "Lame furieuse",
        fileName: "raven-furious-blade-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Over Taker",
        pathNameFr: "Cœur enragé",
        jobStage: "job1",
        className: "Over Taker",
        classNameFr: "Porteur de lame",
        fileName: "raven-over-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Over Taker",
        pathNameFr: "Cœur enragé",
        jobStage: "job2",
        className: "Reckless Fist",
        classNameFr: "Poing de feu",
        fileName: "raven-reckless-fist.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Over Taker",
        pathNameFr: "Cœur enragé",
        jobStage: "job3",
        className: "Rage Hearts",
        classNameFr: "Cœur enragé",
        fileName: "raven-rage-hearts.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Over Taker",
        pathNameFr: "Cœur enragé",
        jobStage: "master",
        className: "Rage Hearts",
        classNameFr: "Cœur enragé",
        fileName: "raven-rage-hearts-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Weapon Taker",
        pathNameFr: "Nova Imperator",
        jobStage: "job1",
        className: "Weapon Taker",
        classNameFr: "Maître de la destinée",
        fileName: "raven-weapon-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Weapon Taker",
        pathNameFr: "Nova Imperator",
        jobStage: "job2",
        className: "Veteran Commander",
        classNameFr: "Vétéran Commando",
        fileName: "raven-veteran-commander.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Weapon Taker",
        pathNameFr: "Nova Imperator",
        jobStage: "job3",
        className: "Nova Imperator",
        classNameFr: "Nova Imperator",
        fileName: "raven-nova-imperator.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Weapon Taker",
        pathNameFr: "Nova Imperator",
        jobStage: "master",
        className: "Nova Imperator",
        classNameFr: "Nova Imperator",
        fileName: "raven-nova-imperator-master.png"
    }),

    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Venom Taker",
        pathNameFr: "Revenant",
        jobStage: "job1",
        className: "Venom Taker",
        classNameFr: "Venom Taker",
        fileName: "raven-venom-taker.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Venom Taker",
        pathNameFr: "Revenant",
        jobStage: "job2",
        className: "Mutant Reaper",
        classNameFr: "Mutant Reaper",
        fileName: "raven-mutant-reaper.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Venom Taker",
        pathNameFr: "Revenant",
        jobStage: "job3",
        className: "Revenant",
        classNameFr: "Revenant",
        fileName: "raven-revenant.png"
    }),
    createClassImage({
        characterId: "raven",
        character: "Raven",
        pathName: "Venom Taker",
        pathNameFr: "Revenant",
        jobStage: "master",
        className: "Revenant",
        classNameFr: "Revenant",
        fileName: "raven-revenant-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Exotic",
        pathNameFr: "Nasod ultime",
        jobStage: "job1",
        className: "Code: Exotic",
        classNameFr: "Vengeresse nasod",
        fileName: "eve-code-exotic.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Exotic",
        pathNameFr: "Nasod ultime",
        jobStage: "job2",
        className: "Code: Nemesis",
        classNameFr: "Némésis nasod",
        fileName: "eve-code-nemesis.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Exotic",
        pathNameFr: "Nasod ultime",
        jobStage: "job3",
        className: "Code: Ultimate",
        classNameFr: "Nasod ultime",
        fileName: "eve-code-ultimate.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Exotic",
        pathNameFr: "Nasod ultime",
        jobStage: "master",
        className: "Code: Ultimate",
        classNameFr: "Nasod ultime",
        fileName: "eve-code-ultimate-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Architecture",
        pathNameFr: "Nasod essentielle",
        jobStage: "job1",
        className: "Code: Architecture",
        classNameFr: "Espérance nasod",
        fileName: "eve-code-architecture.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Architecture",
        pathNameFr: "Nasod essentielle",
        jobStage: "job2",
        className: "Code: Empress",
        classNameFr: "Impératrice Nasod",
        fileName: "eve-code-empress.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Architecture",
        pathNameFr: "Nasod essentielle",
        jobStage: "job3",
        className: "Code: Esencia",
        classNameFr: "Nasod essentielle",
        fileName: "eve-code-esencia.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Architecture",
        pathNameFr: "Nasod essentielle",
        jobStage: "master",
        className: "Code: Esencia",
        classNameFr: "Nasod essentielle",
        fileName: "eve-code-esencia-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Electra",
        pathNameFr: "Code: Sariel",
        jobStage: "job1",
        className: "Code: Electra",
        classNameFr: "Code: Electra",
        fileName: "eve-code-electra.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Electra",
        pathNameFr: "Code: Sariel",
        jobStage: "job2",
        className: "Code: Battle Seraph",
        classNameFr: "Code: Battle Seraph",
        fileName: "eve-code-battle-seraph.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Electra",
        pathNameFr: "Code: Sariel",
        jobStage: "job3",
        className: "Code: Sariel",
        classNameFr: "Code: Sariel",
        fileName: "eve-code-sariel.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Electra",
        pathNameFr: "Code: Sariel",
        jobStage: "master",
        className: "Code: Sariel",
        classNameFr: "Code: Sariel",
        fileName: "eve-code-sariel-master.png"
    }),

    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Unknown",
        pathNameFr: "Code: Antithese",
        jobStage: "job1",
        className: "Code: Unknown",
        classNameFr: "Code: Unknown",
        fileName: "eve-code-unknown.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Unknown",
        pathNameFr: "Code: Antithese",
        jobStage: "job2",
        className: "Code: Failess",
        classNameFr: "Code: Failess",
        fileName: "eve-code-failess.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Unknown",
        pathNameFr: "Code: Antithese",
        jobStage: "job3",
        className: "Code: Antithese",
        classNameFr: "Code: Antithese",
        fileName: "eve-code-antithese.png"
    }),
    createClassImage({
        characterId: "eve",
        character: "Eve",
        pathName: "Code: Unknown",
        pathNameFr: "Code: Antithese",
        jobStage: "master",
        className: "Code: Antithese",
        classNameFr: "Code: Antithese",
        fileName: "eve-code-antithese-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fury Guardian",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job1",
        className: "Fury Guardian",
        classNameFr: "Gardien colérique",
        fileName: "chung-fury-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fury Guardian",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job2",
        className: "Iron Paladin",
        classNameFr: "Paladin adamantium",
        fileName: "chung-iron-paladin.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fury Guardian",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "job3",
        className: "Comet Crusader",
        classNameFr: "Chevalier croisé cométaire",
        fileName: "chung-comet-crusader.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Fury Guardian",
        pathNameFr: "Chevalier croisé cométaire",
        jobStage: "master",
        className: "Comet Crusader",
        classNameFr: "Chevalier croisé cométaire",
        fileName: "chung-comet-crusader-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shooting Guardian",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job1",
        className: "Shooting Guardian",
        classNameFr: "Gardien tireur",
        fileName: "chung-shooting-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shooting Guardian",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job2",
        className: "Deadly Chaser",
        classNameFr: "Flingeur",
        fileName: "chung-deadly-chaser.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shooting Guardian",
        pathNameFr: "Fantôme Fatal",
        jobStage: "job3",
        className: "Fatal Phantom",
        classNameFr: "Fantôme Fatal",
        fileName: "chung-fatal-phantom.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shooting Guardian",
        pathNameFr: "Fantôme Fatal",
        jobStage: "master",
        className: "Fatal Phantom",
        classNameFr: "Fantôme Fatal",
        fileName: "chung-fatal-phantom-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shelling Guardian",
        pathNameFr: "Centurion",
        jobStage: "job1",
        className: "Shelling Guardian",
        classNameFr: "Gardien artilleur",
        fileName: "chung-shelling-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shelling Guardian",
        pathNameFr: "Centurion",
        jobStage: "job2",
        className: "Tactical Trooper",
        classNameFr: "Canonnier de commando",
        fileName: "chung-tactical-trooper.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shelling Guardian",
        pathNameFr: "Centurion",
        jobStage: "job3",
        className: "Centurion",
        classNameFr: "Centurion",
        fileName: "chung-centurion.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Shelling Guardian",
        pathNameFr: "Centurion",
        jobStage: "master",
        className: "Centurion",
        classNameFr: "Centurion",
        fileName: "chung-centurion-master.png"
    }),

    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Core Guardian",
        pathNameFr: "Dius Aer",
        jobStage: "job1",
        className: "Core Guardian",
        classNameFr: "Core Guardian",
        fileName: "chung-core-guardian.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Core Guardian",
        pathNameFr: "Dius Aer",
        jobStage: "job2",
        className: "Divine Phanes",
        classNameFr: "Divine Phanes",
        fileName: "chung-divine-phanes.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Core Guardian",
        pathNameFr: "Dius Aer",
        jobStage: "job3",
        className: "Dius Aer",
        classNameFr: "Dius Aer",
        fileName: "chung-dius-aer.png"
    }),
    createClassImage({
        characterId: "chung",
        character: "Chung",
        pathName: "Core Guardian",
        pathNameFr: "Dius Aer",
        jobStage: "master",
        className: "Dius Aer",
        classNameFr: "Dius Aer",
        fileName: "chung-dius-aer-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Hsien",
        pathNameFr: "Apsara",
        jobStage: "job1",
        className: "Little Hsien",
        classNameFr: "Petite Hsien",
        fileName: "ara-little-hsien.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Hsien",
        pathNameFr: "Apsara",
        jobStage: "job2",
        className: "Sakra Devanam",
        classNameFr: "Sakra Devanam",
        fileName: "ara-sakra-devanam.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Hsien",
        pathNameFr: "Apsara",
        jobStage: "job3",
        className: "Apsara",
        classNameFr: "Apsara",
        fileName: "ara-apsara.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Hsien",
        pathNameFr: "Apsara",
        jobStage: "master",
        className: "Apsara",
        classNameFr: "Apsara",
        fileName: "ara-apsara-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Devil",
        pathNameFr: "Devi",
        jobStage: "job1",
        className: "Little Devil",
        classNameFr: "Petit Devil",
        fileName: "ara-little-devil.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Devil",
        pathNameFr: "Devi",
        jobStage: "job2",
        className: "Yama Raja",
        classNameFr: "Yama Raja",
        fileName: "ara-yama-raja.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Devil",
        pathNameFr: "Devi",
        jobStage: "job3",
        className: "Devi",
        classNameFr: "Devi",
        fileName: "ara-devi.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Devil",
        pathNameFr: "Devi",
        jobStage: "master",
        className: "Devi",
        classNameFr: "Devi",
        fileName: "ara-devi-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Specter",
        pathNameFr: "Shakti",
        jobStage: "job1",
        className: "Little Specter",
        classNameFr: "Little Specter",
        fileName: "ara-little-specter.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Specter",
        pathNameFr: "Shakti",
        jobStage: "job2",
        className: "Asura",
        classNameFr: "Asura",
        fileName: "ara-asura.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Specter",
        pathNameFr: "Shakti",
        jobStage: "job3",
        className: "Shakti",
        classNameFr: "Shakti",
        fileName: "ara-shakti.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Specter",
        pathNameFr: "Shakti",
        jobStage: "master",
        className: "Shakti",
        classNameFr: "Shakti",
        fileName: "ara-shakti-master.png"
    }),

    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Helper",
        pathNameFr: "Surya",
        jobStage: "job1",
        className: "Little Helper",
        classNameFr: "Little Helper",
        fileName: "ara-little-helper.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Helper",
        pathNameFr: "Surya",
        jobStage: "job2",
        className: "Marici",
        classNameFr: "Marici",
        fileName: "ara-marici.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Helper",
        pathNameFr: "Surya",
        jobStage: "job3",
        className: "Surya",
        classNameFr: "Surya",
        fileName: "ara-surya.png"
    }),
    createClassImage({
        characterId: "ara",
        character: "Ara",
        pathName: "Little Helper",
        pathNameFr: "Surya",
        jobStage: "master",
        className: "Surya",
        classNameFr: "Surya",
        fileName: "ara-surya-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Saber Knight",
        pathNameFr: "Épée de l'empire",
        jobStage: "job1",
        className: "Saber Knight",
        classNameFr: "Maître-escrimeur",
        fileName: "elesis-saber-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Saber Knight",
        pathNameFr: "Épée de l'empire",
        jobStage: "job2",
        className: "Grand Master",
        classNameFr: "Grand Maître",
        fileName: "elesis-grand-master.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Saber Knight",
        pathNameFr: "Épée de l'empire",
        jobStage: "job3",
        className: "Empire Sword",
        classNameFr: "Épée de l'empire",
        fileName: "elesis-empire-sword.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Saber Knight",
        pathNameFr: "Épée de l'empire",
        jobStage: "master",
        className: "Empire Sword",
        classNameFr: "Épée de l'empire",
        fileName: "elesis-empire-sword-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Pyro Knight",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job1",
        className: "Pyro Knight",
        classNameFr: "Chevalier Pyromane",
        fileName: "elesis-pyro-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Pyro Knight",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job2",
        className: "Blazing Heart",
        classNameFr: "Cœur de Flammes",
        fileName: "elesis-blazing-heart.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Pyro Knight",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "job3",
        className: "Flame Lord",
        classNameFr: "Maîtresse des flammes",
        fileName: "elesis-flame-lord.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Pyro Knight",
        pathNameFr: "Maîtresse des flammes",
        jobStage: "master",
        className: "Flame Lord",
        classNameFr: "Maîtresse des flammes",
        fileName: "elesis-flame-lord-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Dark Knight",
        pathNameFr: "Reine sanglante",
        jobStage: "job1",
        className: "Dark Knight",
        classNameFr: "Chevalier ténébreux",
        fileName: "elesis-dark-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Dark Knight",
        pathNameFr: "Reine sanglante",
        jobStage: "job2",
        className: "Crimson Avenger",
        classNameFr: "Vengeresse pourpre",
        fileName: "elesis-crimson-avenger.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Dark Knight",
        pathNameFr: "Reine sanglante",
        jobStage: "job3",
        className: "Bloody Queen",
        classNameFr: "Reine sanglante",
        fileName: "elesis-bloody-queen.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Dark Knight",
        pathNameFr: "Reine sanglante",
        jobStage: "master",
        className: "Bloody Queen",
        classNameFr: "Reine sanglante",
        fileName: "elesis-bloody-queen-master.png"
    }),

    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Soar Knight",
        pathNameFr: "Adrestia",
        jobStage: "job1",
        className: "Soar Knight",
        classNameFr: "Soar Knight",
        fileName: "elesis-soar-knight.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Soar Knight",
        pathNameFr: "Adrestia",
        jobStage: "job2",
        className: "Patrona",
        classNameFr: "Patrona",
        fileName: "elesis-patrona.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Soar Knight",
        pathNameFr: "Adrestia",
        jobStage: "job3",
        className: "Adrestia",
        classNameFr: "Adrestia",
        fileName: "elesis-adrestia.png"
    }),
    createClassImage({
        characterId: "elesis",
        character: "Elesis",
        pathName: "Soar Knight",
        pathNameFr: "Adrestia",
        jobStage: "master",
        className: "Adrestia",
        classNameFr: "Adrestia",
        fileName: "elesis-adrestia-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Psychic Tracer",
        pathNameFr: "Calamité",
        jobStage: "job1",
        className: "Psychic Tracer",
        classNameFr: "Traqueur psychique",
        fileName: "add-psychic-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Psychic Tracer",
        pathNameFr: "Calamité",
        jobStage: "job2",
        className: "Lunatic Psyker",
        classNameFr: "Psychopathe",
        fileName: "add-lunatic-psyker.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Psychic Tracer",
        pathNameFr: "Calamité",
        jobStage: "job3",
        className: "Doom Bringer",
        classNameFr: "Calamité",
        fileName: "add-doom-bringer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Psychic Tracer",
        pathNameFr: "Calamité",
        jobStage: "master",
        className: "Doom Bringer",
        classNameFr: "Calamité",
        fileName: "add-doom-bringer-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Arc Tracer",
        pathNameFr: "Dominateur",
        jobStage: "job1",
        className: "Arc Tracer",
        classNameFr: "Maître de l'IA",
        fileName: "add-arc-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Arc Tracer",
        pathNameFr: "Dominateur",
        jobStage: "job2",
        className: "Mastermind",
        classNameFr: "Machiavel",
        fileName: "add-mastermind.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Arc Tracer",
        pathNameFr: "Dominateur",
        jobStage: "job3",
        className: "Dominator",
        classNameFr: "Dominateur",
        fileName: "add-dominator.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Arc Tracer",
        pathNameFr: "Dominateur",
        jobStage: "master",
        className: "Dominator",
        classNameFr: "Dominateur",
        fileName: "add-dominator-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Time Tracer",
        pathNameFr: "Paradoxe",
        jobStage: "job1",
        className: "Time Tracer",
        classNameFr: "Voyageur Temporel",
        fileName: "add-time-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Time Tracer",
        pathNameFr: "Paradoxe",
        jobStage: "job2",
        className: "Diabolic Esper",
        classNameFr: "Seigneur du Temps",
        fileName: "add-diabolic-esper.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Time Tracer",
        pathNameFr: "Paradoxe",
        jobStage: "job3",
        className: "Mad Paradox",
        classNameFr: "Paradoxe",
        fileName: "add-mad-paradox.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Time Tracer",
        pathNameFr: "Paradoxe",
        jobStage: "master",
        className: "Mad Paradox",
        classNameFr: "Paradoxe",
        fileName: "add-mad-paradox-master.png"
    }),

    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Affect Tracer",
        pathNameFr: "Overmind",
        jobStage: "job1",
        className: "Affect Tracer",
        classNameFr: "Affect Tracer",
        fileName: "add-affect-tracer.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Affect Tracer",
        pathNameFr: "Overmind",
        jobStage: "job2",
        className: "Dissembler",
        classNameFr: "Dissembler",
        fileName: "add-dissembler.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Affect Tracer",
        pathNameFr: "Overmind",
        jobStage: "job3",
        className: "Overmind",
        classNameFr: "Overmind",
        fileName: "add-overmind.png"
    }),
    createClassImage({
        characterId: "add",
        character: "Add",
        pathName: "Affect Tracer",
        pathNameFr: "Overmind",
        jobStage: "master",
        className: "Overmind",
        classNameFr: "Overmind",
        fileName: "add-overmind-master.png"
    })
];