import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-brand">
                <strong>ElCore</strong>
                <p>Le cœur stratégique d’Elsword.</p>
            </div>
            <div className="footer-links">
                <NavLink to="/personnages">Personnages</NavLink>
                <NavLink to="/builds">Builds</NavLink>
                <NavLink to="/tier-list">Classement</NavLink>
                <NavLink to="/guides">Guides</NavLink>
            </div>
            <p className="footer-disclaimer">
                Fan-site non officiel. ElCore n’est pas affilié à KOG Games, Gameforge ou Elsword.
            </p>
        </footer>
    );
}

export default Footer;