import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo-64x38.png';

function Footer() {
  return (
    <footer>
      <Link to="/">

        <div className="footer-container">
          <div>
            <img className='logo-bas' src={Logo} alt="Avatar" width="auto" height={38} />
          </div>
          <p>
            2024 <span>|</span> Jérôme Silmain
          </p>
        </div>
      </Link>

    </footer>
  );
}

export default Footer;