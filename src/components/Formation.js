import '../styles/Formation.css';
import Ecole from './Ecole.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Formation() {
  return (
    <div id='formations' className='formation'>


     <h2 className="text-center mb-15" style={{paddingBottom:"4rem"}}>Formations</h2> 
    <Container >

      
      
      <Row>

        <Col xl={4} lg={6} md={12} className='order-2 order-lg-1 d-flex flex-column align-items-center g-5'>
          
          <a target="_blank" href="https://www.umi.ac.ma/?page_id=373" rel="noopener noreferrer" style={{color:"black",textDecorationLine:'none'}}>
          <Ecole src="https://www.unilim.fr/pages_perso/noureddine.igbida/ecole_errachidia/fst_errachidia.jpg"
          nom=" Faculté des Sciences et Techniques "
          description="Classe préparatoire "
          annee="2018/2021"
          />
          </a>
        </Col>

        <Col xl={4} lg={6} md={12}  className='order-2 order-lg-1 d-flex flex-column align-items-center g-5'>  
           <a target="_blank" href="https://www.heh.be/" rel="noopener noreferrer" style={{color:"black",textDecorationLine:'none'}}>
            <Ecole src="https://www.heh.be/upload/image/ES/ecolesociale_ext-10.jpg"
            nom="Haute école en Hainaut "
            description=" Mobilité Erasmus+ "
            annee="2023"
            />
            </a>
            
        </Col>


        <Col xl={4} lg={6} md={12} className='order-2 order-lg-1 d-flex flex-column align-items-center  g-5'>

        
        <a target="_blank" href="https://eilco.univ-littoral.fr/" rel="noopener noreferrer" style={{color:"black",textDecorationLine:'none'}}>
            <Ecole src="https://eilco.univ-littoral.fr/wp-content/uploads/2022/01/CAMPUS-CALAIS-EILCO_comp-1024x704.jpg"
            nom="École d'Ingénieurs du Littoral Côte d'Opale "
            description="Cycle d'ingénieur informatique"
            annee="2021/2024"
            />
        </a>
      
        </Col>
    
        </Row>


      
    </Container>
    </div>
  );
}

export default Formation;