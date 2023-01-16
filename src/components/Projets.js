import '../styles/Projets.css';
import Challenge from './Challenge.js';
import Airbnb from '../assets/airbnb.png';
import Jungle from '../assets/jungle.png';
import Biblio from '../assets/biblio.png';
import Country from '../assets/country.png';
import Kemtchop from '../assets/kemtchop.png';
import Initials from '../assets/initialsjobs.png';



function Projets() {
  return (
    <div id="projets" className="projets">

        
         <h2>Mes Projets</h2>

        <div className="projets_section">

           <Challenge src={Biblio}
            nom="Gestion de bibliothèque"
            description=" "
            />
            
            
            <Challenge src={Kemtchop}
            nom="Site de livraison Kemtchop"
            description=" "     
            />

            <Challenge src={Country}
            nom="Application de ventes"
            description=" "     
            />

            <Challenge src={Jungle}
            nom="Vente de plantes"
            description=" "       
            />

            <Challenge src={Initials}
            nom="Site de freelance"
            description=" "
            />
            
            
            <Challenge src={Airbnb}
            nom="Application Airbnb"
            description=" "     
            />

                       
        </div>


      
    </div>
  );
}

export default Projets;