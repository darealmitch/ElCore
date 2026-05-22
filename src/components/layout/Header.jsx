import { NavLink } from "react-router-dom";

const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Personnages", path: "/personnages" },
    { label: "Builds", path: "/builds" },
    { label: "Tier List", path: "/tier-list" },
    { label: "Guides", path: "/guides" }
];

function Header() {
    return (
        <header className="site-header">
            <NavLink to="/" className="logo">
                <span className="logo-mark">◆</span>
                <span>ElCore</span>
            </NavLink>
            <nav className="nav-links">
                {navLinks.map((link) => (
                    <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            <div className="header-actions">
                <input type="search" placeholder="Rechercher..." />
                <button>Commencer</button>
            </div>
        </header>
    );
}
export default Header;