import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main className="page">
            <section className="page-hero">
                <span>Erreur 404</span>
                <h1>Page introuvable</h1>
                <p>La page que tu cherches n’existe pas ou a été déplacée.</p>
                <Link className="btn-primary" to="/">Retour à l’accueil</Link>
            </section>
        </main>
    );
}

export default NotFoundPage;
