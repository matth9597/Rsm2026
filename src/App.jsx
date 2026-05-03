import { Routes, Route, useLocation, useNavigate, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import { ArrowLeft } from "@phosphor-icons/react";
import { sportsData } from "./data";
import ReglementJOM from './pages/ReglementJOM';
import Planning from './pages/Planning';
import { useLanguage } from './LanguageContext';
import ReglementSoccer from './pages/reglementsSports/ReglementSoccer';

export default function App() {
  const { lang, toggleLang, t } = useLanguage(); 
  const location = useLocation();
  const slugFromUrl = location.pathname.split("/")[1];
  const currentSport = Object.values(sportsData).find(
    (s) => s.slug === slugFromUrl,
  );
  const navigate = useNavigate();
  const notInMainMenuItem = location.pathname !== "/" && location.pathname !== "/jom" && location.pathname !== "/planning"

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
          <div className="lang-switcher">
            <span className={lang === 'fr' ? 'active' : ''} onClick={() => lang !== 'fr' && toggleLang()}>FR</span>
            <span className="separator">|</span>
            <span className={lang === 'en' ? 'active' : ''} onClick={() => lang !== 'en' && toggleLang()}>EN</span>
          </div>
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
              {t('disciplines')}
            </NavLink>

            <NavLink 
              to="/jom" 
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              JOM
            </NavLink>

            <NavLink 
              to="/planning" 
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              {t('programmation')}
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
                <span className="info-text">{t(currentSport?.categorie) || ""} {location.pathname.includes("reglement") ? "- "+ t("reglements"):"" }</span>
            </div>
          </div>
        )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jom" element={<ReglementJOM />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/:slug" element={<Details />} />
          <Route path="/soccer-homme/reglement" element={<ReglementSoccer />} />
        </Routes>
      </main>
    </div>
  );
}