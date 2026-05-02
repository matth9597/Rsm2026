import { Routes, Route, useLocation, useNavigate, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import { ArrowLeft } from "@phosphor-icons/react";
import { sportsData } from "./data";
import Reglement from './pages/Reglement';
import Planning from './pages/Planning';
import RegSoccerFr from './pages/reglementsSports/RegSoccerFr';
import RegSoccerEn from './pages/reglementsSports/RegSoccerEn';

export default function App() {
  const location = useLocation();
  const slugFromUrl = location.pathname.split("/")[1];
  const currentSport = Object.values(sportsData).find(
    (s) => s.slug === slugFromUrl,
  );
  const navigate = useNavigate();
  const notInMainMenuItem = location.pathname !== "/" && location.pathname !== "/reglements" && location.pathname !== "/planning"

  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="header-content">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="logo" 
                onClick={() => navigate('/')} 
                style={{ cursor: 'pointer' }} 
              />
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
              Reg JOM
            </NavLink>

            <NavLink 
              to="/planning" 
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              Programmation
            </NavLink>
          </nav>
        </div>
      </div>
        {notInMainMenuItem && (
          <div className="sub-header-info">
            <div className="bande-content">
              {location.pathname !== '/' && (
                <button className="btn-back-minimal" onClick={() => navigate(-1)}>
                  <ArrowLeft size={20} weight="bold" />
                </button>
              )}
                <span className="info-text">{currentSport?.categorie || "DÉTAILS"} {location.pathname.includes("reglement") ? "- reglement":"" }</span>
            </div>
          </div>
        )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reglements" element={<Reglement />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/:slug" element={<Details />} />
          <Route path="/soccer-homme/reglement" element={<RegSoccerFr />} />
        </Routes>
      </main>
    </div>
  );
}