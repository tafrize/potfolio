import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Experience.css';
import Entreprise from './Entreprise.js';
import { ArrowRight } from 'react-bootstrap-icons';
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
import Carrefour from '../assets/carrefour.png';
import MCDO from '../assets/mcdo.png'
import Spring from '../assets/spring.png'




const experiences = [
  {
    nom: "Développeuse Full Stack",
    description: "Création de logiciels administateurs from scratch, analyse des risques cyber.",
    entreprise: "Latitude, Reims",
    logo:["carrefour"],
    lien: "https://www.umi.ac.ma/?page_id=373",
    skills: ["Node.js", "React", "Java", "Python"],
    taches: [
      "Choisir les différents technologies",
      "Réalisation du cahier des charges",
      "Conception UML",
      "Travaill en équipe avec la méthode Agile",
      "Migration et traitement des données initialement sur Excel avec du Python",
      "Développer un système temps réel avec Java.",
      "Conception et développement d'interfaces utilisateur dynamiques.",
      "Mise en place d'APIs sécurisées avec Node.js et Express.",
      "Optimisation des performances et refactoring du code.",
      "Offrir des interfaces intuitives avec ReactJs",
      "Utilisation de la Méthode EBIOS/ISO 27001 pour analyser les risques cyber en interne",
    ],
  },
  {
    nom: "Développeuse WEB",
    description: "Maintenance du système de gestion des livres à la bibliothèque.",
    entreprise: "FST, Errachidia",
    lien: "https://www.heh.be/",
    skills: ["PHP", "JavaScript", "HTML", "CSS"],
    taches: [
      "Développement de sites web en HTML, CSS et JavaScript.",
      "Intégration et personnalisation de l'interface administrateur.",
      "Correction de bugs et amélioration du référencement SEO.",
      "Utilisation du cycle en V",
      "Gestion des emprunts et les différents restrictions utilisateurs",
      "Amélioration de la rapidité du système",
    ],
  },
  {
    nom: "Lead Developper",
    logo:["carrefour"],
    description: "Responsable d'équipe, du projet et de la satisfaction client.",
    entreprise: "Freelance, Remote",
    lien: "https://eilco.univ-littoral.fr/",
    skills: ["Angular", "Java", "Spring"],
    taches: [
      "Gestion et animation d'une équipe de 3 développeurs.",
      "Réaliser le cahier des charges et les spécifications clients.",
      "Architecture et développement d'applications en Angular et Spring Boot.",
      "Gestion des différents workflows",
      "Mise en place des pipelins CI/CD",
      "Affiner les besoins clients",
      "Gestion et correction des bugs",
      "Utilisation des API de paiement sécurisés"
    ],
  },
  {
    nom: "Caissière Polyvalente",
    description: "Gestion du service client et de la caisse d'enregistrement.",
    entreprise: "Carrefour, Calais",
    lien: "https://www.carrefour.fr/",
    skills: ["Gestion caisse", "Service client"],
    taches: [
      "Tenir la caisse d'enregistrement et gestion des transactions.",
      "Service client et assistance en rayon.",
      "Gestion des stocks et réapprovisionnement.",
    ],
  },
  {
    nom: "Stage d'été",
    description: "Apprentissage et pratique du développement web.",
    entreprise: "Kemtchop, Remote",
    lien: "https://www.exemple-stage.com/",
    skills: ["WordPress", "JavaScript", "PHP"],
    taches: [
      "Développement et personnalisation de thèmes WordPress.",
      "Utilisation de JavaScript et PHP pour des fonctionnalités dynamiques.",
      "Assistance et corrections de bugs sur des projets existants.",
    ],
  },
  {
    nom: "Employée Polyvalente",
    description: "Travail en équipe au sein d'un fast-food dynamique.",
    entreprise: "Macdo, Calais",
    lien: "https://www.mcdonalds.fr/",
    skills: ["Service rapide", "Gestion client"],
    taches: [
      "Préparation des commandes et service rapide.",
      "Gestion du drive et des clients",
      "Gestion des stocks et approvisionnement.",
      "Respect des normes d'hygiène et de sécurité alimentaire.",
    ],
  },
];

function Experience() {

  return (
    <div id='experiences' className='experience'>
      <h2 className="text-center mb-15 title-experience" style={{ paddingBottom: "4rem" }}>Expériences</h2> 
      <Container>
        <Row>
          {experiences.map((exp, index) => (
            <Col key={index} xl={4} lg={6} md={12} className='d-flex flex-column align-items-center g-5'>         
              <Entreprise 
                nom={exp.nom} 
                description={exp.description} 
                entreprise={exp.entreprise} 
                skills={exp.skills} 
                taches={exp.taches} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
