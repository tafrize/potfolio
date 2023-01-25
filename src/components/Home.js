import '../styles/Home.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function Home() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV_ANLISAIDTafrize_2023.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV_ANLISAIDTafrize_2023.pdf';
            alink.click();
        })
    })
}
  return (
    <div id="home" className="home">

      <Container fluid className='p-4 background-radial-gradient overflow-hidden'>

       <Row>

       <Col md='12' className='text-center text-md-start d-flex flex-column justify-content-center'>

       <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        

        
       <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-center" style={{color: 'hsl(218, 81%, 95%)', paddingTop:"50px"}}>
            Ingénieure informatique<br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>ANLI SAID Tafrize</span>
       </h1>
       
    <p  className='px-3 text-center' style={{color: 'hsl(218, 81%, 85%)'}}>
       Visiter mon site portfolio et télecharger mon CV pour plus de détails. 
    </p>

    
    <Button className="mx-2 px-5" size='lg' variant="primary" type="submit" onClick={onButtonClick} style={{backgroundColor:" #ad1fff"}}>
            mon cv
        </Button>

    </Col>   

    </Row> 

    </Container>  
   
    </div>
  );
}

export default Home;
