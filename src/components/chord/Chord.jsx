import React from 'react'
import './Chord.css'

import { Outlet, useParams } from 'react-router-dom'

import G from './data/KuduslahTuhan/main'
import A from './data/KuduslahTuhan/A'
import B from './data/KuduslahTuhan/B'
import Bb from './data/KuduslahTuhan/Bb'
import C from './data/KuduslahTuhan/C'
import Cs from './data/KuduslahTuhan/Hs'
import D from './data/KuduslahTuhan/D'
import Ds from './data/KuduslahTuhan/Ds'
import E from './data/KuduslahTuhan/E'
import F from './data/KuduslahTuhan/F'
import Fs from './data/KuduslahTuhan/Fs'
import Gs from './data/KuduslahTuhan/Gs'

import Lyrics from './lyric/Lyrics'

const Chord = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>
      <G></G>
    </div>
  )
}

export default Chord