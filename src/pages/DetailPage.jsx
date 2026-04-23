import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const infos = location.state || { titre: "Vide", paragraphe: "", items: [] };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{infos.titre}</h1>
      <p>{infos.paragraphe}</p>
      <ul>{infos.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
      <button onClick={() => navigate('/')}>Retour</button>
    </div>
  );
}
