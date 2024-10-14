import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      } else {
        setLoading(true);
      }
    };

    handleReadyStateChange();

    document.addEventListener("readystatechange", handleReadyStateChange);

    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
