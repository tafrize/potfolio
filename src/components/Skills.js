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
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../styles/Skills.css";

function Skills (){
  return (

    
    
    

    <div id='skills' className='skills'>

      <Container>

      <h2 class="text-center  mb-15" style={{paddingBottom:"6rem"}}>Compétences</h2> 

      <Row>

       
      <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1 imag d-flex flex-column align-items-center g-3'>
        <img src={HTML} alt="html"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={CSS} alt="" />
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>

        <img src={Angular} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={ReactImg} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Kotlin} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Python} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Mongo} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Mysql} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Java} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Node} alt="" />
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Php} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag  d-flex flex-column align-items-center g-3'>
        <img src={C} alt="" />
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Boot} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6}xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={JavaScript} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Wordpress} alt=""/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className='order-3 order-lg-1  imag d-flex flex-column align-items-center g-3'>
        <img src={Firebase} alt=""/>
      </Col>
        
        
      
      </Row>

      </Container>
    </div>


    
  );
};

export default Skills;