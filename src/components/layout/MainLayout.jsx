import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "../ui/ScrollToTopButton";

function MainLayout() {
    return (
        <div className="main-container">
            <Header />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </div>
    )
}
export default MainLayout;