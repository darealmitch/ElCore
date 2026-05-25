import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";

function MainLayout() {
    return (
        <>
            <ScrollToTopOnRouteChange />
            <Header />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}
export default MainLayout;