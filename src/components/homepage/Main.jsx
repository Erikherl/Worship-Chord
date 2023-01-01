import React from 'react'
import "./Main.css"
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div className='containerMain'>
        <section>
          <h1>Selamat Datang,</h1>
          <p style={{textIndent:"25px", lineHeight:"4vh", textAlign:"justify"}}> Bagi kalian yang belum tau Worship Chord, di website ini kalian bisa melakukan apa saja untuk belajar mengenai chord guitar, yang paling menarik adalah kalian bisa akses ini dimanapun dan kapapun anda beranda tanpa ada biaya satupun. Jadi, segera gunakanlah Worship Chord ketika anda membutuhkannya</p>
          <img src={require("../../assets/Gitar.jpg")} className='imageMain'/>
          <p style={{textIndent:"25px", lineHeight:"4vh", textAlign:"justify"}}>Jangan lupa untuk rekomendasikan website ini ke teman - teman ataupun kerabatmu ya, agar website ini dapat terus berkembang menjadi lebih baik dan memberikan manfaat yang lebih luas untuk masyarakat yang menginginkan untuk belajar gitar</p>
        </section>

        <aside>
          <div className='containerAside'>
            <h3>Lagu Sedang Trending:</h3>
            <hr style={{border: "1px solid black"}}></hr>
            <p><Link to="/chord">- Nyanyian Lagu Nan Swa</Link></p>
            <p><Link to="/chord">- Kuduslah TuhanMu</Link></p>
            <p><Link to="/chord">- Merry Christmast Night</Link></p>
            <p><Link to="/chord">- Nyanyian Lilin</Link></p>
          </div>
          <div className='containerAside'>
            <h3>Lagu Rekomendasi Kami:</h3>
            <hr style={{border: "1px solid black"}}></hr>
            <p><Link to="/chord">- Kuduskanlah Hari Tuhan</Link></p>
            <p><Link to="/chord">- Kuduslah TuhanMu</Link></p>
            <p><Link to="/chord">- Merry Christmast Night</Link></p>
            <p><Link to="/chord">- Nyanyian Lilin</Link></p>
          </div>
        </aside>
    </div>
  )
}

export default Main