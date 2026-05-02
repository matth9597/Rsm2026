import { Routes, Route, useLocation, useNavigate, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import { sportsData } from "./data";
import Reglement from './pages/Reglement';
import Planning from './pages/Planning';

export default function App() {
  const location = useLocation();
  const slugFromUrl = location.pathname.split("/")[1];
  const currentSport = Object.values(sportsData).find(
    (s) => s.slug === slugFromUrl,
  );
  const texteBande = currentSport?.categorie || "DÉTAILS";
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
          <nav className="bande-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => {
                  const currentPath = location.pathname.replace('/', '');
                  const isSportPage = Object.values(sportsData).some(sport => sport.slug === currentPath);
                  return (isActive || isSportPage) ? 'nav-item active' : 'nav-item';
              }}
            >
              Disciplines
            </NavLink>

            <NavLink 
              to="/reglements" 
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              Règlements
            </NavLink>

            <NavLink 
              to="/planning" 
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              Planning
            </NavLink>
          </nav>
        </div>
      </div>
      {location.pathname !== "/" && location.pathname !== "/reglements" && location.pathname !== "/planning" && (
        <div className="sub-header-info">
          <div className="bande-content">
            <span className="info-text">{texteBande}</span>
          </div>
        </div>
      )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reglements" element={<Reglement />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/:slug" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}
