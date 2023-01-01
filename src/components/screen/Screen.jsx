import React from 'react'
import {Outlet} from 'react-router-dom'
import "./Screen.css"

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Screen = () => {
  return (
    <div className='containerScreen'>
        <Navbar></Navbar>
            <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Screen