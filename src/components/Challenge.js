import React from 'react';
import  '../styles/Challenge.css';

function Challenge({src,nom,description,link}){

    return(
        <div className='challenge'>       
            <img src={src} alt=""/>  
            <h3>{nom}</h3>
            <div className='details'>
                <a href={link}>
                    github
                </a>
            </div>
        </div>
    ) 
}
export default Challenge;
