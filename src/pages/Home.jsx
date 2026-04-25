import { useNavigate } from "react-router-dom";
import { sportsData } from "../data";

const sportCategories = [
  {
    id: "soccer",
    label: "Soccer",
    icon: "soccer-ball.png",
    color: "#16a34a",
    colorLight: "#f0fdf4",
    colorBorder: "#bbf7d0",
    variants: [
      { id: "soccer_h", label: "Adulte Homme" },
      { id: "soccer_v", label: "Vétéran 40+" },
      { id: "soccer_m", label: "Mixte (Homme U15 / Femme)" },
      { id: "soccer_j", label: "Junior Kids U13" },
    ],
  },
  {
    id: "basketball",
    label: "Basketball",
    icon: "basketball.png",
    color: "#ea580c",
    colorLight: "#fff7ed",
    colorBorder: "#fed7aa",
    variants: [
      { id: "basketball_f", label: "Adulte Femme" },
      { id: "basketball_h", label: "Adulte Homme" },
      { id: "basketball_j", label: "Junior U15" },
      { id: "basketball_k", label: "Junior Kids" },
    ],
  },
  {
    id: "volleyball",
    label: "Volleyball",
    icon: "volleyball.png",
    color: "#537DFD",
    colorLight: "#e9eef7",
    colorBorder: "#B0C6FF",
    variants: [
      { id: "volleyball_f", label: "Adulte Femme" },
      { id: "volleyball_h", label: "Adulte Homme" },
    ],
  },
  {
    id: "autres",
    label: "Autres activités",
    icon: "other.png",
    color: "#7c3aed",
    colorLight: "#faf5ff",
    colorBorder: "#ddd6fe",
    variants: [
      { id: "tennis", label: "Tennis" },
      { id: "petanque", label: "Pétanque" },
      { id: "soraTononina", label: "Sora-Tononina" },
    ],
  },
];

export default function Home() {
  const navigate = useNavigate();

  const navSport = (id) => {
    const sportSlug = sportsData[id].slug;
    navigate(`/${sportSlug}`);
  };

  return (
    <div className="home-grid-wrapper">
      <div className="home-grid">
        {sportCategories.map((cat) => (
          <div
            key={cat.id}
            className="sport-card"
            style={{
              "--card-accent": cat.color,
              "--card-light": cat.colorLight,
              "--card-border": cat.colorBorder,
            }}
          >
            <div className="sport-card__header">
              <h2 className="sport-card__title">{cat.label}</h2>
                {cat.icon && (
                  <img 
                    src={`/icons/${cat.icon}`}
                    alt={cat.label} 
                    className="sport-card__icon" 
                  />
                )}
            </div>
            <div className="sport-card__buttons">
              {cat.variants.map((v) => (
                <button
                  key={v.id}
                  className="sport-card__btn"
                  onClick={() => navSport(v.id)}
                >
                  <span className="sport-card__btn-label">{v.label}</span>
                  <span className="sport-card__btn-arrow">→</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
