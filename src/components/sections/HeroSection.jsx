import { useEffect, useRef } from "react";

function HeroSection() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const heroSection = canvas.closest(".hero-premium");
        const ctx = canvas.getContext("2d");
        if (!ctx || !heroSection) return;
    })
    return (
        <section className="hero-section hero-premium" id="hero-section">
            <canvas ref={canvasRef} className="hero-particles-canvas" id="particle-canvas" />
            <div className="hero-premium-inner">
                <div className="hero-content">
                    <span className="hero-badge">
                        <span className="hero-badge-dot" />
                            Portail Elsword FR
                        </span>
                        <h1>
                            Le cœur <br /><span>stratégique</span> <br />d’Elsword
                        </h1>
                            <p>
                                Fiches personnages, builds optimisés, tier-lists, guides PvE/PvP et compositions d’équipe pour progresser plus vite.
                            </p>
                        <div className="hero-actions">
                            <a href="/personnages" className="hero-button primary">
                                Voir les personnages
                            </a>
                            <a href="/builds" className="hero-button secondary">
                                Explorer les builds
                            </a>
                        </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-glow" />
                    <div className="hero-character" id="hero-character">
                        <img src="/images/home/glave.png" alt="Glave" onError={(event) => {
                            event.currentTarget.style.display = "none";}}/>
                    </div>
                    <div className="hero-floating-card hero-floating-card-top">
                        <strong>15+</strong>
                        <span>Personnages</span>
                    </div>
                    <div className="hero-floating-card hero-floating-card-left">
                        <strong>60+</strong>
                        <span>Classes jouables</span>
                    </div>
                    <div className="hero-floating-card hero-floating-card-bottom">
                        <strong>PvE / PvP</strong>
                        <span>Tier lists</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;