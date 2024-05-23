import './style.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Error() {
  useEffect(() => {
    document.title = 'Error';
  }, []);

  return (
    <main className="container-error">
      <section className="error">
        <div className="block-content-container">
          <div className="number-error">404</div>
          <div className="message-error">
            La page que vous demandez n'existe pas.
          </div>
          <Link className="link-error" to="/">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Error;