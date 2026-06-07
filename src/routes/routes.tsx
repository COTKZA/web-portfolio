import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default routes;
