import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <h1 className="name">genius.</h1>  
      </div>
      <div className="right">
        <Link to="/about">
          <div className="link">AboutMe</div>
        </Link>
        <Link to="/portfolio">
          <div className="link">Portfolio</div>
        </Link>
        <div className="link">Conatact</div>
        <div className="link">Resume</div>
      </div>
    </div>
  )
}
