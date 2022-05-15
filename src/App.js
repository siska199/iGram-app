import { UploadFoto } from "./components/UploadFoto/UploadFoto";
import Navbar from "./components/Navbar/Navbar";
import DisplayPhotos from "./components/DisplayPhotos/DisplayPhotos";
function App() {
  return (
    <main className="app">
      <Navbar />
      <UploadFoto/>
      <DisplayPhotos/>
    </main>
  );
}

export default App;
