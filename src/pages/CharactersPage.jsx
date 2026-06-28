import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { characters } from "../data/characters";
import { characterThemes } from "../data/characterThemes";
import Portrait from "../components/ui/Portrait";

// Personnages dont l'illustration a des effets/poses très étalés : dans la carte
// de présentation, on les « contient » entièrement (jamais coupés) plutôt que de
// caler la hauteur. Les autres gardent la normalisation en hauteur.
const WIDE_PRESENTATION = new Set(["eve", "chung", "luciel"]);

function CharactersPage() {
    const [query, setQuery] = useState("");
    const [activeId, setActiveId] = useState(characters[0].id);
    const [fadeKey, setFadeKey] = useState(characters[0].id);

    const filteredCharacters = useMemo(() => {
        const value = query.trim().toLowerCase();

        return characters.filter((character) => {
            return (
                !value ||
                character.name.toLowerCase().includes(value) ||
                character.fullName?.toLowerCase().includes(value)
            );
        });
    }, [query]);

    // vedette dérivée : l'id survolé s'il reste dans la liste filtrée,
    // sinon on retombe sur le premier résultat (aucun setState en cascade).
    const active =
        filteredCharacters.find((character) => character.id === activeId) ??
        filteredCharacters[0] ??
        characters[0];
    const activeTheme = characterThemes[active.id];

    const focusCharacter = (id) => {
        if (id === activeId) return;
        setActiveId(id);
        setFadeKey(id);
    };

    const pageStyle = {
        "--c": activeTheme.primary,
        "--c2": activeTheme.secondary,
        "--glow": activeTheme.glow,
    };

    return (
        <main className="page roster-page" style={pageStyle}>
            <header className="roster-head">
                <span className="roster-kicker">Personnages · {characters.length} personnages</span>
                <h1 className="roster-title">Choisis ton héros</h1>
                <p>
                    Survole un personnage pour le mettre en avant, puis ouvre sa fiche pour
                    explorer ses chemins de classes, ses armes et son style de jeu.
                </p>
            </header>

            <div className="roster-stage">
                <aside className="roster-feature">
                    <div className="roster-feature-inner">
                        <div className="roster-feature-text">
                            <span className="roster-feature-pill">{active.featuredClassFr || active.featuredClass}</span>
                            <h2 className={`roster-feature-name roster-feature-fade`} key={`name-${fadeKey}`}>
                                {active.name}
                            </h2>
                            <span className="roster-feature-fr">{active.type}</span>
                            <div className="roster-feature-meta">
                                <div>

                                </div>
                                <div>
                                    <div className="k">Arme</div>
                                    <div className="v">{active.weapon}</div>
                                </div>
                            </div>
                            <div className="roster-feature-classes">
                                {active.classes.map((className, index) => (
                                    <span key={className} title={`International : ${className}`}>
                                        {active.classesFr?.[index] || className}
                                    </span>
                                ))}
                            </div>
                            <Link to={`/personnages/${active.id}`} className="roster-feature-cta">
                                Voir le guide
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </Link>
                        </div>
                        <div className="roster-feature-visual">
                            <Portrait
                                key={`img-${fadeKey}`}
                                src={active.image}
                                alt={active.name}
                                eager
                                mode={WIDE_PRESENTATION.has(active.id) ? "contain" : "height"}
                            />
                        </div>
                    </div>
                </aside>

                <section className="roster-main">
                    <div className="roster-controls">
                        <div className="roster-search">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="7" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                            <input
                                type="search"
                                placeholder="Rechercher un personnage..."
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                aria-label="Rechercher un personnage"
                            />
                        </div>
                    </div>

                    {filteredCharacters.length > 0 ? (
                        <div className="roster-grid">
                            {filteredCharacters.map((character, index) => {
                                const theme = characterThemes[character.id];
                                const isActive = character.id === active.id;
                                return (
                                    <Link
                                        key={character.id}
                                        to={`/personnages/${character.id}`}
                                        className={isActive ? "roster-tile is-active" : "roster-tile"}
                                        style={{ "--tc": theme.primary, animationDelay: `${Math.min(index, 11) * 0.04}s` }}
                                        onMouseEnter={() => focusCharacter(character.id)}
                                        onFocus={() => focusCharacter(character.id)}
                                    >
                                        <span className="roster-tile-pip" aria-hidden="true" />
                                        <div className="roster-tile-visual">
                                            <Portrait src={character.image} alt={character.name} />
                                        </div>
                                        <div className="roster-tile-foot">
                                            <span className="roster-tile-name">{character.name}</span>
                                            <span className="roster-tile-role">{character.type}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="roster-empty">Aucun personnage ne correspond à ta recherche.</p>
                    )}
                </section>
            </div>
        </main>
    );
}

export default CharactersPage;
