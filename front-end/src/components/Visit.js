import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'

function Visit() {
  return (
    <div className="Visit">
      <div className="Divider1"></div><div className="Divider2"></div>
      <div className="Gal">
        <div className="GalleryHeading"></div>
        <p className="Gallery"> Visit</p>
        <div className="GalleryHeading"></div>
      </div>
      <div className="contact-container">
        <div className="contact">
          <FaHome className="icons" />
          214 Smith St,
          <br />
          Brooklyn,
          <br />
          New York, 11201
        </div>
        <div className="line">
        </div>
        <div className="contact">
          <MdPhone className="icons" />
          (718) 625-3815
        </div>
      </div>
      <div>
        <div className="Hours">Hours <FaRegClock className="icons" /></div>
        <div className="timings">
          <div className="days">
            Mon <br />
            Tue <br />
            Wed <br />
            Thur <br />
            Fri <br />
            Sat <br />
            Sun <br />
          </div>
          <div className="time">
            8:30AM–3:30 PM/ 5:00–11:30PM <br />
            8:30AM–3:30 PM/ 5:00–11:30PM <br />
            8:30AM–3:30 PM/ 5:00–11:30PM <br />
            8:30AM–3:30 PM/ 5:00–11:30PM <br />
            8:30AM–3:30 PM/ 5:00–11:30PM <br />
            8:30AM–3:30 PM/ 5:00–11:30PM <br />
            8:30AM–3:30 PM/ 5:00–11:30PM <br />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Visit
