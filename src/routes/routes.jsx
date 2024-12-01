import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import Home from "../pages/Home";
import SiteDetails from "../pages/SiteDetails";
import SiteDetails64 from "../pages/SiteDetails64";
import FormDetails from "../pages/FormDetails";
import { element } from "three/src/nodes/tsl/TSLCore.js";

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
    path: "/view-site64/:id",
    element: <SiteDetails64 />,
  },
  {
    path: "/form-details",
    element: <FormDetails />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/get-app",
    element: <FormDetails />,
  },
]);

export default routes;
