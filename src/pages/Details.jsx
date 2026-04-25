import { useParams } from "react-router-dom";
import { sportsData } from "../data";

export default function Details() {
  const { slug } = useParams();
  const info = Object.values(sportsData).find((s) => s.slug === slug);

  if (!info)
    return (
      <div className="app-container">Sport non trouvé ou lien invalide.</div>
    );

  return (
    <div className="details-wrapper">
      {/* ── Action buttons ── */}
      <div className="details-actions">
        {info.lienInscription && (
          <button
            className="btn-inscription"
            onClick={() => window.open(info.lienInscription, "_blank")}
          >
            ✦ S'inscrire
          </button>
        )}
        {info.lienHoraires && (
          <button
            className="btn-action"
            onClick={() => window.open(info.lienHoraires, "_blank")}
          >
            Voir les Horaires
          </button>
        )}
      </div>

      {/* ── Info sections ── */}
      {info.sections && info.sections.length > 0 && (
        <div className="details-card">
          <p className="details-card__label">Informations</p>
          {info.sections.map((section, index) => (
            <div key={index} className="section-row">
              <span className="section-row__key">{section.nom}</span>
              {section.texte && (
                <span className="section-row__value">{section.texte}</span>
              )}
              {section.lien && (
                <a
                  href={section.lien}
                  target="_blank"
                  rel="noreferrer"
                  className="section-row__link"
                >
                  Consulter ici →
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Teams ── */}
      {info.equipes && info.equipes.length > 0 && (
        <div className="details-card">
          <p className="details-card__label">Équipes inscrites</p>
          {info.equipes.map((eq, i) => (
            <div key={i} className="team-row">
              <span className="team-row__name">{eq.nom}</span>
              <a
                href={eq.lienForm}
                target="_blank"
                rel="noreferrer"
                className="team-row__link"
              >
                Liste des joueurs →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
