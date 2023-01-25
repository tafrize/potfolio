import '../styles/Header.css';
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';
import React, { useState } from 'react';


function Header() {

  
    const [nav, setNav] = useState(false);
    const handleScroll = () => setNav(!nav);
    const closeMenu = () => setNav(false)


  return (
    <div className='header'>
        <nav className='navbar'>

        <div className='hamburger' onClick={handleScroll}>
            {nav?(<FaTimes size={30} style={{color:"#ffffff"}}/>)
            :(<FaBars size={30} style={{color:"#ffffff"}}/>)}
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu" } style={{listStyleType: "none"}}>
                    <li className='nav-item'>
                    <Link  onClick={closeMenu}  to='home' offset={-100} spy={true} smooth={true} duration={500} style={{textDecoration:'none',color:"#ffffff"}}>
                         Accueil 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link  onClick={closeMenu} to='formations' offset={-100} spy={true} smooth={true} duration={500} style={{textDecoration:'none',color:"#ffffff"}} >
                         Formations 
                    </Link>
                   
                    </li>
                    <li className='nav-item'>
                    <Link  onClick={closeMenu} to='skills' offset={-100} spy={true} smooth={true} duration={500} style={{textDecoration:'none',color:"#ffffff"}}>
                         Compétences 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link  onClick={closeMenu} to='projets'offset={-100} spy={true} smooth={true} duration={500} style={{textDecoration:'none',color:"#ffffff"}}>
                         Projets 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link  onClick={closeMenu} to='about' offset={-60} spy={true} smooth={true} duration={500} style={{textDecoration:'none',color:"#ffffff"}}>
                              A propos 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link  onClick={closeMenu} to='contact' offset={-100} spy={true} smooth={true} duration={500} style={{textDecoration:'none',color:"#ffffff"}}>
                         Contact
                    </Link>
                    </li>
                </ul>



        </nav>
      
    
      
    </div>

    
  );
}

export default Header;
