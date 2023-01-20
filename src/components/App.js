import '../styles/App.css';

import Header from '../components/Header';
import Home from '../components/Home';
import Formation from '../components/Formation';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projets from '../components/Projets';
import Skills from '../components/Skills';

function App() {

  return (
    <div className="app">

      
     
        <Header/>
        <Home/>
        <Formation/>
        <Skills />
        <Projets />
        <About />
        <Contact />
      
          

      

      <Footer/>

     
    </div>
  );
}

export default App;
