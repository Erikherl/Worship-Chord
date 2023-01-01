import React from 'react'
import './CategorySection.css'

const CategorySection = () => {
  return (
    <div className='containerCategorySection'>
        <p>Pilih Kategori: </p>
        <div classNAme="containerButtonCategory">
          <button>A - D</button>
          <button>E - H</button>
          <button>I - L</button>
          <button>M - P</button>
          <button>Q - T</button>
          <button>U - X</button>
          <button>Z</button>
        </div>
    </div>
  )
}

export default CategorySection