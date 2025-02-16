import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/Entreprise.css';
import { ArrowRight } from 'react-bootstrap-icons';

function Entreprise({ nom, logo, description, entreprise, taches }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='entreprise'>  
      <div className='details'>
        <h4>{nom}</h4>
        <image src={logo} alt={nom}/>
        <h6>{description}</h6>
        <h6 style={{ fontSize: '14px', fontStyle: 'italic', color: '#333' }}>{entreprise}</h6>
        <a onClick={handleShow} className="discover">
          Découvrir <ArrowRight size={18} />
        </a>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{nom}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>📌 Tâches réalisées :</h5>
            <ul>
              {taches.map((tache, index) => (
                <li key={index}>{tache}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div> 
  ); 
}

export default Entreprise;
