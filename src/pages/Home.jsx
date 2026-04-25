import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();
  const dataA = { titre: "Fruits", paragraphe: "Frais du jour", items: ["Pomme", "Poire"] };
  const dataB = { titre: "Légumes", paragraphe: "Bio et locaux", items: ["Carotte", "Salade"] };

  return (
    <div className="app-container">
      <h1>Mon Site Mobile-Ready</h1>
      <div className="button-group">
        <button onClick={() => navigate('/detail', { state: dataA })}>Voir Fruits</button>
        <button onClick={() => navigate('/detail', { state: dataB })}>Voir Légumes</button>
      </div>
    </div>
  );
}
