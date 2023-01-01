import React from 'react'
import "./Chord.css"
import { Link } from 'react-router-dom'

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
          <button>A</button>
          <button>Bb</button>
          <button>B</button>
          <button>C</button>
          <button>C#</button>
          <button>D</button>
          <button>D#</button>
          <button>E</button>
          <button>F</button>
          <button>F#</button>
          <button>G</button>
          <button>G#</button>
        </div>
        <hr style={{border:"1px solid rgb(249, 193, 126)"}}></hr>
        <div>
          <Chord></Chord>
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