import CharacterCard from "../components/ui/CharacterCard";
import { characters } from "../data/characters";

function CharactersPage() {
    return (
        <main className="page">
            <section className="page-hero">
                <span>Personnages</span>
                <h1>Tous les personnages Elsword</h1>
                <p>
                    Explore les personnages, leurs rôles, leurs armes et leurs chemins de classes.
                </p>
            </section>

            <section className="characters-grid">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </section>
        </main>
    );
}

export default CharactersPage;