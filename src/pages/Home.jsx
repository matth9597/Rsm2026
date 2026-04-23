import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const data = { titre: "Ma Liste", paragraphe: "Infos envoyées", items: ["Élément 1", "Élément 2"] };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Accueil</h1>
      <button onClick={() => navigate('/detail', { state: data })}>
        Envoyer le dictionnaire
      </button>
    </div>
  );
}
