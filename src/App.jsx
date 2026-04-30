import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import { sportsData } from "./data";

export default function App() {
  const location = useLocation();
  const slugFromUrl = location.pathname.split("/")[1];
  const currentSport = Object.values(sportsData).find(
    (s) => s.slug === slugFromUrl,
  );
  const texteBande =
    location.pathname === "/"
      ? "Disciplines"
      : currentSport?.categorie || "DÉTAILS";
  const navigate = useNavigate();

  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="header-content">
          <img src="/logo.png" alt="Logo" className="logo" />
          <span className="brand-name">RSM 2026 Ottawa-Gatineau</span>
        </div>
      </header>

      <div className="sub-header-bande">
        <div className="bande-content">
          {location.pathname !== "/" && (
            <>
              <button className="btn-home-simple" onClick={() => navigate("/")}>
                <img src="/home.png" alt="Home" className="home-icon-img" />
              </button>
              {/* TRAIT SÉPARATEUR */}
              <span className="separateur-vertical"></span>
            </>
          )}
          <span className="bande-title-left">{texteBande}</span>
        </div>
      </div>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}
