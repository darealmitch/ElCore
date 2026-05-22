function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <span className="hero-badge">Portail Elsword FR</span>
                <h1>Le cœur stratégique d’Elsword</h1>
                <p>
                    Fiches personnages, builds optimisés, tier-lists, guides PvE/PvP et
                    compositions d’équipe pour progresser plus vite.
                </p>
                <div className="hero-actions">
                    <a href="/personnages" className="hero-button primary">Voir les personnages</a>
                    <a href="/builds" className="hero-button secondary">Explorer les builds</a>
                </div>
            </div>
            <aside className="hero-panel">
                <div className="hero-panel-top">
                    <span>Base de données</span>
                    <strong>ElCore</strong>
                </div>
                <div className="hero-stats-grid">
                    <div className="hero-stat-card">
                        <strong>15</strong>
                        <span>Personnages</span>
                    </div>
                    <div className="hero-stat-card">
                        <strong>60+</strong>
                        <span>Classes</span>
                    </div>
                    <div className="hero-stat-card">
                        <strong>PvE</strong>
                        <span>Builds</span>
                    </div>
                    <div className="hero-stat-card">
                        <strong>Raid</strong>
                        <span>Tier List</span>
                    </div>
                </div>
            </aside>
        </section>
    );
}
export default HeroSection;