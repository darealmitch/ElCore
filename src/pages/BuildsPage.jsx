import { useMemo, useState } from "react";
import BuildCard from "../components/ui/BuildCard";
import { builds } from "../data/builds";
import { scrollToSectionAfterRender } from "../utils/scrollToSection";

const filters = ["Tous", "PvE", "Raid", "Débutant"];

function BuildsPage() {
    const [activeFilter, setActiveFilter] = useState("Tous");

    const updateFilter = (filter) => {
        setActiveFilter(filter);
        scrollToSectionAfterRender("builds-results");
    };

    const filteredBuilds = useMemo(() => {
        if (activeFilter === "Tous") return builds;
        return builds.filter((build) => build.mode === activeFilter);
    }, [activeFilter]);

    return (
        <main className="page">
            <section className="page-hero">
                <span>Configurations</span>
                <h1>Configurations Elsword</h1>
                <p>
                    Consulte les configurations structurés par personnage, classe, mode de jeu,
                    rôle, statistiques, compétences et rotations.
                </p>
            </section>
            <section className="filter-bar">
                {filters.map((filter) => (
                    <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} onClick={() => updateFilter(filter)}>
                        {filter}
                    </button>
                ))}
            </section>
            <section className="builds-grid" id="builds-results">
                {filteredBuilds.map((build) => (
                    <BuildCard key={build.id} build={build} />
                ))}
            </section>
        </main>
    );
}

export default BuildsPage;