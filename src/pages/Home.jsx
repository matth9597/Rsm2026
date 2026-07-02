import { useNavigate } from "react-router-dom";
import { sportsData } from "../data";
import { useLanguage } from "../LanguageContext";
import {
  BasketballIcon,
  VolleyballIcon,
  SoccerBallIcon,
  TennisBallIcon,
  PencilIcon,
  CheckerboardIcon,
  SphereIcon,
} from "@phosphor-icons/react";

import { TIERS } from "../data/sponsors.js";

const sportCategories = [
  {
    id: "soccer",
    label: "soccer",
    icon: SoccerBallIcon,
    color: "#9f1617",
    colorLight: "#f0fdf4",
    colorBorder: "#a85050",
    variants: [
      { id: "soccer_h", label: "adulteHommes" },
      { id: "soccer_v", label: "veterans" },
      { id: "soccer_m", label: "mixte" },
      { id: "soccer_k", label: "kidsU13" },
    ],
  },
  {
    id: "basketball",
    label: "basketball",
    icon: BasketballIcon,
    color: "#9f1617",
    colorLight: "#f0fdf4",
    colorBorder: "#a85050",
    variants: [
      { id: "basketball_f", label: "adulteFemmes" },
      { id: "basketball_h", label: "adulteHommes" },
      { id: "basketball_j", label: "juniorU15" },
      { id: "basketball_k", label: "kids" },
      { id: "basketball_v", label: "veterans" },
    ],
  },
  {
    id: "volleyball",
    label: "volleyball",
    icon: VolleyballIcon,
    color: "#9f1617",
    colorLight: "#f0fdf4",
    colorBorder: "#a85050",
    variants: [
      { id: "volleyball_f", label: "adulteFemmes" },
      { id: "volleyball_h", label: "adulteHommes" },
      { id: "volleyball_v", label: "veterans" },
    ],
  },
  {
    id: "tennis",
    label: "tennis",
    icon: TennisBallIcon,
    color: "#9f1617",
    colorLight: "#f0fdf4",
    colorBorder: "#a85050",
    variants: [
      { id: "tennis_s", label: "tennisSimple" },
      { id: "tennis_d", label: "tennisDouble" },
      { id: "tableTennis", label: "tennisDeTable" },
    ],
  },
  {
    id: "autres",
    label: "autreActivites",
    icon: [SphereIcon, PencilIcon],
    color: "#9f1617",
    colorLight: "#f0fdf4",
    colorBorder: "#a85050",
    variants: [
      { id: "petanque", label: "petanque" },
      { id: "soraTononina", label: "soraTononina" },
      { id: "marche", label: "marche5Km" },
      { id: "zumba", label: "zumba" },
    ],
  },
];

function SponsorLogo({ name, logo, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="sponsor-logo-link"
      title={name}
    >
      <div className="sponsor-logo-wrapper">
        <img
          src={logo}
          alt={name}
          className="sponsor-logo-img"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="sponsor-logo-fallback" style={{ display: "none" }}>
          {name}
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

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

      {/* ── Sponsors section ── */}
      <div className="sponsors-section">
        <h2 className="sponsors-title">
          {lang === "fr" ? "Nos partenaires" : "Our partners"}
        </h2>
        <div className="sponsors-tiers">
          {TIERS.map((tier) => (
            <div key={tier.id} className="sponsors-tier">
              <div
                className="sponsors-tier__label"
                style={{ color: tier.color, borderColor: tier.borderColor }}
              >
                {lang === "fr" ? tier.labelFR : tier.labelEN}
              </div>
              <div
                className="sponsors-tier__logos"
                style={{
                  background: tier.bgColor,
                  borderColor: tier.borderColor,
                }}
              >
                {tier.sponsors.map((s) => (
                  <SponsorLogo key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
