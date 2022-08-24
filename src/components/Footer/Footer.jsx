import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>huzefaghurna@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/huzefajuned">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/huzefa-bin-juned-3951691b2/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/h_b_juned/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
