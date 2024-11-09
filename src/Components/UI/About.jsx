import React from "react";
import AboutImg from "../../images/about-us.jpg";
import "../../styles/about.css";

const chooseData = [
  {
    icon: "ri-window-2-line",
    title: "MERN (MongoDB, Express.js, React, Node.js)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid similique sapiente odio deserunt natus beatae, id deleniti non veritatis voluptatem.",
  },
  {
    icon: "ri-html5-fill",
    title: "ASP .NET Core MVC (C#)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid similique sapiente odio deserunt natus beatae, id deleniti non veritatis voluptatem.",
  },
  {
    icon: "ri-pages-fill",
    title: "WordPress Developer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid similique sapiente odio deserunt natus beatae, id deleniti non veritatis voluptatem.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <h6 className="subtitle">About Me</h6>
            <h2>Experienced Full Stack Developer</h2>
            <h3 className="highlight">Web Solutions for Every Need</h3>
            <p className="description about-content-desc">
            Experienced MERN and ASP.NET developer with a proven track record of delivering robust, scalable, and high-performance web applications.
            Passionate about crafting efficient and user-friendly experiences in both the MERN (MongoDB, Express.js, React, Node.js) and ASP.NET stacks, 
            consistently exceeding client expectations and industry standards.
            </p>

            <div className="choose-item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose-us-item" key={index}>
                  <span className="choose-us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose-us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-img">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
