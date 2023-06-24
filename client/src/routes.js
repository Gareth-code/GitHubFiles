import PrInfo from "./pages/PrInfo";
import Projects from "./pages/Projects";
import Search from "./pages/Search";
import { PRINFO_ROUTE, PROJECTS_ROUTE, SEARCH_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: SEARCH_ROUTE,
        Component: Search
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects
    },
    {
        path: PRINFO_ROUTE,
        Component: PrInfo
    }
]