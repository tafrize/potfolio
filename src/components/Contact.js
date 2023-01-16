import '../styles/Contact.css';
import Form from 'react-bootstrap/Form';
import {useRef} from "react";
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';


function Contact() {
    const form=useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_royubte', 'template_at5gs8m', form.current, '8QqV-Gy2RYB8soL60')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }
    );
    e.target.reset();
    };


  return (
    <div id="contact" className="contact">

        <div className='title_contact'>

            <h2>Me contacter</h2>

        </div>

        <div className="formulaire">

            <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="your name" name="user_name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="your mail address" name="user_email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="message..." name="message"/>
            </Form.Group>
        
            <Button  variant="primary" type="submit" style={{backgroundColor:"black"}}> 
                    Envoyer 
            </Button>
            
             </Form>
        </div>
  </div>
  );
}

export default Contact;