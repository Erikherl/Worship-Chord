import React from 'react'
import "./Category.css"
import {Link} from 'react-router-dom'

const Category = () => {
  return (
    <div className='container' style={{textAlign:"center"}}>
      <div>
        <h2>Pilih Kategori:</h2>
        <div className="containerButtonCategory2">
          <button>A - D</button>
          <button>E - H</button>
          <button>I - L</button>
          <button>M - P</button>
          <button>Q - T</button>
          <button>U - X</button>
          <button>Z</button>
        </div>
        <hr style={{margin:"5vh 0"}}></hr>
      </div>

      <div className='containerCategory'>
        <h2>Lagu Populer:</h2>
        <Link to="/chord">- Nyanyian Lagu Nan Swa</Link>
        <Link to="/chord">- Kuduslah TuhanMu</Link>
        <Link to="/chord">- Merry Christmast Night</Link>
        <Link to="/chord">- Nyanyian Lilin</Link>
        <hr style={{margin:"5vh 0"}}></hr>
      </div>

      
      <div className='containerCategory'>
        <h2>Lagu Rekomendasi:</h2>
        <Link to="/chord">- Kuduskanlah Hari Tuhan</Link>
        <Link to="/chord">- Kuduslah TuhanMu</Link>
        <Link to="/chord">- Merry Christmast Night</Link>
        <Link to="/chord">- Nyanyian Lilin</Link>
        <hr style={{margin:"5vh 0"}}></hr>
      </div>
    </div>
  )
}

export default Category