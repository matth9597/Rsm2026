import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  NavLink,
} from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import { ArrowLeft, List, X } from "@phosphor-icons/react";
import { sportsData } from "./data";
import ReglementJOM from "./pages/ReglementJOM";
import Programmation from "./pages/Programmation";
import { useLanguage } from "./LanguageContext";
import Contact from "./pages/Contact";
import Paiement from "./pages/Paiement";
import ReglementSoccerHomme from "./pages/reglementsSports/Soccer/ReglementSoccerHomme";
import ReglementSoccerVeteran from "./pages/reglementsSports/Soccer/ReglementSoccerVeteran";
import ReglementSoccerMixed from "./pages/reglementsSports/Soccer/ReglementSoccerMixed";
import ReglementSoccerKids from "./pages/reglementsSports/Soccer/ReglementSoccerKids";
import ReglementBasketballHomme from "./pages/reglementsSports/Basketball/ReglementBasketballHomme";
import ReglementBasketballFemme from "./pages/reglementsSports/Basketball/ReglementBasketballFemme";
import ReglementVolleyballFemme from "./pages/reglementsSports/Volleyball/ReglementVolleyballFemme";
import ReglementVolleyballHomme from "./pages/reglementsSports/Volleyball/ReglementVolleyballHomme";
import ReglementPetanque from "./pages/reglementsSports/Other/ReglementPetanque";
import ReglementTennis from "./pages/reglementsSports/Tennis/ReglementTennis";
import TeamPlayers from "./pages/TeamPlayers";

export default function App() {
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slugFromUrl = location.pathname.split("/")[1];
  const currentSport = Object.values(sportsData).find(
    (s) => s.slug === slugFromUrl,
  );
  const navigate = useNavigate();
  const notInMainMenuItem =
    location.pathname !== "/" &&
    location.pathname !== "/jom" &&
    location.pathname !== "/programmation" &&
    location.pathname !== "/contact" &&
    location.pathname !== "/paiement";

  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="header-content">
          <img
            src="/logo.png"
            alt="Logo"
            className="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <span className="brand-name">RSM 2026 Ottawa-Gatineau</span>
          <div className="lang-switcher">
            <span
              className={lang === "fr" ? "active" : ""}
              onClick={() => lang !== "fr" && toggleLang()}
            >
              FR
            </span>
            <span className="separator">|</span>
            <span
              className={lang === "en" ? "active" : ""}
              onClick={() => lang !== "en" && toggleLang()}
            >
              EN
            </span>
          </div>
        </div>
      </header>
      <div className="sub-header-bande">
        <div className="bande-content">
          <button
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={25} weight="bold" />
            ) : (
              <List size={25} weight="bold" />
            )}
          </button>
          <span className="current-menu-title">
            {location.pathname === "/"
              ? t("disciplines")
              : location.pathname === "/reglements"
                ? t("reglements")
                : location.pathname === "/planning"
                  ? t("planning")
                  : location.pathname === "/jom"
                    ? "JOM"
                    : location.pathname === "/programmation"
                      ? t("programmation")
                      : location.pathname === "/paiement"
                        ? t("paiement")
                        : location.pathname === "/contact"
                          ? t("contact")
                          : t("disciplines")}
          </span>
          <nav className={`bande-nav ${isMenuOpen ? "open" : ""}`}>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => {
                const currentPath = location.pathname.replace("/", "");
                const isSportPage = Object.values(sportsData).some(
                  (sport) => sport.slug === currentPath,
                );
                return isActive || isSportPage ? "nav-item active" : "nav-item";
              }}
            >
              {t("disciplines")}
            </NavLink>

            <NavLink
              to="/jom"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              JOM
            </NavLink>

            <NavLink
              to="/programmation"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("programmation")}
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("contact")}
            </NavLink>

            <NavLink
              to="/paiement"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("paiement")}
            </NavLink>
          </nav>
        </div>
      </div>
      {notInMainMenuItem && (
        <div className="sub-header-info">
          <div className="bande-content">
            {location.pathname !== "/" && (
              <button className="btn-back-minimal" onClick={() => navigate(-1)}>
                <ArrowLeft size={20} weight="bold" />
              </button>
            )}
            <span className="info-text">
              {t(currentSport?.categorie) || ""}{" "}
              {location.pathname.includes("reglement")
                ? "- " + t("reglements")
                : ""}
              {location.pathname.includes("equipe")
                ? " - " + t("listeJoueurs")
                : ""}
            </span>
          </div>
        </div>
      )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jom" element={<ReglementJOM />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/:slug" element={<Details />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/soccer-homme/reglement"
            element={<ReglementSoccerHomme />}
          />
          <Route
            path="/soccer-veteran/reglement"
            element={<ReglementSoccerVeteran />}
          />
          <Route
            path="/soccer-mixte/reglement"
            element={<ReglementSoccerMixed />}
          />
          <Route
            path="/soccer-kids/reglement"
            element={<ReglementSoccerKids />}
          />
          <Route
            path="/basketball-femme/reglement"
            element={<ReglementBasketballFemme />}
          />
          <Route
            path="/basketball-junior/reglement"
            element={<ReglementBasketballHomme />}
          />
          <Route
            path="/basketball-homme/reglement"
            element={<ReglementBasketballHomme />}
          />
          <Route
            path="/volleyball-homme/reglement"
            element={<ReglementVolleyballHomme />}
          />
          <Route
            path="/volleyball-femme/reglement"
            element={<ReglementVolleyballFemme />}
          />
          <Route path="/petanque/reglement" element={<ReglementPetanque />} />
          <Route path="/tennis-simple/reglement" element={<ReglementTennis />} />
          <Route path="/tennis-double/reglement" element={<ReglementTennis />} />
          <Route path="/:slug/equipe/:teamName" element={<TeamPlayers />} />
        </Routes>
      </main>
    </div>
  );
}

