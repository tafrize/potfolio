import '../styles/Projets.css';
import Challenge from './Challenge.js';
import Airbnb from '../assets/airbnb.png';
import Jungle from '../assets/jungle.png';
import Biblio from '../assets/biblio.png';
import Country from '../assets/country.png';
import Kemtchop from '../assets/kemtchop.png';
import Initials from '../assets/initialsjobs.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Projets() {
  return (
    <div id="projets" className="projets">

      <h2 class="text-center mb-15" style={{paddingBottom:"4rem"}}>Mes projets</h2> 

      <Container >

      <Row >

        <Col xl={4} lg={6} md={12} className='order-3 order-lg-1 d-flex flex-column align-items-center g-5'>
           
           <Challenge src={Biblio}
            nom="Gestion de bibliothèque"
            description=" "
            />
           

        </Col>
            
        <Col xl={4} lg={6} md={12} className='order-3 order-lg-1 d-flex flex-column align-items-center g-5'>  
            <Challenge src={Kemtchop}
            nom="Site de livraison Kemtchop"
            description=" "     
            />
        </Col>

        <Col xl={4} lg={6} md={12} className='order-3 order-lg-1 d-flex flex-column align-items-center g-5'>
            <Challenge src={Country}
            nom="Application de ventes"
            description=" "     
            />

          </Col>

          <Col xl={4} lg={6} md={12} className='order-3 order-lg-1 d-flex flex-column align-items-center g-5'>
            <Challenge src={Jungle}
            nom="Vente de plantes"
            description=" "       
            />

          </Col>

           <Col xl={4} lg={6} md={12} className='order-3 order-lg-1 d-flex flex-column align-items-center g-5'>

            <Challenge src={Initials}
            nom="Site de freelance"
            description=" "
            />
            </Col>  

            <Col xl={4} lg={6} md={12} className='order-3 order-lg-1 d-flex flex-column align-items-center g-5'>
            
            <Challenge src={Airbnb}
            nom="Application Airbnb"
            description=" "     
            />

            </Col>



      </Row> 
      </Container>             
      


      
    </div>
  );
}

export default Projets;