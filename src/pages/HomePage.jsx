import HeroSection from "../components/sections/HeroSection";
import QuickAccessSection from "../components/sections/QuickAccessSection";
import PopularCharactersSection from "../components/sections/PopularCharactersSection";
import RecommendedBuildsSection from "../components/sections/RecommendedBuildsSection";

function HomePage() {
    return (
        <main>
            <HeroSection />
            <QuickAccessSection />
            <PopularCharactersSection />
            <RecommendedBuildsSection />
        </main>
    );
}
export default HomePage;