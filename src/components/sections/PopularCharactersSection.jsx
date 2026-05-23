import { characters } from "../../data/characters";
import CharacterCard from "../ui/CharacterCard";
import SectionHeader from "../ui/SectionHeader";

const popularIds = ["elsword", "add", "elesis", "raven"];

function PopularCharactersSection() {
    const popularCharacters = popularIds.map((id) => characters.find((character) => character.id === id)).filter(Boolean);

    return (
        <section className="home-section popular-characters-section">
            <SectionHeader eyebrow="Personnages populaires" title="Les fiches les plus consultées"/>
            <div className="home-character-grid">
                {popularCharacters.map((character) => (
                    <CharacterCard key={character.id} character={character} compact />
                ))}
            </div>
        </section>
    );
}

export default PopularCharactersSection;