import { useParams } from 'react-router-dom';
import { sportsData } from '../data';

export default function Details() {

  const { slug } = useParams();
  const info = Object.values(sportsData).find(s => s.slug === slug);

  if (!info) return <div className="app-container">Sport non trouvé ou lien invalide.</div>;

  return (
    <div className="app-container" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
      
      <div className="button-group-details">
        {info.lienInscription && (
          <button className="btn-inscription" onClick={() => window.open(info.lienInscription, "_blank")}>
            S'inscrire
          </button>
        )}
        
        {info.lienHoraires && (
          <button className="btn-action" onClick={() => window.open(info.lienHoraires, "_blank")}>
            Voir les Horaires
          </button>
        )}
      </div>

      <div className="details-list" style={{ width: '100%' }}>
        {info.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <strong>{section.nom} : </strong>
            {section.texte && <span>{section.texte}</span>}
            {section.lien && (
              <a href={section.lien} target="_blank" rel="noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>
                 Consulter ici
              </a>
            )}
          </div>
        ))}
      </div>

      {info.equipes && info.equipes.length > 0 && (
        <div style={{ marginTop: '30px', borderTop: '1px solid #ddd', paddingTop: '20px', width: '100%' }}>
          <strong>Équipes inscrites :</strong>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            {info.equipes.map((eq, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>
                {eq.nom} — <a href={eq.lienForm} target="_blank" rel="noreferrer">Liste des joueurs</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
