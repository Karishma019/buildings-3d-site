import { Canvas } from "@react-three/fiber";
import Building from "./models/Building";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Location from "./pages/Location";
import Buildings from "./pages/Buildings";
import { useEffect } from "react";
import { ScrollProvider } from "./components/ScrollProvider";

function App() {
  return (
    <>
      <Home />
      <Info />
      <Location />
      <Buildings />
    </>
  );
}

export default App;
