import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function Gallery() {
  return (
    <div>
      <div className="Divider1"></div><div className="Divider2"></div>

      <div className="Gal">
        <div className="GalleryHeading"></div>
        <p className="Gallery"> Gallery<FaInstagram className="icons" /></p>
        <div className="GalleryHeading"></div >
      </div>
    </div >
  )
}

export default Gallery
