import React from 'react'
import './About.css'
import {init} from 'ityped';
import {useEffect, useRef} from "react"

export default function About() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:2500,
            backSpeed:60,
            strings:["Full Stack Web Developer"],
        });
    },[])
  return (
    <div className="about">
        <div className="about__left">
            <img className="protfolio__img" src="images/portfolio.png" alt=""></img>
        </div>
        <div className="about__rigt">
            <h3>Hi Ther, i'm</h3>
            <h1>Nima Memarzadeh</h1>
            <h3> <span ref={textRef}></span></h3>
        </div>
    </div>
  )
}