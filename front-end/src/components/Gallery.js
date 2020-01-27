import React, { Component } from 'react'
import { FaInstagram } from 'react-icons/fa'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://i.imgur.com/A48gNu6.jpg"

    }
  }

  handleClick = (e) => {
    this.setState({
      image: e.target.src
    })
  }

  render() {
    return (
      <div className="gallery-container" >
        <div className="Divider1"></div> <div className="Divider2"></div>
        <div className="Gal">
          <div className="GalleryHeading"></div>
          <p className="Gallery"> Gallery<FaInstagram className="icons" /></p>
          <div className="GalleryHeading"></div >
        </div>
        <img src={this.state.image} alt="food" className="selected-image"></img>
        <div className="gallery-images">
          <img src="https://i.imgur.com/A48gNu6.jpg" alt="food" value="https://i.imgur.com/A48gNu6.jpg" className="gallery-image-container" onClick={(e) => this.handleClick(e)} ></img>
          <img src="https://i.imgur.com/WksUOzz.jpg" alt="food" value="https://i.imgur.com/WksUOzz.jpg" className="gallery-image-container" onClick={(e) => this.handleClick(e)} ></img>
          <img src="https://i.imgur.com/LsgTuQ4.jpg" alt="food" value="https://i.imgur.com/LsgTuQ4.jpg" className="gallery-image-container" onClick={(e) => this.handleClick(e)} ></img>
          <img src="https://i.imgur.com/dKHM2g6.jpg" alt="food" value="https://i.imgur.com/dKHM2g6.jpg" className="gallery-image-container" onClick={(e) => this.handleClick(e)} ></img>
          <img src="https://i.imgur.com/IX9jIQk.jpg" alt="food" value="https://i.imgur.com/IX9jIQk.jpg" className="gallery-image-container" onClick={(e) => this.handleClick(e)} ></img>
          <img src="https://i.imgur.com/fTNhbiz.jpg" alt="food" value="https://i.imgur.com/fTNhbiz.jpg" className="gallery-image-container" onClick={(e) => this.handleClick(e)} ></img>
        </div >
      </div >
    )
  }
}

export default Gallery
