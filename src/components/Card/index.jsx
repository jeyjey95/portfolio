import './style.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Link to={`/project/${props.id}`} className="card">
      <div className="card-content">
        <img
          src={props.banner}
          alt={`Bannière du projet ${props.name}`}
          className="banner-card"
        />
        <img
          src={props.logo}
          alt={`Logo du projet ${props.name}`}
          className="logo-card"
        />
      </div>
    </Link>
  );
}

export default Card;