import { characters } from "../../data/characters";
import CharacterCard from "../ui/CharacterCard";
import SectionHeader from "../ui/SectionHeader";

const popularIds = ["elsword", "aisha", "rena", "raven"];

function PopularCharactersSection() {
    const popularCharacters = characters.filter((character) =>
        popularIds.includes(character.id)
    );

    return (
        <section className="home-section">
            <SectionHeader
                eyebrow="Personnages populaires"
                title="Les fiches les plus consultées"
            />

            <div className="home-character-grid">
                {popularCharacters.map((character) => (
                    <CharacterCard key={character.id} character={character} compact />
                ))}
            </div>
        </section>
    );
}

export default PopularCharactersSection;