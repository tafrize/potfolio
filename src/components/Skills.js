import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import '../styles/Skills.css';
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

const skills = [
  { src: HTML, nom: "HTML" },
  { src: CSS, nom: "CSS" },
  { src: JavaScript, nom: "JavaScript" },
  { src: ReactImg, nom: "React" },
  { src: Node, nom: "Node.js" },
  { src: Python, nom: "Python" },
  { src: Java, nom: "Java" },
  { src: Php, nom: "PHP" },
  { src: Mysql, nom: "MySQL" },
  { src: Mongo, nom: "MongoDB" },
  { src: Kotlin, nom: "Kotlin" },
  { src: C, nom: "C" },
  { src: Boot, nom: "Bootstrap" },
  { src: Wordpress, nom: "WordPress" },
  { src: Angular, nom: "Angular" },
  { src: Firebase, nom: "Firebase" }
];

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => 
    (i % size ? acc[acc.length - 1].push(arr[i]) : acc.push([arr[i]]), acc), []
  );
};

const skillChunks = chunkArray(skills, 4); // Groupes de 4

function Skills() {
  return (
    <div id="skills" className="bg-light skills">
      <Container>
        <Carousel interval={3000} pause="hover">
          {skillChunks.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((skill, idx) => (
                  <Col key={idx} lg={3} md={4} sm={6} xs={6} className="d-flex flex-column align-items-center g-3">
                    <img src={skill.src} alt={skill.nom} className="skills-image" />
                   
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Skills;
