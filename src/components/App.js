import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Home from '../components/Home';
import Formation from '../components/Formation';
import Experience from '../components/Experience';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projets from '../components/Projets';
import Skills from '../components/Skills';
import Profil from '../components/Profil';

function App() {

  return (
    <div className="app">
      <Header/>
      <Home/>
      <Skills />
      <Projets />
      <Profil/> 
      <Experience/>
      <About/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
