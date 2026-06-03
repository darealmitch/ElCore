import CharacterCard from "../components/ui/CharacterCard";
import { characters } from "../data/characters";

function CharactersPage() {
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
                    <span>Personnages disponibles</span>
                </div>
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