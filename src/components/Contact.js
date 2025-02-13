import React, {useState} from 'react';
import {useRef} from "react";
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; 
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xdkalyyp");
  const formu = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlertShown, setIsAlertShown] = useState(false); 

  const handleSuccess = () => {
    formu.current.reset(); 
    if (!isAlertShown) {
      setIsAlertShown(true); 
      alert("Message envoyé. Merci!");
    }
  };

  if (state.succeeded) {
    handleSuccess();
  }
  return (
    <div id="contact" className="contact">
      <Container fluid>
        <Card className="text-black m-lg-5 m-sm-3" style={{ borderRadius: '30px', paddingBottom: '3rem' }}>
          <h2 className="text-center h2 fw-bold mb-3 mx-1 mx-md-4 mt-4 w-100" style={{ paddingBottom: '2rem', paddingTop: '3rem' }}>
            Me contacter
          </h2>
          <Row style={{ margin: "0 auto" }} className="d-flex justify-content-center gx-0 w-100">
            <Col md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center">
              <Form ref={formu} onSubmit={handleSubmit} className="formulaire mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="votre nom" name="user_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" size="lg" className="p-sm-2" placeholder="votre adresse email" name="user_email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} size="lg" placeholder="message..." name="message" />
                </Form.Group>
                <Button className="mb-4 submit" size="lg" variant="primary" type="submit" style={{ backgroundColor: 'black' }}>
                  Envoyer
                </Button>
              </Form>
            </Col>
            <Col md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center flex-column">
              <Image className="" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid />
              <div className="contact-info mt-4 text-center">
                <Row className="d-flex justify-content-center align-items-center">
                  <Col xs="auto" className="d-flex align-items-center">
                    <FaEnvelope size={24} style={{ marginRight: '10px' }} />
                    <a href="mailto:tafrize.anlisaide@email.com" style={{ textDecoration: 'none' }}>
                      tafrize.anlisaid@gmail.com
                    </a>
                  </Col>
                  <Col xs="auto" className="d-flex align-items-center">
                    <FaPhoneAlt size={24} style={{ marginRight: '10px' }} />
                    <a href="tel:0650745574" style={{ textDecoration: 'none'}}>
                      06 50 74 55 74
                    </a>
                  </Col>
                  <Col xs="auto" className="d-flex align-items-center">
                    <FaMapMarkerAlt size={24} style={{ marginRight: '10px' }} />
                    Île De France
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;