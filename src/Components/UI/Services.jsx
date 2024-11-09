import React from "react";
import { AiOutlineGlobal } from "react-icons/ai"
import { AiTwotonePicture } from "react-icons/ai"
import { HiDesktopComputer } from "react-icons/hi"
import { ImFileVideo } from "react-icons/im"
import { HiPhotograph } from "react-icons/hi"
import { FaFutbol, FaChess, FaRunning } from 'react-icons/fa';      // Font Awesome
// import { GiCricketBat, GiLudo, GiTableTennis } from 'react-icons/gi';
import { MdOutlineSportsTennis } from 'react-icons/md';               // Material Design Icons
import { SiBandlab } from 'react-icons/si';                           // Simple Icons
import { BiJoystick } from 'react-icons/bi';  
import "../../styles/services.css";

const serviceData = [
  {
    icon: <FaFutbol size={40}/>,
    title: "Desktop Application",
    desc: "Creating efficient desktop applications using the .NET Framework and PyQt5",
  },
  {
    icon: <FaChess size={40} />,
    title: "Web Development",
    desc: "Building dynamic and scalable web applications using the MERN",
  },
  {
    icon: <ImFileVideo size={40} />,
    title: "AI & Computer Vision",
    desc: "Python for cutting-edge AI and computer vision",
  },
  {
    icon: <HiPhotograph size={40} />,
    title: "Graphics Designing",
    desc: "Visually appealing and impactful designs for various media",
  },
];

export default function Services() {
  return (
    <section id="Expertise">
      <div className="container">
        <div className="services-top-content">
          <h6 className="subtitle">My Expertise</h6>
          <h2>Showcasing My Skills and Specializations</h2>
          <h3 className="highlight">I've worked in</h3>
        </div>

        <div className="services-item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services-item" key={index}>
              <span className="">
                {item.icon}
              </span>
              <h3 className="service-title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
