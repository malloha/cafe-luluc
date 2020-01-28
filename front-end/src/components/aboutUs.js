import React, { Component } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import cafeluluc from '../image/Logo.jpg'


class AboutUs extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="About-us">
        <span className="about-head">
          <span className="about-r" />
          <p className="about-text">About Us</p>
          <span className="about-l" />
        </span>

        <div className="box">
          <div className="main-box">
            <div className="boxx1">
              <p className="box1-content">Brooklyn based french cafe. Classic neighborhood French bistro brings in crowds with it's brunch & garden seating</p>


              <span className="learn1">Learn More  &nbsp; <FaRegArrowAltCircleRight /></span>

              <p className="break-f">Breakfast - Lunch - Dinner</p>
              <span className="money">Cash Only $</span>
            </div>
          </div>
          <div className="box2">
            <img src={cafeluluc} className="store" alt="logo" />
          </div>

        </div>

        <span className="learn2">Learn More &nbsp; <FaRegArrowAltCircleRight /></span>

        <div className="Rectangle3">
          <div className="top" />
          <div className="down" />
        </div>
      </div>
    )
  }

}

export default AboutUs;