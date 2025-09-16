import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default routers