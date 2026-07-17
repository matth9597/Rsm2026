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
import Directions from "./pages/Directions";
import { useLanguage } from "./LanguageContext";
import Contact from "./pages/Contact";
import Paiement from "./pages/Paiement";
import Stand from "./pages/Stand";
import Repas from "./pages/Repas";
import ReglementSoccerHomme from "./pages/reglementsSports/Soccer/ReglementSoccerHomme";
import ReglementSoccerVeteran from "./pages/reglementsSports/Soccer/ReglementSoccerVeteran";
import ReglementSoccerMixed from "./pages/reglementsSports/Soccer/ReglementSoccerMixed";
import ReglementSoccerKids from "./pages/reglementsSports/Soccer/ReglementSoccerKids";
import ReglementBasketballHomme from "./pages/reglementsSports/Basketball/ReglementBasketballHomme";
import ReglementBasketballFemme from "./pages/reglementsSports/Basketball/ReglementBasketballFemme";
import ReglementBasketballKids from "./pages/reglementsSports/Basketball/ReglementBasketballKids";
import ReglementVolleyballFemme from "./pages/reglementsSports/Volleyball/ReglementVolleyballFemme";
import ReglementVolleyballHomme from "./pages/reglementsSports/Volleyball/ReglementVolleyballHomme";
import ReglementPetanque from "./pages/reglementsSports/Other/ReglementPetanque";
import ReglementTennis from "./pages/reglementsSports/Tennis/ReglementTennis";
import ReglementTennisDeTable from "./pages/reglementsSports/Tennis/ReglementTennisDeTable";
import TeamPlayers from "./pages/TeamPlayers";
import { TIERS } from "./data/sponsors.js";

function SponsorTicker() {
  const allSponsors = TIERS.flatMap((tier) => tier.sponsors);
  const repeated = [
    ...allSponsors,
    ...allSponsors,
    ...allSponsors,
    ...allSponsors,
  ];

  return (
    <div className="sponsor-ticker">
      <div className="sponsor-ticker__track">
        {repeated.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className="sponsor-ticker__item"
          >
            <img
              src={s.logo}
              alt={s.name}
              className="sponsor-ticker__img"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span
              className="sponsor-ticker__fallback"
              style={{ display: "none" }}
            >
              {s.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

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
    //location.pathname !== "/directions" &&
    location.pathname !== "/contact" &&
    location.pathname !== "/paiement" &&
    location.pathname !== "/repas" &&
    location.pathname !== "/stand";

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
                      : // : location.pathname === "/directions"
                        //   ? t("directions")
                        location.pathname === "/paiement"
                        ? t("paiement")
                        : location.pathname === "/stand"
                          ? t("stand")
                          : location.pathname === "/contact"
                            ? t("contact")
                            : location.pathname === "/repas"
                              ? t("repas")
                              : t("disciplines")}
          </span>
          <nav className={`bande-nav ${isMenuOpen ? "open" : ""}`}>
            {/* <NavLink
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
            </NavLink> */}

            {/* <NavLink
              to="/directions"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("directions")}
            </NavLink> */}

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("contact")}
            </NavLink>

            {/* <NavLink
              to="/paiement"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("paiement")}
            </NavLink>
            <NavLink
              to="/stand"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("stand")}
            </NavLink>

            <NavLink
              to="/repas"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {t("repas")}
            </NavLink> */}
          </nav>
        </div>
      </div>

      <SponsorTicker />

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
          <Route path="/" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/jom" element={<ReglementJOM />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/:slug" element={<Details />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stand" element={<Stand />} />.
          <Route path="/repas" element={<Repas />} />
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
            path="/basketball-kids/reglement"
            element={<ReglementBasketballKids />}
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
          <Route
            path="/tennis-simple/reglement"
            element={<ReglementTennis />}
          />
          <Route
            path="/tennis-double/reglement"
            element={<ReglementTennis />}
          />
          <Route
            path="/tennis-de-table/reglement"
            element={<ReglementTennisDeTable />}
          />
          <Route path="/:slug/equipe/:teamName" element={<TeamPlayers />} /> */}
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logos">
            {TIERS.flatMap((tier) => tier.sponsors).map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="footer-logo-link"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="footer-logo-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span
                  className="footer-logo-fallback"
                  style={{ display: "none" }}
                >
                  {s.name}
                </span>
              </a>
            ))}
          </div>
          <p className="footer-copy">
            © 2026 RSM Ottawa-Gatineau.{" "}
            {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
