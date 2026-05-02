import { useNavigate } from "react-router-dom";
import { sportsData } from "../data";
import { useLanguage } from '../LanguageContext';
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
    label: "soccer",
    icon: SoccerBallIcon,
    color: "#16a34a",
    colorLight: "#f0fdf4",
    colorBorder: "#14ab02",
    variants: [
      { id: "soccer_h", label: "adulteHommes" },
      { id: "soccer_v", label: "veterans" },
      { id: "soccer_m", label: "mixe" },
      { id: "soccer_j", label: "kidsU13" },
    ],
  },
  {
    id: "basketball",
    label: "basketball",
    icon: BasketballIcon,
    color: "#ea580c",
    colorLight: "#fff7ed",
    colorBorder: "#d77300",
    variants: [
      { id: "basketball_f", label: "adulteFemmes" },
      { id: "basketball_h", label: "adulteHommes" },
      { id: "basketball_j", label: "juniorU15" },
      { id: "basketball_k", label: "kids" },
    ],
  },
  {
    id: "volleyball",
    label: "volleyball",
    icon: VolleyballIcon,
    color: "#537DFD",
    colorLight: "#e9eef7",
    colorBorder: "#545efc",
    variants: [
      { id: "volleyball_f", label: "adulteFemmes" },
      { id: "volleyball_h", label: "adulteHommes" },
    ],
  },
  {
    id: "autres",
    label: "autreActivites",
    icon: [TennisBallIcon, SphereIcon, PencilIcon],
    color: "#7c3aed",
    colorLight: "#faf5ff",
    colorBorder: "#9b3aff",
    variants: [
      { id: "tennis", label: "tennis" },
      { id: "petanque", label: "petanque" },
      { id: "soraTononina", label: "soraTononina" },
      { id: "tableTennis", label: "tennisDeTable" },
      { id: "marche", label: "marche5Km" },
      { id: "zumba", label: "zumba" },
    ],
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { lang, toggleLang, t } = useLanguage();

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
              <h2 className="sport-card__title">{t(cat.label)}</h2>
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
                  <span className="sport-card__btn-label">{t(v.label)}</span>
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
