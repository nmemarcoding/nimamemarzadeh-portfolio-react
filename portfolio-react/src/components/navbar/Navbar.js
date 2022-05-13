import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <a href="/">

          <h1 className="name">genius.</h1>  
        </a>
      </div>
      <div className="right">
        <Link to="/about">
          <div className="link">AboutMe</div>
        </Link>
        <Link to="/portfolio">
          <div className="link">Portfolio</div>
        </Link>
      
        <Link to="/contact">
          <div className="link">Contact</div>
        </Link>
        <Link to="/resume">
          <div className="link">Resume</div>
        </Link>
      </div>
    </div>
  )
}
