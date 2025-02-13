import '../styles/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AboutImage from '../assets/about.png'; 
import ground from '../assets/ground3.png'; 

function About() {
  return (
    <div id="about" className="about-section">
      <Container fluid className='p-3 pt-1 about overflow-hidden'>
        <h2 className='text-center text-black mt-3 title-about'>À propos de moi</h2>
        <Row className="align-items-center ligne">
          <Col lg={6} md={12} className="text-center ">
            <Image src={ground} alt="À propos de moi" fluid className="about-img" />
          </Col>
          <Col lg={6} md={12} className="text-black text-content">
            <p>
            Jeune ingénieure spécialisée en informatique, 
            j’ai eu l’opportunité de renforcer mes compétences sur des projets à forte envergure.
            Grâce à ces expériences, j’ai pu développer une expertise approfondie et affiner mes capacités d’adaptation face à des défis complexes.
            Je suis curieuse, responsable, avec un esprit collaboratif, et je stimule activement mes connaissances. 
            Mon approche proactive me permet d’explorer en permanence de nouvelles technologies et 
            d’innover dans les solutions que je propose.
            </p>
          </Col>
        </Row>
   
      </Container>
    </div>
  );
}

export default About;
