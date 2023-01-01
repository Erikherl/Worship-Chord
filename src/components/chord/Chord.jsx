import React from 'react'
import './Chord.css'


import G from './data/KuduslahTuhan/main'
import A from './data/KuduslahTuhan/A'
import B from './data/KuduslahTuhan/B'
import Bb from './data/KuduslahTuhan/Bb'
import C from './data/KuduslahTuhan/C'
import Cs from './data/KuduslahTuhan/Cs'
import D from './data/KuduslahTuhan/D'
import Ds from './data/KuduslahTuhan/Ds'
import E from './data/KuduslahTuhan/E'
import F from './data/KuduslahTuhan/F'
import Fs from './data/KuduslahTuhan/Fs'
import Gs from './data/KuduslahTuhan/Gs'

import Lyrics from './lyric/Lyrics'

const Chord = () => {


  return (
    <div>
      <p><strong>Bait :</strong></p>
      <Lyrics isEmbedChord={false}>Ku Dat[Em]ang Tuhan</Lyrics>
      <Lyrics isEmbedChord={false}>Dalam Hadi[Bm]ratMu</Lyrics>
      <Lyrics isEmbedChord={false}>[C]Berhiaskan Kekudu[D]san</Lyrics>
      <Lyrics isEmbedChord={false}>Selur[Em]uh Surga, Sujud Menyembahmu</Lyrics>
      <Lyrics isEmbedChord={false}>[C]Ku Tersung[Am]kur Dan Berse[D]ru</Lyrics>

      <p><strong>Reff :</strong></p>
      <Lyrics isEmbedChord={false}>Kudus, [G]Kuduslah</Lyrics>
      <Lyrics isEmbedChord={false}>Ku[Am]duslah Tuhan</Lyrics>
      <Lyrics isEmbedChord={false}>[D]Allah Semesta [G]Alam</Lyrics>
      <Lyrics isEmbedChord={false}>Kudus, [G]Kuduslah</Lyrics>
      <Lyrics isEmbedChord={false}>Ku[Am]duslah Tuhan</Lyrics>
      <Lyrics isEmbedChord={false}>[C]Surga Bum[D]i Menyemb[G]ahmu</Lyrics>
    </div>
  )
}

export default Chord