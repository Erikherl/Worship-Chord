import React from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <nav>
      <img src={require("../../../assets/LogoWorshipChord.png")} className="navbarLogo"/>
      <span>
        <a><Link to="/">Home</Link></a>
        <a><Link to="/about">About</Link></a>
        <a><Link to="/category">Category</Link></a>
        <p><Link to="/chord"><strong>Search: </strong><input placeholder='Cari Disini...'></input></Link></p>
      </span>
    </nav>

  )
}

export default navbar