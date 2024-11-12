import React, { useRef, useState } from "react";
import "../../styles/Skillbar.css";
import { Row, Col, Progress, Popover } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaWhatsapp } from "react-icons/fa";

const Skillbar = ({ skill, manager, icon, link, phone }) => {

  const content = (
    <div>
      <p style={{color: "var(--btn-primary-bg)"}}>Opening Soon</p>
    </div>
  );

  const rowRef = useRef();

  const handleMouseEnter = function () {
    sethovering(true);
    rowRef.current.style.background = "var(--testimonial-bg)";
  };

  const handleMouseLeave = function () {
    sethovering(false);
    rowRef.current.style.background = "var(--card-bg)";
  };

  const [hovering, sethovering] = useState(false);

  return (
    // <div className="skill-bar">
    //   <div className="skill-info">
    //     <span className="skill-name">{skill}</span>
    //     <span>
    //         {icon}
    //       </span>
    //     <span className="skill-percentage">{learning ? "Learning" : percentage + "%"}</span>
    //   </div>
    //   <div className="progress">
    //     <div className="progress-bar" style={{ width: `${per}%` }}></div>
    //   </div>

    // </div>

    <Row
      ref={rowRef}
      className="skill-box-row"
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => handleMouseLeave()}
    >
      
        <Col
          md={24}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row>{icon}</Row>
          <Row
            style={{
              textAlign: "center",
              paddingTop: "1rem",
              fontSize: "1rem"
            }}
          >
            {skill}
          </Row>
          <Row style={{
            padding: "1rem 0px",
            height: "75px",
            color: "#bbb",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexDirection: "column"
          }}>
            <h5>Game Manager</h5>
            <a href={`https://wa.me/${phone}`} style={{display: "flex", alignItems: "center", gap: "0.3rem"}}><FaWhatsapp/> {manager}</a>
          </Row>
          <Row>
              <a className="secondary-btn" href={link}>
                Register
              </a>
          </Row>
        </Col>
      
    </Row>
  );
};

export default Skillbar;
