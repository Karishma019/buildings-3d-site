import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SiteDetails from "../pages/SiteDetails";
import FormDetails from "../pages/FormDetails";
import Model from "../pages/Model";

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
  {
    path: "/model",
    element: <Model />,
  },
]);

export default routes;
