import React from 'react'
import "./styles/Footer.css";

import zuriLogo from "../assets/images/Vector.png";
import i4gLogo from "../assets/images/I4G.png";

const Footer = () => {
  return (
    <div id="footer">
        <img src={zuriLogo} alt="Zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4gLogo} alt="I4G" />
    </div>
  )
}

export default Footer;