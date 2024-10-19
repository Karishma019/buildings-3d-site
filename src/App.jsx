import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose="2000"
        hideProgressBar={true}
      />
    </div>
  );
}

export default App;
