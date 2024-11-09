import React, { useState } from "react";
import { Row, Col } from "antd";
import "../../styles/Experience.css";

const Experience = ({ element }) => {
  const [hovering, sethovering] = useState(false)
  const [isActive, setIsActive] = useState(false);
  return (
    <Col
      className="project-detail"
      md={12}
      xs={24}
    >
    <Row>
      <Col
        md={4}
        xs={6}
        className="img-exp"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1%",
        }}
      >
        {element.Img}
      </Col>
      <Col md={20} xs={18} className="experience-card"
        onMouseEnter={()=> sethovering(true)}
        onMouseLeave={()=> sethovering(false)}
      >
        <Row className="project-box" onClick={() => setIsActive(!isActive)}>
                      <Col md={16} xs={24}>
                        <div className="project-box-title">{element.title}</div>
                        <div className="project-box-describe">{element.company}</div>
                      </Col>
                      <Col md={8} xs={24} className="project-box-developed">
                        {element.duration}
                      </Col>

        </Row>
        {isActive && (
          <div className="project-detail-display">
            <div className="project-box-description">{element.desc}</div>
          </div>
        )}
      </Col>
      </Row>
    </Col>
  );
};

export default Experience;
