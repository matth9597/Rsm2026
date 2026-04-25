import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const navSport = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="app-container">
      <div className="sport-group">
        <h2>Soccer</h2>
        <div className="button-group">
          <button onClick={() => navSport("soccer_adulte_femme")}>
            Adulte Femme
          </button>
          <button onClick={() => navSport("soccer_adulte_homme")}>
            Adulte Homme
          </button>
          <button onClick={() => navSport("soccer_junior")}>
            Junior Kids U13
          </button>
          <button onClick={() => navSport("soccer_mixte")}>
            Mixte (Homme U15 / Femme)
          </button>
        </div>
      </div>

      <div className="sport-group">
        <h2>Basketball</h2>
        <div className="button-group">
          <button onClick={() => navSport("basketball_adulte_femme")}>
            Adulte Femme
          </button>
          <button onClick={() => navSport("basketball_adulte_homme")}>
            Adulte Homme
          </button>
          <button onClick={() => navSport("basketball_junior")}>
            Junior Kids U14
          </button>
        </div>
      </div>

      <div className="sport-group">
        <h2>Autres activités</h2>
        <div className="button-group">
          <button onClick={() => navSport("tennis")}>Tennis</button>
          <button onClick={() => navSport("petanque")}>Pétanque</button>
          <button onClick={() => navSport("sora_tononina")}>
            Sora-Tononina
          </button>
        </div>
      </div>
    </div>
  );
}
