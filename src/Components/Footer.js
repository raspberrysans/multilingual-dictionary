import React from "react";
import "./Footer.css";

const Footer = ({ LightTheme }) => {
  return (
    <div className="footer" style={{
        color: LightTheme ? "#323f4b" : "#F5DEB3"
          }}>
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://raspberrysans.github.io/" target="__blank"
        style={{
            color: LightTheme ? "#323f4b" : "#F5DEB3"
              }}>
          Sans Bhatia
        </a>
      </span>
    </div>
  );
};

export default Footer;