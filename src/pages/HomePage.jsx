import HeroSection from "../components/sections/HeroSection";
import QuickAccessSection from "../components/sections/QuickAccessSection";
import PopularCharactersSection from "../components/sections/PopularCharactersSection";

function HomePage() {
    return (
        <main>
            <HeroSection />
            <QuickAccessSection />
            <PopularCharactersSection />
        </main>
    );
}
export default HomePage;