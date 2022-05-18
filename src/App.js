import { UploadFoto } from "./components/UploadFoto/UploadFoto";
import Navbar from "./components/Navbar/Navbar";
import DisplayPhotos from "./components/DisplayPhotos/DisplayPhotos";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(false);
  return (
    <main className={`${light && "light-mode"} app`}>
      <Navbar setLight={setLight} light={light} />
      <UploadFoto light={light} />
      <DisplayPhotos light={light} />
    </main>
  );
}

export default App;
