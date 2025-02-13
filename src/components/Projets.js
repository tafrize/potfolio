import '../styles/Projets.css';
import Container from 'react-bootstrap/Container';

import Airbnb from '../assets/airbnb.png';
import Jungle from '../assets/jungle.png';
import Biblio from '../assets/biblio.png';
import Country from '../assets/country.png';
import Kemtchop from '../assets/kemtchop.png';
import Initials from '../assets/initialsjobs.png';
import Meteo from '../assets/meteo.png';
import Fleurs from '../assets/fleurs.png';
import Refectory from '../assets/refectory.png';
import Ecommerce from '../assets/ecommerce.png';

const projects = [
  { src: Meteo, nom: "Station météo", lien: "https://github.com/tafrize" },
  { src: Airbnb, nom: "Application Airbnb", lien: "https://github.com/tafrize" },
  { src: Refectory, nom: "Site de restauration", lien: "https://github.com/tafrize" },
  { src: Fleurs, nom: "Vente de plantes", lien: "https://github.com/tafrize" },
  { src: Kemtchop, nom: "Site de livraison Kemtchop", lien: "https://github.com/tafrize" },
  { src: Country, nom: "Application de ventes", lien: "https://github.com/tafrize" },
  { src: Biblio, nom: "Gestion de bibliothèque", lien: "https://github.com/tafrize" },
  { src: Initials, nom: "Site de freelance", lien: "https://github.com/tafrize" },
  { src: Ecommerce, nom: "Site E-Commerce", lien: "https://github.com/tafrize" },
];

function Projets() {
  return (
    <section id="projets" className="bg-light py-5">
      <Container>
        <div className="text-center">
          <h2 className="display-5">Mon Portfolio</h2>
          <p className="text-secondary lead fs-4">
            Découvrez mes réalisations innovantes dans différents domaines.
          </p>
          <hr className="w-50 mx-auto mb-5 border-dark-subtle" />
        </div>
        <div className="masonry-grid">
          {projects.map((project, index) => (
            <div key={index} className="masonry-item">
              <figure className="project-card">
                <img src={project.src} className="img-fluid" alt={project.nom} />
                <figcaption className="project-info">
                  <a href={project.lien} target="_blank" rel="noopener noreferrer" className="project-link">
                    {project.nom}
                  </a>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projets;
