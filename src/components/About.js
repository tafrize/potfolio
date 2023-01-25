import '../styles/About.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function About() {
  return (
    <div  id="about" className="">

      

      <Container fluid className='p-3 pt-1 about overflow-hidden'>

      <h2 className='text-center mb-15 text-white mt-3' style={{paddingBottom:"1rem",paddingTop:'2rem'}}>À propos de moi</h2>

        <Row>

          <Col lg={12} md={12} sm={12} className='text-center justify-content-center' style={{color:"white"}}> 

            
            <p>Bonjour, bienvenue dans mon site portfolio.</p>
            <p>Je suis une étudiante en génie informatique passionnée par la création informatique et les nouvelles technologies. <br></br>
              Mon passe temps favori est de programmer des nouvelles solutions 
              en utilisant différents languages de programmation.
              
            </p>
          </Col>


        </Row> 

      </Container>
      
    </div>
  );
}

export default About;