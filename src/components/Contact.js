import React from 'react';
import {useRef} from "react";
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


function Contact() {
    const formu=useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_royubte', 'template_at5gs8m', formu.current, '8QqV-Gy2RYB8soL60')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }
    );
    e.target.reset();
    alert("Message envoyé. Merci!");
    };


  return (
    <div id="contact" className='contact'>
    <Container fluid>

      <Card className='text-black m-lg-5 m-sm-3' style={{borderRadius:'30px',paddingBottom:"3rem"}}>

          <Row>

            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <h2 classNAme="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{paddingBottom:"2rem",paddingTop:"3rem"}}>Me contacter</h2>

            <Form ref={formu} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" size='lg' placeholder="your name" name="user_name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" size='lg'className="p-sm-2" placeholder="your mail address" name="user_email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} size='lg' placeholder="message..." name="message"/>
            </Form.Group>
        
            <Button className='mb-4' size='lg'variant="primary" type="submit" style={{backgroundColor:"black"}}> 
                    Envoyer 
            </Button>
            
            </Form>
            
        </Col>

        <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <Image src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
        </Col>

        </Row>

        </Card>
     
  </Container>
  </div>
  );
}

export default Contact;