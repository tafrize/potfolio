import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Python from '../assets/python.png';
import Java from '../assets/java.png';
import Php from '../assets/php.png';
import Mysql from '../assets/mysql.png';
import Mongo from '../assets/mongo.png';
import Kotlin from '../assets/kotlin.png';
import C from '../assets/c.png';
import Boot from '../assets/bootstrap.png';
import Wordpress from '../assets/wordpress1.png';
import Angular from '../assets/angular.png';
import Firebase from '../assets/firebase.png';


import "../styles/Skills.css";
function Skills (){
  return (

    
    
    

    <div id='skills' className='skills'>
      <h2>Compétences</h2>

      <div  className='skills_img'>
       

        <img src={HTML} alt=""/>
        <img src={CSS} alt="" />
        <img src={Angular} alt=""/>
        <img src={ReactImg} alt=""/>
        <img src={Kotlin} alt=""/>
        <img src={Python} alt=""/>
        <img src={Mongo} alt=""/>
        <img src={Mysql} alt=""/>
        <img src={Java} alt=""/>
        <img src={Node} alt=""/>
        <img src={Php} alt=""/>
        <img src={C} alt=""/>
        <img src={Boot} alt=""/>
        <img src={JavaScript} alt=""/>
        <img src={Wordpress} alt=""/>
        <img src={Firebase} alt=""/>
        
      
      </div>
    </div>

    
  );
};

export default Skills;