import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";
import CharacterDetailPage from "../pages/CharacterDetailPage";
import BuildsPage from "../pages/BuildsPage";
import TierListPage from "../pages/TierListPage";
import GuidesPage from "../pages/GuidesPage";
import BuildDetailPage from "../pages/BuildDetailPage";
import ClassesPage from "../pages/ClassesPage";
import ClassDetailPage from "../pages/ClassDetailPage";
import LorePage from "../pages/LorePage";
import LoreChapterPage from "../pages/LoreChapterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "personnages",
                element: <CharactersPage />,
            },
            {
                path: "personnages/:id",
                element: <CharacterDetailPage />,
            },
            {
                path: "builds",
                element: <BuildsPage />,
            },
            {
                path: "tier-list",
                element: <TierListPage />,
            },
            {
                path: "guides",
                element: <GuidesPage />,
            },
            {
                path: "lore",
                element: <LorePage />,
            },
            {

                path: "lore/:chapterId",

                element: <LoreChapterPage />,

            },
            {
                path: "builds/:id",
                element: <BuildDetailPage />,
            },
            {
                path: "classes",
                element: <ClassesPage />,
            },
            {
                path: "classes/:characterId/:classId",
                element: <ClassDetailPage />,
            },
            {
                path: "classes/:characterId/:classId/:stage",
                element: <ClassDetailPage />,
            },
        ],
    },
]);