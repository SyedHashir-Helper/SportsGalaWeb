import React from 'react'
import octadax from  "../../images/octadax.jpg"
import bytewise from  "../../images/bytewise.jpeg"
import ireg from  "../../images/ireg_it_logo.jpeg"
import uet from  "../../images/uet.png"
import netsol from  "../../images/netsol-logo.png"
import pakangels from  "../../images/pakangels.png"
import Experience from '../Experience/Experience'
import { Row } from 'antd'


const positions = [
  {
    Img: <img  src={uet} className='img-fit'  />,
    title: "Teaching Assistant PF",
    company: "UET Lahore",
    duration: "Dec 2022 - Mar 2023",
    desc: "Served as a Teaching Assistant for Programming Fundamental Course. Helped Students in grabbing Basic Programming Concepts."
  },
  {
    Img: <img  src={uet} className='img-fit'  />,
    title: "Teaching Assistant OOP",
    company: "UET Lahore",
    duration: "Apr 2023 - Jun 2023",
    desc: "Served as a Teaching Assistant for Object Oriented Programming Course. Helped Students in structurizing their projects."
  },
  {
    Img: <img src={octadax} className='img-fit' />,
    title: "React Developer Intern",
    company: "OctaDax Ltd.",
    duration: "Jul 2023 - Sep 2023",
    desc: "Starting first time as a react developer. Completed Some beginner concepts of React in this short period."
  },
  {
    Img: <img src={bytewise} className='img-fit'  />,
    title: "Deep Learning Fellow",
    company: "Bytewise Ltd",
    duration: "Jun 2024 - Continue",
    desc: "Currently Enrolled as a Bytewise Deep Learning and Machine Learning Fellow. Its a full-fledge remote fellowship giving industry level skills."
  },
  {
    Img: <img  src={ireg} className='img-fit'  />,
    title: "Software Engineer Intern",
    company: "IREG-IT",
    duration: "Jul 2024 - Aug 2024",
    desc: "Started New Position as a Software Engineer Intern. Aiming to utilize my theoretical skills for practical learning."
  },
  {
    Img: <img  src={pakangels} className='img-fit'  />,
    title: "Generative AI Essential Training Program",
    company: "Pak Angels Inc., iCodeGuru, Silicon Valley, CA",
    duration: "July 2024 - Continue",
    desc: "Demystify Gen AI Models, Vector Search, RAG and how to utilize already built models. Passionately following the Generative AI training program orgainzed by Pak Angels in collaboration with iCodeGuru and Aspire Pakistan and Others."
  },
  {
    Img: <img  src={netsol} className='img-fit'  />,
    title: "Data Engineer Intern",
    company: "Netsol Technologies Pakistan",
    duration: "Aug 2024 - Sep 2024",
    desc: "Selected for 4-weeks Data Engineer Internship. Worked on SQL and got knowledge about ETL Tools."
  },
]

const Experiences = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-top-content">
          <h6 className="subtitle">Experience</h6>
          <h2>My working Era</h2>
          <h3 className="highlight">I have or had been with</h3>
        </div>
        <Row className='all--experiences' align={'top'}>

          {positions.map((element, index) => {
            return (
              <Experience 
              key={index}
              element={element}
              />
            );
          })}
        </Row>
      </div>

    </section>
  )
}

export default Experiences
