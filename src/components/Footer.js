import '../styles/Footer.css';
import github from '../assets/git.png';
import linkedin from '../assets/linkedi.png';


function Footer() {

  return (
    <div className="footer">
      <p>© copyright 2025 ANLI SAID Tafrize</p>
      <p>tous droits reservés</p>
      <a target="_blank" href="https://github.com/tafrize" rel="noopener noreferrer">
        <img
          src={github}
          alt="Linkedin"
          className="mw3-ns"   
          style={{height: "40px", width: "50px", cursor: "pointer", objectFit:"contain"}}                  
        />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/tafrize-anli-said-7229081aa/" rel="noopener noreferrer">
        <img
          src={linkedin}
          alt="Linkedin"
          className="mw3-ns"  
          style={{height: "50px", width: "50px", cursor: "pointer", objectFit:"contain",color:"white"}}                      
        />
      </a>
    </div>
  );
}

export default Footer;
