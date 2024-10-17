import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SiteDetails from "../pages/SiteDetails";
import FormDetails from "../pages/FormDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/view-site/:id",
    element: <SiteDetails />,
  },
  {
    path: "/form-details",
    element: <FormDetails />,
  },
]);

export default routes;
