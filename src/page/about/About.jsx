import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'

import CategorySection from '../../components/screen/category/CategorySection'

const About = () => {
  return (
    <div className='container'>
        <CategorySection></CategorySection>
        <hr style={{border:"1px solid rgb(249, 193, 126)"}}></hr>
        <div className='aboutContainer'>
          <img src={require("../../assets/LogoWorshipChord.png")} className='imageAbout'></img> 
          <div>
            <h1>Worship Chord</h1>
            <hr style={{border:"1px solid black"}}></hr>
            <p style={{textIndent:"25px", lineHeight:"4vh", textAlign:"justify"}}>Worship Chord dibuat untuk membantu para masayarakat terutama kalangan muda yang membutuhkan informasi Chord Guitar secara gratis dan dapat diakses dimanapun, kapapun kita berada. </p>
            <p style={{textIndent:"25px", lineHeight:"4vh", textAlign:"justify"}}>Untuk pembuatan website ini dilakukan secara mandiri dan dilakukan dalam mengerjakan Kerja Praktik. Selama pengerjaan banyak halangan, dan bug yang terjadi.</p>
          </div>
        </div>

        <div className='containerMain'>
        <section>
          <p style={{textIndent:"25px", lineHeight:"4vh", textAlign:"justify"}}> Bagi kalian yang belum tau Worship Chord, di website ini kalian bisa melakukan apa saja untuk belajar mengenai chord guitar, yang paling menarik adalah kalian bisa akses ini dimanapun dan kapapun anda beranda tanpa ada biaya satupun. Jadi, segera gunakanlah Worship Chord ketika anda membutuhkannya</p>
          <img src={require("../../assets/Gitar.jpg")} className='imageMain'/>
          <p style={{textIndent:"25px", lineHeight:"4vh", textAlign:"justify"}}>Jangan lupa untuk rekomendasikan website ini ke teman - teman ataupun kerabatmu ya, agar website ini dapat terus berkembang menjadi lebih baik dan memberikan manfaat yang lebih luas untuk masyarakat yang menginginkan untuk belajar gitar</p>
        </section>

        <aside>
          <div className='containerAside'>
            <h3>Social Media:</h3>
            <hr style={{border: "1px solid black"}}></hr>
            <ul>
              <li>
                <img src={require("../../assets/facebook.webp")} style={{width:"2vw",height:"5vh"}}></img>
                <p><strong>facebook/worshipchord</strong></p>
              </li>
              <li>
                <img src={require("../../assets/instagram.webp")} style={{width:"2vw",height:"5vh"}}></img>
                <p><strong>instagram/@worshipchord</strong></p>
              </li>
              <li>
                <img src={require("../../assets/twitter.png")} style={{width:"2vw",height:"5vh"}}></img>
                <p><strong>twitter/worshipchord</strong></p>
              </li>
            </ul>
          </div>

        </aside>
    </div>
    </div>
  )
}

export default About