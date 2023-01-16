import React from 'react';
import  '../styles/Challenge.css';

function Challenge({src,nom,description}){

  

    return(

        <div className='challenge'>
             
            <img src={src} alt=""/>
            
            <h3>{nom}</h3>
            <h5>{description}</h5>
            

            
           
        </div>
       
    ) 




}

export default Challenge;
