import { useNavigate } from "react-router-dom";
import { sportsData } from "../data";
import {
  BasketballIcon,
  VolleyballIcon,
  SoccerBallIcon,
  TennisBallIcon,
  PencilIcon,
  CheckerboardIcon,
  SphereIcon,
} from "@phosphor-icons/react";

const sportCategories = [
  {
    id: "soccer",
    label: "Soccer",
    icon: SoccerBallIcon,
    color: "#16a34a",
    colorLight: "#f0fdf4",
    colorBorder: "#14ab02",
    variants: [
      { id: "soccer_h", label: "Adulte Hommes" },
      { id: "soccer_v", label: "Vétérans 40+" },
      { id: "soccer_m", label: "Mixte (Hommes U15 / Femmes)" },
      { id: "soccer_j", label: "Kids U13" },
    ],
  },
  {
    id: "basketball",
    label: "Basketball",
    icon: BasketballIcon,
    color: "#ea580c",
    colorLight: "#fff7ed",
    colorBorder: "#d77300",
    variants: [
      { id: "basketball_f", label: "Adulte Femmes" },
      { id: "basketball_h", label: "Adulte Hommes" },
      { id: "basketball_j", label: "Junior U15" },
      { id: "basketball_k", label: "Kids" },
    ],
  },
  {
    id: "volleyball",
    label: "Volleyball",
    icon: VolleyballIcon,
    color: "#537DFD",
    colorLight: "#e9eef7",
    colorBorder: "#545efc",
    variants: [
      { id: "volleyball_f", label: "Adulte Femmes" },
      { id: "volleyball_h", label: "Adulte Hommes" },
    ],
  },
  {
    id: "autres",
    label: "Autres activités",
    icon: [TennisBallIcon, SphereIcon, PencilIcon],
    color: "#7c3aed",
    colorLight: "#faf5ff",
    colorBorder: "#9b3aff",
    variants: [
      { id: "tennis", label: "Tennis" },
      { id: "petanque", label: "Pétanque" },
      { id: "soraTononina", label: "Sora-Tononina" },
      { id: "tableTennis", label: "Tennis de Table (à confirmer)" },
      { id: "marche", label: "Marche 5 km (à confirmer)" },
      { id: "zumba", label: "Zumba (à confirmer)" },
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
              {cat.icon &&
                (Array.isArray(cat.icon) ? (
                  <div className="sport-card__icon-group">
                    {cat.icon.map((Icon, index) => (
                      <Icon
                        key={index}
                        color="#ffffff"
                        weight="duotone"
                        className="sport-card__icon"
                      />
                    ))}
                  </div>
                ) : (
                  (() => {
                    const Icon = cat.icon;
                    return (
                      <Icon
                        color="#ffffff"
                        weight="duotone"
                        className="sport-card__icon"
                      />
                    );
                  })()
                ))}
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
