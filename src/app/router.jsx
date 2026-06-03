/* eslint-disable react-refresh/only-export-components --
   Ce fichier de configuration de routes définit des composants chargés via
   React.lazy et exporte aussi `router` (non-composant). La règle Fast Refresh
   ne s'applique pas à un module de configuration. */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const CharactersPage = lazy(() => import("../pages/CharactersPage"));
const CharacterDetailPage = lazy(() => import("../pages/CharacterDetailPage"));
const BuildsPage = lazy(() => import("../pages/BuildsPage"));
const BuildDetailPage = lazy(() => import("../pages/BuildDetailPage"));
const TierListPage = lazy(() => import("../pages/TierListPage"));
const GuidesPage = lazy(() => import("../pages/GuidesPage"));
const LorePage = lazy(() => import("../pages/LorePage"));
const LoreChapterPage = lazy(() => import("../pages/LoreChapterPage"));
const ClassesPage = lazy(() => import("../pages/ClassesPage"));
const ClassDetailPage = lazy(() => import("../pages/ClassDetailPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "personnages", element: <CharactersPage /> },
            { path: "personnages/:id", element: <CharacterDetailPage /> },
            { path: "builds", element: <BuildsPage /> },
            { path: "builds/:id", element: <BuildDetailPage /> },
            { path: "tier-list", element: <TierListPage /> },
            { path: "guides", element: <GuidesPage /> },
            { path: "lore", element: <LorePage /> },
            { path: "lore/:chapterId", element: <LoreChapterPage /> },
            { path: "classes", element: <ClassesPage /> },
            { path: "classes/:characterId/:classId", element: <ClassDetailPage /> },
            { path: "classes/:characterId/:classId/:stage", element: <ClassDetailPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);
