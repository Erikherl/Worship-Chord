import React from 'react'
import "./Chord.css"
import { Link, Outlet } from 'react-router-dom'

import Chord from '../../components/chord/Chord'

const chord = () => {

  return (
    <div className='containerPaper' style={{paddingTop:"-10vh"}}>
        <div className='containerTitleChord'>
          <img src={require("../../assets/music.webp")} className="imageChord"></img>
          <span>
            <h3>Kuduslah Tuhan</h3>
            <p>Tidak Diketahui</p>
          </span>
        </div>
        <hr style={{border:"1px solid rgb(249, 193, 126)"}}></hr>
        <div className="containerButtonCategory3" style={{marginLeft:"-1vw"}}>
          <button><Link to="A">A</Link></button>
          <button><Link to="Bb">Bb</Link></button>
          <button><Link to="B">B</Link></button>
          <button><Link to="C">C</Link></button>
          <button><Link to="Hs">C#</Link></button>
          <button><Link to="D">D</Link></button>
          <button><Link to="Ds">D#</Link></button>
          <button><Link to="E">E</Link></button>
          <button><Link to="F">F</Link></button>
          <button><Link to="Fs">F#</Link></button>
          <button><Link to="G">G</Link></button>
          <button><Link to="Gs">G#</Link></button>
        </div>
        <hr style={{border:"1px solid rgb(249, 193, 126)"}}></hr>
        <div>
          <Outlet></Outlet>
        </div>
        <hr style={{margin:"5vh 0"}}></hr>
        <div className='containerCategory2'>
        
        <h2>Lagu Populer:</h2>
        <hr style={{border:"0.5px solid black", width:"25vw"}}></hr>
        <Link to="/chord">- Nyanyian Lagu Nan Swa</Link>
        <Link to="/chord">- Kuduslah TuhanMu</Link>
        <Link to="/chord">- Merry Christmast Night</Link>
        <Link to="/chord">- Nyanyian Lilin</Link>
        
      </div><hr style={{margin:"5vh 0"}}></hr>

    </div>
  )
}

export default chord