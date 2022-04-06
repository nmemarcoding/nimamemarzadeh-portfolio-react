import React from 'react'
import './Portfolio.css'
import Crad from '../card/Card.js'
import {projects} from "../portfolioData.js"

export default function Portfolio() {
  return (
    <div className="portfolio">
        {projects.map(data =>(<Crad className="card" image={data.img} web={data.web} git={data.git}/> ))}
    </div>
  )
}
