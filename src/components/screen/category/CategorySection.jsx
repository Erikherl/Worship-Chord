import React from 'react'
import './CategorySection.css'
import { Link } from 'react-router-dom'

const CategorySection = () => {
  return (
    <div className='containerCategorySection'>
        <p>Pilih Kategori: </p>
        <div classNAme="containerButtonCategory">
          <button><Link to="category">A - D</Link></button>
          <button><Link to="category">E - H</Link></button>
          <button><Link to="category">I - L</Link></button>
          <button><Link to="category">M - P</Link></button>
          <button><Link to="category">Q - T</Link></button>
          <button><Link to="category">U - X</Link></button>
          <button><Link to="category">Z</Link></button>
        </div>
    </div>
  )
}

export default CategorySection