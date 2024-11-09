import React from 'react'
import "../../styles/services.css";
import ss from "../../images/logo.jpg"
import vanar from "../../images/vanar.png"
import mlsa from "../../images/mlsa.png"
import aspire from "../../images/aspire.png"
import bytewise from "../../images/bytewise.jpeg"

const serviceData = [
  {
    icon: <img src={vanar} width={40} />,
    title: "Campus Ambassador",
    Start: "April 2024",
    Till: "Continue"
  },
  {
    icon: <img src={mlsa} width={40} />,
    title: "Alpha MLSA",
    Start: "Sep 2023",
    Till: "Continue"
  },
  {
    icon: <img src={aspire} width={40} />,
    title: "Aspire Leader",
    Start: "April 2024",
    Till: "Aug 2024"
  },
  {
    icon: <img src={ss} width={40} />,
    title: "General Member",
    Start: "Nov 2022",
    Till: "Feb 2023"
  },
  {
    icon: <img src={ss} width={40} />,
    title: "Co-Director GD",
    Start: "Feb 2023",
    Till: "June 2023"
  },
  {
    icon: <img src={ss} width={40} />,
    title: "President",
    Start: "June 2023",
    Till: "Dec 2023"
  },
  {
    icon: <img src={bytewise} width={40} />,
    title: "ML/DL Fellow",
    Start: "June 2024",
    Till: "Continue"
  },
];

const Affiliations = () => {
  return (
    <section id="affiliations">
      <div className="container">
        <div className="services-top-content">
          <h6 className="subtitle">Affiliations</h6>
          <h2>Showcasing My Interpersonal And Leadership Skills</h2>
          <h3 className="highlight">Checkout</h3>
        </div>

        <div className="services-item-wrapper" style={
          {flexWrap: "wrap"}
        }>
          {serviceData.map((item, index) => (
            <div className="services-item" key={index} style={{margin: "10px"}}>
              <span className="service-icon">
                {item.icon}
              </span>
              <h3 className="service-title">{item.title}</h3>
              <span className='date'>{item.Start}</span>-
              <span className='date'>{item.Till}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Affiliations
