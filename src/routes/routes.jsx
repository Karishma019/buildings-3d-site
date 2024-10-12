import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SiteDetails from "../pages/SiteDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/view-site",
    element: <SiteDetails />,
  },
]);

export default routes;
