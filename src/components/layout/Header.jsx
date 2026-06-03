import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { searchItems } from "../../data/searchItems";
import { scrollToSection } from "../../utils/scrollToSection";

const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Personnages", path: "/personnages" },
    { label: "Classes", path: "/classes" },
    { label: "Builds", path: "/builds" },
    { label: "Classement", path: "/tier-list" },
    { label: "Guides", path: "/guides" }
];

function Header() {
    const [query, setQuery] = useState("");
    const results = useMemo(() => {
        const value = query.trim().toLowerCase();
        if (!value) return [];
        return searchItems
            .filter((item) => item.keywords.join(" ").toLowerCase().includes(value))
            .slice(0, 8);
    }, [query]);

    return (
        <header className="site-header">
            <NavLink to="/" className="logo">
                <img src={"/images/stone.png"} alt="logo" className={"logo-image"}/>
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
                <div className="search-box">
                    <input type="search" placeholder="Rechercher..." value={query} onChange={(event) => setQuery(event.target.value)}/>

                    {results.length > 0 && (
                        <div className="search-results">
                            {results.map((item) => (
                                <Link key={item.id} to={item.url} className="search-result" onClick={() => setQuery("")}>
                                    <span>{item.type}</span>
                                    <strong>{item.title}</strong>
                                    <small>{item.subtitle}</small>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <button type="button" onClick={() => scrollToSection("quick-access")}>Commencer</button>
            </div>
        </header>
    );
}

export default Header;