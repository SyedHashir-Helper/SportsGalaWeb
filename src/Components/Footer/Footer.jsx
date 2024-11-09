import React from "react";
import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
];

const quickLinks02 = [
    {
      path: "#",
      display: "Pricing",
    },
  ];

  const quickLinks03 = [
    {
      path: "#about",
      display: "About",
    },
  ];

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <h2>The Rival Champs</h2>
            <p className="description">Play, Compete, Unite</p>
          </div>
        <p className="copyright">Copyright {year}, Developed By Syed Hashir, All Right Reserrved. {" "} </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
