import '../styles/Home.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Formation from '../components/Formation';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="">
       <Router>
       <a href="CV_ANLISAIDTafrize_2023.pdf" download="CV_ANLISAIDTafrize_2023.pdf"> 
    <Button  variant="primary" type="submit">
            mon cv
        </Button>
    </a>
       <Header/>
          
                <Link to="/">Home</Link>

                <Link to="/formation">Formation</Link>

                <Link to="/about">About me</Link>
              
                <Link to="/contact">Contact </Link>
              
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/formation' element={< Formation />}></Route>
                 <Route exact path='/about' element={< About  />}></Route>
                 <Route exact path='/contact' element={< Contact  />}></Route>
          </Routes>
          <Formation/>
          <Contact/>
          <Footer/>

       </Router>
       
       
    </div>
  );
}

export default App;
