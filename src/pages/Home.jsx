import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const navSport = (sport, categorie) => {
    navigate('/details', { 
      state: { 
        titre: `${sport} ${categorie}`, 
      } 
    });
  };

  return (
    <div className="app-container">

        <div key='Soccer' className="sport-group">
            <h2>Soccer</h2>
            <div className="button-group">
            <button onClick={() => navSport('Soccer', 'Homme')}>Adulte Femme</button>
            <button onClick={() => navSport('Soccer', 'Femme')}>Adulte Homme</button>
            <button onClick={() => navSport('Soccer', 'Junior')}>Junior Kids U13</button>
            <button onClick={() => navSport('Soccer', 'Mixte')}>Mixte (Homme U15 / Femme)</button>
            </div>
        </div>
        
        <div key='Basketball' className="sport-group">
            <h2>Basketball</h2>
            <div className="button-group">
            <button onClick={() => navSport('Basketball', 'Homme')}>Adulte Femme</button>
            <button onClick={() => navSport('Basketball', 'Femme')}>Adulte Homme</button>
            <button onClick={() => navSport('Basketball', 'Junior')}>Junior Kids U14</button>
            </div>
        </div>


        <div className="sport-group">
            <h2>Autres activités</h2>
            <div className="button-group">
            <button onClick={() => navSport('Tennis', '')}>Tennis</button>
            <button onClick={() => navSport('Pétanque', '')}>Pétanque</button>
            <button onClick={() => navSport('Sora-Tononina', '')}>Sora-Tononina</button>
            </div>
        </div>
    </div>
  );
}
