import '../styles/About.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function About() {
  return (
    <div  id="about" className="about ">

      <Container fluid>

        <Row>

          <Col lg={12} md={12} sm={12} className='text-center justify-content-center' style={{color:"white"}}> 

            <h2 style={{paddingBottom:"1rem"}}>About me</h2>
            <p>Hello, welcome to my portfolio website.</p>
            <p> I'm a software engineering student passionate about software
              creation and new technologies. <br></br>
              My favorite hobby is programming new solutions 
              using different programming languages.
              
            </p>
          </Col>


        </Row> 

      </Container>
      
    </div>
  );
}

export default About;