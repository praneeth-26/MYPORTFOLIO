
import './App.css';
import { Container, Row, Col,Carousel,Modal,Button} from 'react-bootstrap';
import javascript from './static/javascript.png'
import html from './static/Html 5.png'
import css from './static/CSS.png'
import bootstrap from './static/bootstrap.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import react from './static/React.png'
import redux from './static/Redux.png'
import enzyme from './static/enzyme.png'
import jest from './static/jest.png'
import image from './static/GM.jpg'
import github from './static/github.png'
import linkedin from './static/linkedin.png'
import email from './static/email.png'
import craze1 from './static/craze1.png'
import craze2 from './static/craze2.png'
import craze3 from './static/craze3.png'
import React,{useState} from "react"

function App() {
  const [show,setShow]=useState(false)
  function handleShow(){
    setShow(true)
  }
 function handleClose(){
  setShow(false)
 }
  return (
    <div className="App">
      <div className="home-section">
        <div className="intro">
          <h1>Hellow ! I'm GOPI MACHA</h1>
        </div>
        <Container>
          <Row>
            <Col md={3} xs={6} className="newcol">
            <img alt="Javascript" src={javascript} style={{width: "5vw"}}></img>
            <h6 className="logo-text">Javascript</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
            <img alt="Html5" src={html} style={{width: "5vw"}}></img>
            <h6 className="logo-text">Html5</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
            <img alt="Css3" src={css} style={{width: "5vw"}}></img>
            <h6 className="logo-text">Css3</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
            <img alt="Bootstrap" src={bootstrap} style={{width: "5vw"}}></img>
            <h6 className="logo-text">Bootstrap</h6>
            </Col>
          
          </Row>
          <Row>
          <Col md={3} xs={6} className="newcol">
            <img alt="React" src={react} style={{width: "5vw"}}></img>
            <h6 className="logo-text">React</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
            <img alt="Redux" src={redux} style={{width: "5vw"}}></img>
            <h6 className="logo-text">Redux</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
            <img alt="Enzyme" src={enzyme} style={{width: "5vw"}}></img>
            <h6 className="logo-text">Enzyme</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
            <img  alt="Jest" src={jest} style={{width: "5vw"}}></img>
            <h6 className="logo-text">Jest</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-session">
        <div className="about-left">
          <p className="ABOUT_ME">ABOUT ME</p>
          <p className="about-me-p"> Hi Stranger! Welcome to my page. Let me introduce myself. I am a web developer based in Garden State. I have nearly two years of professional experience in creating and maintaining full-stack web applications with PERN and MERN stacks. My favorite thing in programming is bug hunting. I love investigating problems,  providing, and implementing permanent solutions. Also, I have an eye for details and usually, I am the one who reports the bugs first in my team. That's why my co-workers call me a bug-magnet. I have to admit, I kinda like it. My biggest motivation is creating an application that makes a difference one day.  Besides programming, I love to travel, play ping-pong, cook, and read.  That's pretty much it about me and I would love to learn more about you. Feel free to message me on Linkedin. Quick reminder: If you need a website or maintenance for a Non-profit organization,  I offer free service.  </p>
        </div>
        <div className="about-right">
<img  alt="pic" src={image} className="portfolio-pic"></img>
<div className="contact-icons">
  <a target="_blank" rel="noreferrer"className="trans" href="https://github.com/GopiMacha?tab=repositories">
<img className="email-pic" alt="git" src={github}></img>
  </a>
  <a target="_blank" rel="noreferrer" className="trans" href="https://www.linkedin.com/in/gopi-macha-09b45a152/">
<img  className="email-pic" alt="Linkedin" src={linkedin}></img>
  </a>
  <a className="trans" href="mailto:gopimacha95@gmail.com">
<img  className="email-pic" alt="Email" src={email}></img>
  </a> 
</div>
        </div>
      </div>
      <div className="project-section">
        <h1 id="my-projects">My Projects</h1>
        <div className="all-Projects-Card">
          <div className="Projects-Card">
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={craze1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={craze2}
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={craze3}
      alt="Third slide"
    />

 
  </Carousel.Item>
</Carousel>
<p className="exp-parag">Craze was designed for those who love to travel, try different foods and learn about the latest fitness trends</p>
<div className="project-but">
<Button variant="primary" onClick={handleShow}>
        More Info
      </Button>
<a target="_blank" href="https://www.oncraze.com/">Live Site</a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ONCRAZE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>JavaScript | React| NodeJS | Express | Bootstrap | NodeMailer </p>
          <ul>
            <li>Added some extra functionality to the application like Cards functionality</li>
            <li>Applied Bootstrap for developing responsive and mobile-first website and CSS keyframes for animation</li>
            <li>Used the Postman tool to analyze the data</li>

          </ul>
        </Modal.Body>
     
      </Modal>
</div>
          </div>
        </div>
        </div>
      <div className="contact-session"></div>
    </div>
  );
}

export default App;
