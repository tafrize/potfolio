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
import { FiExternalLink } from "react-icons/fi"; 


const projects = [
  { src: Ecommerce, nom: "Site E-Commerce", outils:"Java, Servlet, MySQL, JSP", lien: "https://github.com/tafrize/store-online/tree/main/CatalogueProject/src/main" },
  { src: Initials, nom: "Site de freelance", outils:"Springboot, Java, Angular", lien: "https://github.com/tafrize?tab=repositories" },
  { src: Kemtchop, nom: "Site de livraison Kemtchop",outils:"React, Bootstrap, HTML, CSS", lien: "https://github.com/tafrize?tab=repositories" },
  { src: Fleurs, nom: "Vente de plantes", outils:"React, Bootstrap, HTML, CSS", lien: "https://github.com/tafrize/maison-de-jungle" },
  { src: Refectory, nom: "Site de restauration",outils:"PHP, Javascript, HTML, CSS", lien: "https://github.com/tafrize/refectory" },
  { src: Country, nom: "Application de ventes",outils:"CMS, Wordpress, css", lien: "https://github.com/tafrize?tab=repositories" },
  { src: Biblio, nom: "Gestion de bibliothèque",outils:"PHP, Symphony, HTML, CSS", lien: "https://github.com/tafrize?tab=repositories" },
  { src: Airbnb, nom: "Application Airbnb",outils:"React, Bootstrap, HTML, CSS", lien: "https://github.com/tafrize/airbnb-reactApp" },
  { src: Meteo, nom: "Station météo",outils:"Arduino, Firebase, Angular, TypeScript", lien: "https://stationmeteoapp.web.app/" },

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
                    <span target="_blank" rel="noopener noreferrer" className="project-name">
                      {project.nom}
                    </span>
                    <a href={project.lien } target="_blank" rel="noopener noreferrer" className="project-link"><FiExternalLink className="icon-link" /></a> 

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
