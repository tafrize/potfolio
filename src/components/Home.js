import { useState } from 'react';
import '../styles/Home.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  const [text, setText] = useState('');

  const onButtonClick = () => {
    fetch('Developpeuse Java Full Stack.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'ANLISAIDTafrize.pdf';
            alink.click();
        })
    })
}
  return (
    <div id="home" className="home">
      <Container fluid className="p-4 background-radial-gradient d-flex flex-column justify-content-center align-items-center text-center">
        <Row className="w-100 justify-content-center">
          <Col md="8" className="d-flex flex-column align-items-center">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>

            <h1 className="my-5 display-3 fw-bold ls-tight title-text" style={{color: 'hsl(218, 81%, 95%)'}}>
              Ingénieure informatique<br />
              <span className="highlight-text" style={{color: 'hsl(218, 81%, 75%)'}}>ANLI SAID Tafrize</span>
            </h1>
            <p className="description-text" style={{color: 'hsl(218, 81%, 75%)'}}>
              Visiter mon site portfolio et télécharger mon CV pour plus de détails.
            </p>
            <Button className="custom-button" type="submit" onClick={onButtonClick}>
              En savoir plus
            </Button>
          </Col>   
        </Row>
      </Container>
    </div>
  );
}

export default Home;
