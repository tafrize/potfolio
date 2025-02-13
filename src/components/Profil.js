import '../styles/Profil.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCode, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { SiJavascript, SiReact,SiAngular, SiSpring, SiHtml5, SiCss3,  SiNodedotjs, SiLinux, SiDocker, SiJenkins, SiJava, SiNginx } from 'react-icons/si';


function Profil() {
  return (
    <div id="profil" className="profil">
        <Container fluid className="p-3 pt-1 profil overflow-hidden">
            <h2 className="mb-4 text-black mt-3 text-center">Compétences</h2>
            <p className="text-center">Développeuse passionnée par les nouvelles technologies.</p>
            <Row className="justify-content-center text-center mt-4 gx-3 gy-4 ">
                <Col lg={3} md={6} sm={12} className="profil-box frontend">
                    <FaCode className="profil-icon" />
                    <h4>Interface WEB</h4>
                    <p>Création de solution modernes et réactives.</p>
                    {/*<div className="tech-icons">
                        <SiJavascript className="tech-icon" />
                        <SiReact className="tech-icon" />
                        <SiAngular className="tech-icon" />
                        <SiHtml5 className="tech-icon" />
                        <SiCss3 className="tech-icon" />
                    </div>*/}
                </Col>
                <Col lg={3} md={6} sm={12} className="profil-box data">
                    <FaDatabase className="profil-icon" />
                    <h4>Service Backend</h4>
                    <p>Mise en place des services et API perfomantes.</p>
                    {/*<div className="tech-icons">
                        <SiNodedotjs className="tech-icon" />
                        <SiJava className="tech-icon" />
                        <SiSpring className="tech-icon" />
                    </div>*/}
                </Col>
                <Col lg={3} md={6} sm={12} className="profil-box admin">
                    <FaShieldAlt className="profil-icon" />
                    <h4>Configuration Système</h4>
                    <p>Gestion des serveurs et déploiement optimisé.</p> 
                    {/*<div className="tech-icons">
                        <SiLinux className="tech-icon" />
                        <SiDocker className="tech-icon" />
                        <SiJenkins className="tech-icon" />
                        <SiNginx className="tech-icon" />
                    </div> */}                 
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Profil;
