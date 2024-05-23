import './style.css';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    document.title = 'Jérôme Silmain - Contact';
  }, []);

  const email = 'silmain@live.fr';

  return (
    <main className="container-contact">
      <section className="contact">
        <div className="block-content-container">
          <div className="block-content">
            <h2>Contactez-moi</h2>
            <p>
              Si vous avez des questions, souhaitez discuter d'un projet ou tout
              simplement partager des idées, n'hésitez pas à me contacter par
              e-mail à l'adresse suivante :{' '}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>
            <p>
              Je m'efforce de répondre rapidement, vous recevrez donc une
              réponse de ma part dans les plus brefs délais.
            </p>
            <p>Merci et à bientôt !</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;