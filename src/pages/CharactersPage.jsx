import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { characters } from "../data/characters";
import { characterThemes } from "../data/characterThemes";

// Proportions du gabarit, identiques pour toutes les cartes.
const TARGET_HEIGHT = 0.86;
const GROUND_LINE = 0.97;

// Personnages dont l'illustration a des effets/poses très étalés : dans la carte
// de présentation, on les « contient » entièrement (jamais coupés) plutôt que de
// caler la hauteur. Les autres gardent la normalisation en hauteur.
const WIDE_PRESENTATION = new Set(["eve", "chung", "luciel"]);

/* Normalise un portrait en mesurant sa boîte englobante opaque (scan alpha sur
   un canvas réduit), puis applique scale + translation.
   - mode "height"  : cale la HAUTEUR du personnage (présence uniforme). Seuil
     alpha élevé pour ignorer les auras. Utilisé par la grille.
   - mode "contain" : la silhouette VISIBLE entière (effets compris) tient dans
     le cadre, donc rien n'est jamais coupé. Utilisé par la carte de présentation,
     où des persos comme Ève, Chung ou Lu/Ciel ont des effets très étalés. */
function measurePortrait(img, mode = "height") {
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const frame = img.parentElement;
    const frameW = frame.clientWidth;
    const frameH = frame.clientHeight;
    if (!iw || !ih || !frameW || !frameH) return null;

    const SCAN = 150;
    const s = SCAN / iw;
    const cw = Math.max(1, Math.round(iw * s));
    const ch = Math.max(1, Math.round(ih * s));
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, cw, ch);

    // En mode "contain" on abaisse le seuil pour inclure les effets/auras dans la
    // mesure (afin qu'ils tiennent dans le cadre) ; en mode "height" on garde un
    // seuil élevé pour ne mesurer que le corps plein et garder une présence égale.
    const ALPHA = mode === "contain" ? 28 : 110;
    let top = ch, bottom = -1, left = cw, right = -1;
    const data = ctx.getImageData(0, 0, cw, ch).data;
    for (let y = 0; y < ch; y++) {
        for (let x = 0; x < cw; x++) {
            if (data[(y * cw + x) * 4 + 3] > ALPHA) {
                if (y < top) top = y;
                if (y > bottom) bottom = y;
                if (x < left) left = x;
                if (x > right) right = x;
            }
        }
    }
    if (bottom < top || right < left) return null;

    // boîte opaque en pixels rendus (l'image fait frameW de large)
    const r = frameW / iw / s;
    const bTop = top * r;
    const bBottom = (bottom + 1) * r;
    const bHeight = bBottom - bTop;
    const bWidth = (right - left + 1) * r;
    const bCenterX = ((left + right + 1) / 2) * r;

    // Pieds sur une ligne de sol commune, centré horizontalement. En "contain" on
    // borne aussi la largeur : un perso aux effets étalés est réduit juste ce qu'il
    // faut pour rester entier dans le cadre (jamais coupé).
    const targetH = frameH * TARGET_HEIGHT;
    const baseline = frameH * GROUND_LINE;
    const k =
        mode === "contain"
            ? Math.min(targetH / bHeight, (frameW * 0.95) / bWidth)
            : targetH / bHeight;
    const tx = frameW / 2 - k * bCenterX;
    const ty = baseline - k * bBottom;

    return {
        transform: `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${k.toFixed(3)})`,
        transformOrigin: "0 0",
    };
}

// Portrait normalisé réutilisable : mesure son image (au chargement, ou
// immédiatement si déjà en cache) et applique le gabarit commun.
function Portrait({ src, alt, eager = false, mode = "height" }) {
    const ref = useRef(null);
    const [style, setStyle] = useState(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        const measure = () => {
            const next = measurePortrait(node, mode);
            if (next) setStyle(next);
        };
        if (node.complete && node.naturalWidth) {
            measure();
            return undefined;
        }
        node.addEventListener("load", measure);
        return () => node.removeEventListener("load", measure);
    }, [src, mode]);

    return (
        <span className="portrait-frame">
            <img
                ref={ref}
                className="portrait-img"
                src={src}
                alt={alt}
                style={style}
                loading={eager ? "eager" : "lazy"}
            />
        </span>
    );
}

const roleCategories = [
    ...new Set(characters.map((character) => character.role.split("/")[0].trim())),
];

const primaryRole = (character) => character.role.split("/")[0].trim();

function CharactersPage() {
    const [query, setQuery] = useState("");
    const [activeRole, setActiveRole] = useState("all");
    const [activeId, setActiveId] = useState(characters[0].id);
    const [fadeKey, setFadeKey] = useState(characters[0].id);

    const filteredCharacters = useMemo(() => {
        const value = query.trim().toLowerCase();
        return characters.filter((character) => {
            const matchesRole = activeRole === "all" || primaryRole(character) === activeRole;
            const matchesQuery =
                !value ||
                character.name.toLowerCase().includes(value) ||
                character.fullName?.toLowerCase().includes(value) ||
                character.role.toLowerCase().includes(value);
            return matchesRole && matchesQuery;
        });
    }, [query, activeRole]);

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
                <span className="roster-kicker">Personnages · {characters.length} héros</span>
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
                                    <div className="k">Rôle</div>
                                    <div className="v">{active.role}</div>
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
                        <div className="roster-filters" aria-label="Filtrer par rôle">
                            <button
                                className={activeRole === "all" ? "roster-chip active" : "roster-chip"}
                                onClick={() => setActiveRole("all")}
                            >
                                Tous
                            </button>
                            {roleCategories.map((role) => (
                                <button
                                    key={role}
                                    className={activeRole === role ? "roster-chip active" : "roster-chip"}
                                    onClick={() => setActiveRole(role)}
                                >
                                    {role}
                                </button>
                            ))}
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
                                            <span className="roster-tile-role">{primaryRole(character)}</span>
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
