import React from 'react'
import '../../styles/counter.css'
import { FaLinkedin, FaGithub , FaCode, FaUniversity, FaBirthdayCake, FaGraduationCap, FaEnvelope, FaCampground, FaFootballBall, FaBuilding  } from 'react-icons/fa';
import { MdStadium } from 'react-icons/md';
const counterData = [
    {
        number: "LinkedIn",
        text: <FaLinkedin size={50}/>,
        link: "https://www.linkedin.com/in/syedhashircs01/"
    },
    {
        number: 'Github',
        text: <FaGithub size={50}/>,
        link: "https://github.com/SyedHashir-Helper"
    },
    {
        number: "LeetCode",
        text: <FaCode size={50}/>,
        link: "https://leetcode.com/u/syedhashircs01/"
    }
]

const basicinfo = [
    {
        number: 'Anexxe Ground',
        text: <MdStadium size={50}/>
    },
    {
        number: "Old Auditorium",
        text: <FaUniversity size={50}/>
    },
    {
        number: "Football Ground",
        text: <FaFootballBall size={50}/>
    },
    {
        number: "New LTs",
        text: <FaBuilding size={50}/>
    },
]

export default function Counter() {
  return (
    <section id="about" >
        <div className="container">
            <div className="slider-content-top" style={{margin: "2rem 0rem"}}>
                <h6 className="subtitle">Venues Decided</h6>
                <h2>Showcase your <span className="highlight">best on the field of</span></h2>
            </div>
            <div className="counter-wrapper">
                {
                    basicinfo.map((item, index) => (
                        <div className="counter-item" key={index}>
                            <h4 className="counter-title">{item.text}</h4>
                            <h3 className='counter-number'>{item.number}</h3>
                        </div>
                    ))
                }
            </div>
            {/* <div className="counter-wrapper">
                {
                    counterData.map((item, index) => (
                        <div className="counter-item" key={index}>
                            <h4 className=""><a className='counter-title' href={item.link} target='_blank'>{item.text}</a></h4>
                            <h3 className='counter-number'>{item.number}</h3>
                        </div>
                    ))
                }
            </div> */}
        </div>
    </section>
  )
}
