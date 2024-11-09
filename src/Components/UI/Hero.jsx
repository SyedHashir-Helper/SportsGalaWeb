import React from "react";
import "../../styles/hero.css";
import { FaWhatsapp, FaEnvelope, FaPhone , FaInstagram, FaFacebook} from 'react-icons/fa';
import herodarkimg from "../../images/p2.png";
import lightimg from "../../images/p.png";
import profileimg from "../../images/hero.png";
import logo from "../../images/sportslogo.png"

import {Row, Col} from "antd"
import ContactIcons from "../ContactIcons/ContactIcons";
import Latest from "./Latest";
import Highlight from "./Highlight";
import Countdown from "./Countdown";

const hero_first = "Welcome to"
const hero_typeWriter = "THE RIVAL CHAMPS"
const headline = "xIntern @Netsol, x2 Hackathon Participant"

export default function Hero(props) {


  const whatsNowadays = [
    {
      title: "xIntern @Netsol",
      description: "Worked as an intern at Netsol Technologies Pakistan",
      status: "Completed",
    },
    {
      title: "x2 Generative AI Hackathon",
      description: "Participated in IBM WatsonX Challenge and iCodeGuru Gen AI Hackathon",
      status: "Completed"
    },
    {
      title: "Velostrike Marathon",
      description: "It's a hackathon management website, where particpants find details and teams.",
      status: "Ongoing",
    },

  ]

  const highlights = [
    {
      title: "Game On!",
      desc: "Play Hard, Win Big!"
    },
    {
      title: "Together We Triumph!",
      desc: "One Team, One Dream!"
    },
    

  ]


  const contacts =  [
    {
      icon: <FaWhatsapp size={30}/>,
      link: "https://wa.me/+923164219759",
      text: "Whatsapp"
    },
    {
      icon: <FaEnvelope size={30}/>,
      link: "mailto:syedhashir1001@gmail.com",
      text: "Mail"
    },
    {
      icon: <FaPhone size={30}/>,
      link: "tel:+923164219759",
      text: "Contact"
    },
    // {
    //   icon: <FaInstagram size={30}/>,
    //   link: "https://www.instagram.com/velocious_falcon/",
    //   text: "Instagram"
    // },
    // {
    //   icon: <FaFacebook size={30}/>,
    //   link: "https://www.instagram.com/velocious_falcon/",
    //   text: "Facebook"
    // },
  ]

  const handleClick = (e) => {
    e.preventDefaut();
    alert("Hey")

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
    });
  };
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <Row className="hero-wrapper">
          <Col className="hero-content" md={24} lg={24}>
            <div className="typewriter" >
              <h2>{hero_first}</h2>
              <h2 className="highlight">{hero_typeWriter}</h2>
              {/* <h1 className="highlight profession">CHAMPS</h1> */}
            </div>
            <div>
              <img className="shadow" src={logo} width={200} />
            </div>
            <p className="description">
            "Annual Sports Fest Organized by Department of Computer Science"
            </p>
            <div className="hero-btns">
              <a href="#games"><button className="secondary-btn" onClick={handleClick} >Register Now</button></a>
              <a href="https://www.instagram.com/rival_champs/"><button className="secondary-btn" style={{display: "flex", alignItems: "center", gap: "0.5rem"}} ><FaInstagram/>Follow Us</button></a>
            </div>

            {/* <Row className="hero-contact-me">
              {
                contacts.map((element, index)=>{
                  return(
                      <ContactIcons key={index}
                        element={element}
                        />
                  )
                })
              }
            </Row> */}
              <Countdown/>
          </Col>

          <Col className="hero-img" md={12} lg={12}>
            <img
              src={profileimg}
              alt="Hero Image"
            />
          </Col>
          <Col md={12} sm={24} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
              <Row >
                {
                  highlights.map((element, index)=>{
                    return (
                      <Col span={24}>
                        <Highlight 
                          title={element.title}
                          desc={element.desc}
                        />
                      </Col>
                    )
                  })
                }
              </Row>
              <Highlight/>
          </Col>

          {/* <Col md={12} sm={24}>
              {
                whatsNowadays.map((element, index)=>{
                  return (
                    <Latest key={index}
                      title={element.title}
                      description={element.description}
                      status={element.status}
                    />
                  )
                })
              }
          </Col> */}
        </Row>
      </div>
    </section>
  );
}
