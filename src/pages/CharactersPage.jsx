import { useMemo, useState } from "react";
import CharacterCard from "../components/ui/CharacterCard";
import { characters } from "../data/characters";

const roleCategories = [
    ...new Set(characters.map((character) => character.role.split("/")[0].trim())),
];

function CharactersPage() {
    const [query, setQuery] = useState("");
    const [activeRole, setActiveRole] = useState("all");

    const filteredCharacters = useMemo(() => {
        const value = query.trim().toLowerCase();
        return characters.filter((character) => {
            const matchesRole =
                activeRole === "all" ||
                character.role.split("/")[0].trim() === activeRole;

            const matchesQuery =
                !value ||
                character.name.toLowerCase().includes(value) ||
                character.fullName?.toLowerCase().includes(value) ||
                character.role.toLowerCase().includes(value);

            return matchesRole && matchesQuery;
        });
    }, [query, activeRole]);

    return (
        <main className="page characters-page">
            <section className="page-hero characters-page-hero">
                <div>
                    <span>Personnages</span>
                    <h1>Tous les personnages Elsword</h1>
                    <p>
                        Explore les personnages, leurs rôles, leurs armes et leurs chemins
                        de classes. Chaque fiche te donne une vue rapide du style de jeu
                        avant d’ouvrir le guide détaillé.
                    </p>
                </div>
                <div className="characters-page-summary">
                    <strong>{characters.length}</strong>
                    <span>personnages disponibles</span>
                </div>
            </section>

            <section className="characters-controls">
                <div className="characters-search">
                    <input
                        type="search"
                        placeholder="Rechercher un personnage..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        aria-label="Rechercher un personnage"
                    />
                </div>
                <div className="characters-role-filters" aria-label="Filtrer par rôle">
                    <button
                        className={activeRole === "all" ? "filter-chip active" : "filter-chip"}
                        onClick={() => setActiveRole("all")}
                    >
                        Tous
                    </button>
                    {roleCategories.map((role) => (
                        <button
                            key={role}
                            className={activeRole === role ? "filter-chip active" : "filter-chip"}
                            onClick={() => setActiveRole(role)}
                        >
                            {role}
                        </button>
                    ))}
                </div>
            </section>

            {filteredCharacters.length > 0 ? (
                <section className="characters-grid">
                    {filteredCharacters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </section>
            ) : (
                <p className="characters-empty">
                    Aucun personnage ne correspond à ta recherche.
                </p>
            )}
        </main>
    );
}

export default CharactersPage;
