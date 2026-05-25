import { builds } from "../../data/builds";
import BuildCard from "../ui/BuildCard";
import SectionHeader from "../ui/SectionHeader";

function RecommendedBuildsSection() {
    const recommendedBuilds = builds.slice(0, 3);

    return (
        <section className="home-section" id="recommended-builds">
            <SectionHeader eyebrow="Builds recommandés" title="Des builds vérifiés à consulter"/>
            <div className="home-build-grid">
                {recommendedBuilds.map((build) => (
                    <BuildCard key={build.id} build={build} />
                ))}
            </div>
        </section>
    );
}
export default RecommendedBuildsSection;