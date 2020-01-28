import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <div className="Entrees">
      <span className="icons">
        <FaInstagram className="IG" />
        <FaFacebookF className="FB" />
        <FaTwitter className="TW" />
      </span>
      <div>
        <div className="RectangleA"></div>
        <div className="RectangleB"></div>
      </div>
      <div className="Rectangle-Reserve">
        <p className="RESERVE">
          RESERVE
        </p>
      </div>
    </div>
  )
}

export default Header
