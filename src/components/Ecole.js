import React from 'react';
import  '../styles/Ecole.css';

function Ecole({src,nom,description,annee}){

    return(
        <div className='ecole'>    
            <img src={src} alt=""/>
            <h4>{nom}</h4>
            <h6>{description}</h6>
            <h6>{annee}</h6>
        </div> 
    ) 
}

export default Ecole;
