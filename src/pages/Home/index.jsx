import './style.css';
import { useEffect } from 'react';
import CardST from '../../components/Card-ST';
import { technosList } from '../../datas/technosList';
import { toolsList } from '../../datas/toolsList';
import LogoGitHub from '../../assets/images/tools/github-9179ef.svg';
import LogoLinkeDin from '../../assets/images/tools/linkedin.png';


function Home() {
  useEffect(() => {
    document.title = 'Jérôme Silmain - Portfolio';
  }, []);

  return (
    <main className="container-home">
      <section className="presentation">
        <div className="block-content-container">
          <div className="block-content">
            <h1>Développeur Web Front-End Junior</h1>
            <p>
              Bienvenue sur mon portfolio ! Je suis Jérôme Silmain, développeur web front-end junior passionné par la création d'expériences web attrayantes et fonctionnelles.
            </p>
            <p>
              Actuellement en cours de formation de{' '}
              <a
                className="link-presentation"
                href="https://openclassrooms.com/fr/paths/717-developpeur-web"
                target="_blank"
                rel="noreferrer"
              >
                Développeur Web
              </a>{' '}
              chez OpenClassrooms, je suis très enthousiaste à l'idée d'utiliser
              mes compétences nouvellement acquises en contribuant à des projets
              passionnants.
            </p>
            <div className='container-logo'>
              <a
                href="https://github.com/jeyjey95"
                className="btn-link-presentation"
                id='btn-link-gh-presentation'
                target="_blank"
                rel="noreferrer"
              >
                <p className="legend-logo-github-presentation">Mon GitHub</p>
                <img
                  className="logo-github-presentation"
                  src={LogoGitHub}
                  alt="Lien GitHub"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jerome-slm-5b145825a/"
                className="btn-link-presentation"
                id='btn-link-in-presentation'
                target="_blank"
                rel="noreferrer"
              >
                <p className="legend-logo-github-presentation">Mon LinkedIn </p>
                <img
                  className="logo-github-presentation"
                  src={LogoLinkeDin}
                  alt="Lien LinkedIn"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="block-content-container">
          <div className="block-content">
            <h2>Mes technos</h2>
            <ul className="skills-container">
              {technosList.map((e) => (
                <CardST key={e.id} name={e.name} picture={e.picture} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="tools">
        <div className="block-content-container">
          <div className="block-content">
            <h2>Mes outils</h2>
            <ul className="tools-container">
              {toolsList.map((e) => (
                <CardST key={e.id} name={e.name} picture={e.picture} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;