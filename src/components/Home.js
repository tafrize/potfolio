import '../styles/Home.css';
import Button from 'react-bootstrap/Button';


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


        
    <h1>Software Engineering Student</h1>  
    <h5>Hello, my name is ANLI SAID Tafrize</h5>
       
    <p>
      Download my resume and visit my website for more details.
     
    </p>

    
    <Button  variant="primary" type="submit" onClick={onButtonClick}>
            mon cv
        </Button>
   
      
     



    </div>
  );
}

export default Home;
