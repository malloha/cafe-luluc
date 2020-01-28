import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <div className="Footer">
      <div>
        <FaInstagram className="footer-icon" />
        <FaFacebookF className="footer-icon" />
        < FaTwitter className="footer-icon" />

        <div>Careers</div>
        <div>Press</div>
        <div>Contact</div>
      </div>
      <div>
        Join our email list!

        <br />
        <input></input>
      </div>

    </div>
  )
}

export default Footer
