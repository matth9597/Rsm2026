import { useLocation, useNavigate } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const infos = location.state || { titre: " " };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{infos.titre}</h1>
    </div>
  );
}
