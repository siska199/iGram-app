import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <main className="app">
      <Navbar />

      <LandingPage />
      <Home />
    </main>
  );
}

export default App;
