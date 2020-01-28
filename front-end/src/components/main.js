import React from 'react'
import logo from '../image/Logo.png'

export default function Main() {
  return (
    <div>
      <div className="mediaBar" />
      <div className="main">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="RectangleX" />
      <div className="RectangleY" />
    </div>
  )
}