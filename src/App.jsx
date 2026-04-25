import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';
import { sportsData } from './data';

export default function App() {
  const location = useLocation();
  const sportId = location.state?.id;

  const slugFromUrl = location.pathname.split('/')[1]; 
  const currentSport = Object.values(sportsData).find(s => s.slug === slugFromUrl);
  const texteBande = location.pathname === '/' ? 'Disciplines' : (currentSport?.categorie || 'DÉTAILS');

  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="header-content">
          <img src="/logo.png" alt="Logo" className="logo" />
          <span className="brand-name">RSM Ottawa 2026</span>
        </div>
      </header>

      <div className="sub-header-bande">
        {texteBande}
      </div>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug/details" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}
