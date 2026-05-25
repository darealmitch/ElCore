export const characterMechanics = [
    {
        characterId: "elsword",
        title: "Voie de l'épée",
        subtitle: "Vitalité et destruction",
        text:
            "En jouant Elsword, une jauge supplémentaire apparaît sous celle des PM : la Voie de l'épée. Cette mécanique propre au personnage représente son équilibre entre deux styles de combat, la vitalité et la destruction. Elle permet d'activer l'une de ces deux auras pendant une période limitée afin d'obtenir des bonus selon les attaques utilisées.",
        note:
            "Le système est contre-intuitif : les attaques de vitalité consomment la vitalité et font monter la destruction, tandis que les attaques de destruction consomment la destruction et font monter la vitalité. Seules les attaques qui consomment la jauge profitent donc des bonus de leur aura.",
        auras: [
            {
                id: "vitality",
                title: "Aura de vitalité",
                color: "vitality",
                description:
                    "Quand la jauge devient complètement bleue en utilisant des attaques de destruction, l'aura de vitalité s'active sous la forme d'une aura bleu azur.",
                bonuses: [
                    "Augmente la vitesse de déplacement, la rapidité et la capacité de saut.",
                    "Les compétences de vitalité consomment 30 % de PM en moins.",
                    "Les compétences spéciales actives coûtent moins cher : 100 PM deviennent 70 PM, 200 PM deviennent 140 PM, 250 PM deviennent 175 PM et 300 PM deviennent 210 PM.",
                    "Toutes les attaques de vitalité gagnent 200 % de PM supplémentaires en cas de touche, ou 150 % en JcJ.",
                ],
            },
            {
                id: "destruction",
                title: "Aura de destruction",
                color: "destruction",
                description: "Quand la jauge devient complètement rouge en utilisant des attaques de vitalité, l'aura de destruction s'active sous la forme d'une aura rouge.",
                bonuses: ["Les compétences actives et spéciales actives de destruction infligent 50 % de dégâts supplémentaires.",
                    "Les combos de destruction infligent 100 % de dégâts supplémentaires, cumulables avec les autres modificateurs de dégâts.",
                ],
            },
        ],
    },
]