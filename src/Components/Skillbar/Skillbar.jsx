import React, { useRef, useState } from "react";
import "../../styles/Skillbar.css";
import { Row, Col, Progress } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skillbar = ({ skill, manager, icon, link }) => {
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
            textAlign: "center"
          }}>
            Game Manager: {manager}
          </Row>
          <Row>
            <a className="secondary-btn" href={link} target="_blank">
              Register
            </a>
          </Row>
        </Col>
      
    </Row>
  );
};

export default Skillbar;
