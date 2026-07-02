import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Storefront } from "@phosphor-icons/react";
import { useLanguage } from "../LanguageContext";

export default function Stand() {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const standInfo = {
    lienInscription:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIcsA7MKVgq3UJKtBXR8U49jEEkwKe7bFYS2ncDXsGLonLYQ/viewform?usp=sharing&ouid=110488258691309592409",
    sections: [
      {
        nom: "type",
        texteFR: "Stand Extérieur",
        texteEN: "Outdoor Booth",
      },
      {
        nom: "equipement",
        texteFR:
          "Stand équipé d'une table blanche (30” x 72”) et deux chaises pliantes",
        texteEN:
          "Stand equipped with one white table (30” x 72”) and two folding chairs",
      },
      {
        nom: "lieux",
        texteFR: "Collège Mont-Bleu et Collège Heritage",
        texteEN: "Mont-Bleu College and Heritage College",
      },
      {
        nom: "contact",
        texteFR: "Comité organisateur (rsmottawagatineau@gmail.com)",
        texteEN: "Organizing Committee (rsmottawagatineau@gmail.com)",
      },
      {
        nom: "paiement",
        texteFR:
          "Virement Interac : rsmottawagatineau@gmail.com (Mot de passe si requis : RSM2026$)",
        texteEN:
          "Interac e-Transfer: rsmottawagatineau@gmail.com (Password if required: RSM2026$)",
      },
    ],
  };

  return (
    <div className="details-wrapper">
      {/* ── Action buttons ── */}
      <div className="details-actions">
        <button
          className="btn-inscription individuelle"
          onClick={() => window.open(standInfo.lienInscription, "_blank")}
        >
          <Storefront size={21} color="#ffffff" weight="duotone" />
          {t("sInscrire")}
        </button>
      </div>

      {/* ── Info sections ── */}
      {standInfo.sections && standInfo.sections.length > 0 && (
        <div className="details-card">
          <p className="details-card__label">{t("informations")}</p>
          {standInfo.sections.map((section, index) => (
            <div key={index} className="section-row">
              <span className="section-row__key">{t(section.nom)}</span>
              <span className="section-row__value">
                {lang === "fr" ? section.texteFR : section.texteEN}
              </span>
              {section.lien && section.nom === "format" && (
                <button
                  onClick={() => navigate(section.lien.url)}
                  className="section-row__link"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {lang === "fr" ? section.lien.texteFR : section.lien.texteEN}{" "}
                  →
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
