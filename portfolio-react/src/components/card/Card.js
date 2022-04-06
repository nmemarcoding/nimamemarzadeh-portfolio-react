import React from 'react'
import './Card.css'
export default function Card({image,git,web}) {
  return (
    <div className="card">
        <img src={image} alt="" className="image"></img> 
        <div className="link__list" target="_blank">
          <a href={git} target="_blank">GitHub</a>
          <a href={web} target="_blank">Website</a>
        </div>
    </div>
  ) 
}





