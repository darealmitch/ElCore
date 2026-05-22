import { builds } from "../../data/builds";
import BuildCard from "../ui/BuildCard";
import SectionHeader from "../ui/SectionHeader";

function RecommendedBuildsSection() {
    return (
        <section className="home-section">
            <SectionHeader
                eyebrow="Builds recommandés"
                title="Des builds prêts à tester"
            />

            <div className="home-build-grid">
                {builds.map((build) => (
                    <BuildCard key={build.id} build={build} />
                ))}
            </div>
        </section>
    );
}

export default RecommendedBuildsSection;