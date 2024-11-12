import {React, useRef, useEffect, useState} from "react";
import "../../styles/testimonial.css";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import { HiDesktopComputer } from "react-icons/hi"
import ava03 from "../../images/ava-3.jpg";

import Slider from "react-slick";
import { FaJs, FaNodeJs, FaReact, FaGithub, FaGit, FaWarehouse  } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import {FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { SiAmazons3 } from 'react-icons/si';
import { SiCplusplus, SiCsharp, SiPython } from 'react-icons/si';

import { FaPython, FaWindows, FaEye } from 'react-icons/fa';
import { SiMicrosoft } from 'react-icons/si';
import { SiPostgresql, SiMysql } from 'react-icons/si';
import { SiDjango, SiTensorflow } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import Skillbar from "../Skillbar/Skillbar";
import {Row, Col} from 'antd'

import { FaFutbol, FaChess, FaRunning,FaGamepad, FaBaseballBall, FaFootballBall, FaTableTennis, FaSearchLocation, FaSearch , FaFistRaised  } from 'react-icons/fa';      // Font Awesome
import { MdOutlineSportsTennis, MdDragIndicator , MdSportsBasketball} from 'react-icons/md';               // Material Design Icons
import { SiBandlab } from 'react-icons/si';                           // Simple Icons
import { BiJoystick } from 'react-icons/bi';  
// import { FaSoccerBall,  } from 'react-icons/fa'; 
import { BiFootball } from 'react-icons/bi'; // Football from Boxicons
// import { GiDice, GiShuttlecock, GiMagnifyingGlass, GiRunningShoe } from 'react-icons/gi';
import cricket from "../../images/cricket2.svg"
import ludo from "../../images/ludo2.svg"
import badminton from "../../images/badminton.svg"
import { GiStonePile} from 'react-icons/gi';
export default function Testimonial() {

  
  const skills = [
    { skill: 'Football', manager: "Ali Haider", icon: <BiFootball size={50} color="#bbb"/>, link: "https://forms.gle/TX5tGz2GpztfBjRh8", phone: "+923237815502"},
    { skill: 'Chess', manager: "Abdul Mannan", icon: <FaChess size={50} color="#bbb"/> , link: "https://forms.gle/5i1GCCPoxCHDoeuA9", phone: "+923314103466"},
    { skill: 'Relay Race', manager: "M. Hamza", icon: <FaRunning size={50} color="#bbb"/> , link: "", phone: "+923234904070"},
    { skill: 'Table Tennis', manager: "Ahmad", icon: <MdOutlineSportsTennis size={50} color="#bbb"/>, link: "https://docs.google.com/forms/d/e/1FAIpQLScvQsETqYQG3RKDCQxtXg-wg7V-AbmPGTu7Z45c7CWfcwnh1g/viewform?usp=sf_link", phone: "+923065911832" },
    { skill: 'Cricket', manager: "Abdul Moeed Khan", icon: <img src={cricket} style={{color: "#bbb"}}/>, link: "https://forms.gle/Dh4fHAE2p6jcaV629" , phone: "+92347732310"},
    { skill: 'Ludo', manager: "Hafiz Yasir", icon: <img src={ludo} style={{color: "#bbb"}} />, link: "https://forms.gle/irUuo3yeABCWsz2Q9", phone: "+923021947934" },
    { skill: 'Badminton', manager: "M. Tahir", icon: <img src={badminton} style={{color: "#bbb"}} />, link: "https://forms.gle/c3mbsKjckdHTFTT76", phone: "+923023799872" },
    { skill: 'Scavenger Hunt', manager: "Zulqarnain Haider", icon: <FaSearch size={50} color="#bbb"/>, link: "https://forms.gle/VWUiViYyDukTckco6", phone: "+923496322275" },
    { skill: 'Tekken 8', manager: "Syed Ahsan Imtiaz", icon: <FaGamepad size={50} color="#bbb"/>, link: "https://docs.google.com/forms/d/e/1FAIpQLScTku_riyii6FIufLeXys6ZT3lAE1Z9r-58NV-RbTm1mpGB1Q/viewform?usp=sf_link" , phone: "+923084706206"},
    { skill: 'Cricket 19 PC', manager: "Syed M. Fraz", icon: <FaBaseballBall size={50} color="#bbb"/>, link: "https://forms.gle/MwEg8T8H8qzRpE5u8", phone: "+923314466033" },
    { skill: 'Pithu Gol Garam', manager: "Not Yet", icon: <GiStonePile size={50} color="#bbb"/>, link: "https://forms.gle/yaeREmo88ZdANUWA8", phone: "+923164219759" },
    { skill: 'Basketball', manager: "Abdul Moeed Khan", icon: <MdSportsBasketball size={50} color="#bbb"/>, link: "#", phone: "+92347732310" },
    // Add more skills as needed
  ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true
      };

  return (
    <section id="games">
      <div className="container" id="blog">
        <div className="slider-content-top">
            <h6 className="subtitle">Games</h6>
            <h2>Register yourself <span className="highlight">in your favorite game</span></h2>
        </div>

        <Row>

        {/* <div className="slider-wrapper">
          <Slider {...settings}>
          </Slider>
          </div> */}
            {skills.map((skill, index) => (
              <Col md={6} xs={12}>
                  <Skillbar key={index} skill={skill.skill} manager={skill.manager} icon={skill.icon} link={skill.link} phone={skill.phone} />
              </Col>
            ))}

          </Row>
      </div>

    </section>
  );
}
