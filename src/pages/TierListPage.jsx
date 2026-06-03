import { useMemo, useState } from "react";
import { tierList } from "../data/tierList";
import { characterThemes } from "../data/characterThemes";
import { scrollToSectionAfterRender } from "../utils/scrollToSection";

const modes = [
    { id: "pve", label: "PvE" },
    { id: "raid", label: "Raid" },
    { id: "debutant", label: "Débutant" },
    { id: "solo", label: "Solo" },
    { id: "support", label: "Support" },
];

function TierListPage() {
    const [activeMode, setActiveMode] = useState("pve");

    const updateMode = (modeId) => {
        setActiveMode(modeId);
        scrollToSectionAfterRender("tier-list-results");
    };

    const currentTierList = useMemo(() => tierList.find((list) => list.id === activeMode), [activeMode]);

    return (
        <main className="page">
            <section className="page-hero">
                <span>Classement</span>
                <h1>Classement des classes</h1>
                <p>
                    Compare les classes selon les modes de jeu. Ce classement est indicatif et dépend du patch,
                    du serveur, de l’équipement, de l’ERP et de la maîtrise du joueur.
                </p>
            </section>

            <section className="filter-bar">
                {modes.map((mode) => (
                    <button key={mode.id} className={activeMode === mode.id ? "filter-button active" : "filter-button"} onClick={() => updateMode(mode.id)}>
                        {mode.label}
                    </button>
                ))}
            </section>

            {currentTierList && (
                <section className="tier-list-wrapper" id="tier-list-results">
                    <div className="detail-card wide">
                        <h2>{currentTierList.title}</h2>
                        <p>{currentTierList.description}</p>
                        {currentTierList.warning && <p className="lore-section-note">{currentTierList.warning}</p>}
                    </div>

                    {currentTierList.tiers.map((tier) => (
                        <div className="tier-row" key={tier.rank}>
                            <div className="tier-rank">{tier.rank}</div>

                            <div className="tier-entries">
                                {tier.entries.map((entry) => {
                                    const theme = characterThemes[entry.characterId];

                                    return (
                                        <article className="tier-entry-card" key={`${entry.characterId}-${entry.classNameInternational}`} style={{ borderColor: theme?.primary, boxShadow: `0 0 20px ${theme?.glow}` }}>
                                            {entry.chibiImage && <img className="tier-entry-chibi" src={entry.chibiImage} alt={`${entry.classNameFr} chibi`} loading="lazy" />}
                                            <span style={{ backgroundColor: theme?.glow, color: theme?.primary }}>{entry.role}</span>
                                            <h2 style={{ color: theme?.primary }}>{entry.classNameFr}</h2>
                                            <strong>{entry.characterName}</strong>
                                            <small>{entry.classNameInternational}</small>
                                            <p>{entry.reason}</p>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </main>
    );
}

export default TierListPage;