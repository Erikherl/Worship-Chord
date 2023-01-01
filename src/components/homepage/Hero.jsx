import React from 'react'
import "./Hero.css"

const hero = () => {
  return (
    <div className='containerHero'>
        <img src={require("../../assets/Musik.jpg")} className="imageHero"></img>
    </div>
  )
}

export default hero