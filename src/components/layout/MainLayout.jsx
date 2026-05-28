import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";

function MainLayout() {
    useEffect(() => {
        if (!CSS.supports('animation-timeline', 'scroll()')) {
            const handleScroll = () => {
                const progress = document.getElementById("scroll-progress");
                if (!progress) return;
                const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = window.scrollY;
                const progressPercentage = scrollable > 0 ? (scrolled / scrollable) : 0;
                progress.style.transform = `scaleX(${progressPercentage})`;
            };
            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => window.removeEventListener("scroll", handleScroll);
        }
        return undefined;
    }, []);

    return (
        <>
            <ScrollToTopOnRouteChange />
            <div id="scroll-progress" aria-hidden="true" />
            <Header />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}
export default MainLayout;