import React from "react";
import "../../styles/portfolio.css";

import port01 from "../../images/team-01.png";
import port02 from "../../images/team-02.png";
import port03 from "../../images/team-03.png";
import port04 from "../../images/team-04.png";

const port = [
  {
    imgUrl: port01,
    name: "M Kabir Ahmad",
    desc: "Innovative Visionaries, Shaping Tomorrow's Web: Meet M Kabir Ahmad, Pioneering Web Developer"
  },
  {
    imgUrl: port02,
    name: "Ayesha",
    desc: "Crafting Digital Brilliance: Ayesha's Expertise in Web Development Reflects a Legacy of Excellence."
  },
  {
    imgUrl: port03,
    name: "Yasir Hassan",
    desc: "Driving Results through Code Mastery: Yasir - Where Experience Meets Precision in Web Development."
  },
  {
    imgUrl: port04,
    name: "M Moazam",
    desc: "Elevating Experiences, Crafting Futures: Moazam, a Web Developer with a Passion for Excellence"
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <h6 className="subtitle">Our Portfolio</h6>
          <h2>
            Check Our <span className="highlight">Team</span>
          </h2>
        </div>

        <div className="portfolio-wrapper">
          {port.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="portfolio-details">
                <h4>{item.name}</h4>
                <p className="description">
                  {item.desc}
                </p>

                <div className="portfolio-links">
                  <span>
                    <i class="ri-github-fill"></i>
                  </span>
                  <span>
                    <i class="ri-global-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
