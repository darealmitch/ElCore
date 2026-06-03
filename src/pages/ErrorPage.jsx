import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    const title = isRouteErrorResponse(error)
        ? `Erreur ${error.status}`
        : "Une erreur est survenue";

    const message = isRouteErrorResponse(error)
        ? error.statusText || "La page n’a pas pu être chargée."
        : "Un problème inattendu a empêché l’affichage de cette page.";

    return (
        <main className="page">
            <section className="page-hero">
                <span>Oups</span>
                <h1>{title}</h1>
                <p>{message}</p>
                <Link className="btn-primary" to="/">Retour à l’accueil</Link>
            </section>
        </main>
    );
}

export default ErrorPage;
