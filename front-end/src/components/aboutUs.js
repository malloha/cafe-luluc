import React, { Component } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

class AboutUs extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="About-us">
        <span>
          About Us
        </span>

        <div className="box">
          <div className="box1">
            <p className="box1-content">brooklyn based french cafe. classic neighborhood French bistro brings in crowds with it's brunch & garden seating</p>
            <span>Learn More <FaRegArrowAltCircleRight /></span>
            <p>Breakfast - Lunch - Dinner</p>
            <span>Cash Only $$$</span>
          </div>
          <div className="box2">
            <img src="" />
          </div>
          <div className="Rectangle3" />
        </div>
      </div>
    )
  }

}

export default AboutUs;