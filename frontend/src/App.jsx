import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { AnimeProvider } from "./contexts/AnimeContext";

function App() {
  return (
    <AnimeProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </main>
    </AnimeProvider>
  );
}

export default App;
