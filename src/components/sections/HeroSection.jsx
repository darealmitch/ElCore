import { useEffect, useRef } from "react";

function HeroSection() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const heroSection = canvas.closest(".hero");
        const ctx = canvas.getContext("2d");
        if (!ctx || !heroSection) return undefined;
        return undefined;
    }, []);

    return (
        <section className="hero" id="hero-section">
            <canvas ref={canvasRef} className="hero-particles-canvas" />
            <div className="hero-inner">
                <div className="hero-content">
                    <span className="hero-badge">
                        <span className="hero-badge-dot" />
                            Portail Elsword FR
                        </span>
                        <h1>
                            Le cœur <br /><span>stratégique</span> <br />d’Elsword
                        </h1>
                            <p>
                                ElCore est un portail Elsword FR pour comprendre les personnages, explorer les classes, consulter des guides et préparer ses configurations.
                            </p>
                        <div className="hero-actions">
                            <a href="#comprendre-elcore" className="hero-button primary" onClick={(event) => {
                                event.preventDefault();
                                document.getElementById("comprendre-elcore")?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}>
                                Comprendre Elcore
                            </a>
                            <a href="/personnages" className="hero-button secondary">
                                Voir les personnages
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
                        <span>Classements</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;