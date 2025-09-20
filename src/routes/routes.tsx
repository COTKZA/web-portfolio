import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default routes