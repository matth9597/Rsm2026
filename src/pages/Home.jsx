import { useNavigate } from 'react-router-dom';
import { sportsData } from '../data';

export default function Home() {
  const navigate = useNavigate();

const navSport = (id) => {
  const sportSlug = sportsData[id].slug; 
  navigate(`/${sportSlug}/details`);
};

  return (
    <div className="app-container">

        <div key='Soccer' className="sport-group">
            <h2>Soccer</h2>
            <div className="button-group">
              <button onClick={() => navSport('soccer_f')}>Adulte Femme</button>
              <button onClick={() => navSport('soccer_h')}>Adulte Homme</button>
              <button onClick={() => navSport('soccer_j')}>Junior Kids U13</button>
              <button onClick={() => navSport('soccer_m')}>Mixte (Homme U15 / Femme)</button>
            </div>
        </div>
        
        <div key='Basketball' className="sport-group">
            <h2>Basketball</h2>
            <div className="button-group">
            <button onClick={() => navSport('basketball_f')}>Adulte Femme</button>
            <button onClick={() => navSport('basketball_h')}>Adulte Homme</button>
            <button onClick={() => navSport('basketball_j')}>Junior Kids U14</button>
            </div>
        </div>


        <div className="sport-group">
            <h2>Autres activités</h2>
            <div className="button-group">
              <button onClick={() => navSport('tennis')}>Tennis</button>
              <button onClick={() => navSport('petanque')}>Pétanque</button>
              <button onClick={() => navSport('soraTononina')}>Sora-Tononina</button>
            </div>
        </div>
    </div>
  );
}
