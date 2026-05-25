import { useEffect, useState } from "react";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 360);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button
            type="button"
            className={isVisible ? "scroll-top-button visible" : "scroll-top-button"}
            onClick={scrollToTop}
            aria-label="Remonter en haut de la page"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
            title="Remonter en haut"
        >
            ↑
        </button>
    );
}
export default ScrollToTopButton;
