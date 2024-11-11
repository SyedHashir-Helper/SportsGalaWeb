import React, { useState, useEffect } from "react";
import "../../styles/Countdown.css";
import {Row, Col} from 'antd'

const Countdown= () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const deadline = "November 12, 2024 08:00:00 GMT+0500";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    // const time = Date.now() - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-container">
      <Row align={'middle'} justify={'space-between'}>
        <Col md={24} lg={24} sm={24} xs={24} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div className="slider-content-top" >
                <h2> Registrations will be <span className="highlight"> live in</span></h2>
          </div>
        </Col>
        <Col md={24} lg={24} sm={24} xs={24}>
      <div className="countdown">
        <div className="countdown-box">
          <div className="countdown-value">{days < 10 ? "0" + days : days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-box">
          <div className="countdown-value">{hours < 10 ? "0" + hours : hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-box">
          <div className="countdown-value">{minutes < 10 ? "0" + minutes : minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-box">
          <div className="countdown-value">{seconds < 10 ? "0" + seconds : seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
        </Col>
      </Row>
    </section>
  );
};

export default Countdown;
