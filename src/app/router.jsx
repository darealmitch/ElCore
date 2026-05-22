import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";
import CharacterDetailPage from "../pages/CharacterDetailPage";
import BuildsPage from "../pages/BuildsPage";
import TierListPage from "../pages/TierListPage";
import GuidesPage from "../pages/GuidesPage";
import BuildDetailPage from "../pages/BuildDetailPage";
import ClassesPage from "../pages/ClassesPage";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "personnages",
                element: <CharactersPage/>,
            },
            {
                path: "personnages/:id",
                element: <CharacterDetailPage/>,
            },
            {
                path: "builds",
                element: <BuildsPage/>,
            },
            {
                path: "tiers-list",
                element: <TierListPage/>,
            },
            {
                path: "guides",
                element: <GuidesPage/>,
            },
            {
                path: "builds/:id",
                element: <BuildDetailPage />
            },
            {
                path: "classes",
                element: <ClassesPage />
            },
        ]
    }
]);