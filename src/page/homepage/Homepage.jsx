import React from 'react'
import "./Homepage.css"

import Hero from '../../components/homepage/Hero'
import Main from '../../components/homepage/Main'
import CategorySection from '../../components/screen/category/CategorySection'

const Homepage = () => {
  return (
    <div className='container'>
        <Hero></Hero>
        <CategorySection></CategorySection>
        <Main></Main>
    </div>
  )
}

export default Homepage