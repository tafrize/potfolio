import '../styles/Formation.css';
import Ecole from './Ecole.js';

function Formation() {
  return (
    <div id="formations" className="formation">

        
         <h2>Formations</h2>

        <div className="formation_section">

            <Ecole src="https://www.unilim.fr/pages_perso/noureddine.igbida/ecole_errachidia/fst_errachidia.jpg"
            nom=" Faculté des Sciences et Techniques "
            description="Classe préparatoire "
            annee="2018/2021"
            />

            <Ecole src="https://www.heh.be/upload/image/ES/ecolesociale_ext-10.jpg"
            nom="Haute école en Hainaut "
            description=" Mobilité Erasmus+ "
            annee="2023"
            />

            <Ecole src="https://eilco.univ-littoral.fr/wp-content/uploads/2022/01/CAMPUS-CALAIS-EILCO_comp-1024x704.jpg"
            nom="École d'Ingénieurs du Littoral Côte d'Opale "
            description="Cycle d'ingénieur informatique"
            annee="2021/2024"
            />
     
            
        </div>


      
    </div>
  );
}

export default Formation;