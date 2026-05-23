import { useMemo, useState } from "react";
import { tierList } from "../data/tierList";
import { characterThemes } from "../data/characterThemes";

const modes = ["PvE", "Raid", "Débutant"];

function TierListPage() {
    const [activeMode, setActiveMode] = useState("PvE");

    const currentTierList = useMemo(
        () => tierList.find((list) => list.mode === activeMode),
        [activeMode]
    );

    return (
        <main className="page">
            <section className="page-hero">
                <span>Tier List</span>
                <h1>Classement des classes</h1>
                <p>
                    Compare les classes selon les modes de jeu. Cette tier list utilise
                    uniquement les données déjà ajoutées dans ElCore.
                </p>
            </section>

            <section className="filter-bar">
                {modes.map((mode) => (
                    <button
                        key={mode}
                        className={activeMode === mode ? "filter-button active" : "filter-button"}
                        onClick={() => setActiveMode(mode)}
                    >
                        {mode}
                    </button>
                ))}
            </section>

            <section className="tier-list-wrapper">
                {currentTierList?.tiers.map((tier) => (
                    <div className="tier-row" key={tier.rank}>
                        <div className="tier-rank">{tier.rank}</div>

                        <div className="tier-entries">
                            {tier.entries.map((entry) => {
                                const theme = characterThemes[entry.characterId];

                                return (
                                    <article
                                        className="tier-entry-card"
                                        key={`${entry.character}-${entry.className}`}
                                        style={{
                                            borderColor: theme.primary,
                                            boxShadow: `0 0 20px ${theme.glow}`
                                        }}
                                    >
                    <span
                        style={{
                            backgroundColor: theme.glow,
                            color: theme.primary
                        }}
                    >
                      {entry.role}
                    </span>

                                        <h2 style={{ color: theme.primary }}>{entry.className}</h2>
                                        <strong>{entry.character}</strong>
                                        <p>{entry.reason}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default TierListPage;