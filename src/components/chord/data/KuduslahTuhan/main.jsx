import React from 'react'
import Lyrics from '../../lyric/Lyrics'

const main = () => {
  return (
    <div>
      <p><strong>Bait :</strong></p>
      <Lyrics isEmbedChord={false}>Ku Dat[Em]ang Tuhan{"\n"}
      Dalam Hadi[Bm]ratMu{"\n"}
      [C]Berhiaskan Kekudu[D]san{"\n"}
      Selur[Em]uh Surga, Sujud Menyembahmu{"\n"}
      [C]Ku Tersung[Am]kur Dan Berse[D]ru{"\n"}</Lyrics>
      <p><strong>Reff :</strong></p>
      
      <Lyrics isEmbedChord={false}>Kudus, [G]Kuduslah{"\n"}
      Ku[Am]duslah Tuhan{"\n"}[D]Allah Semesta [G]Alam{"\n"}
      Kudus, [G]Kuduslah{"\n"}
      Ku[Am]duslah Tuhan{"\n"}[C]Surga Bum[D]i Menyemb[G]ahmu</Lyrics>
    </div>
  )
}

export default main