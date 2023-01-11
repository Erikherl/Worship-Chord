import './App.css';
import { Routes, Route} from "react-router-dom"

import Screen from './components/screen/Screen';
import Homepage from './page/homepage/Homepage';
import About from './page/about/About';
import Category from './page/category/Category';
import Chord from './page/chord/Chord';

import G from './components/chord/data/KuduslahTuhan/main'
import A from './components/chord/data/KuduslahTuhan/A'
import B from './components/chord/data/KuduslahTuhan/B'
import Bb from './components/chord/data/KuduslahTuhan/Bb'
import C from './components/chord/data/KuduslahTuhan/C'
import Hs from './components/chord/data/KuduslahTuhan/Hs'
import D from './components/chord/data/KuduslahTuhan/D'
import Ds from './components/chord/data/KuduslahTuhan/Ds'
import E from './components/chord/data/KuduslahTuhan/E'
import F from './components/chord/data/KuduslahTuhan/F'
import Fs from './components/chord/data/KuduslahTuhan/Fs'
import Gs from './components/chord/data/KuduslahTuhan/Gs'
import DefaultSong from './components/chord/data/KuduslahTuhan/main'

function App() {

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Screen></Screen>}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About></About>}></Route>
            <Route path="category" element={<Category></Category>}></Route>
            <Route path="chord" element={<Chord></Chord>}>
              <Route index element={<DefaultSong></DefaultSong>}/>
              <Route path="G" element={<G/>}></Route>
              <Route path="A" element={<A/>}></Route>
              <Route path="B" element={<B/>}></Route>
              <Route path="Bb" element={<Bb/>}></Route>
              <Route path="C" element={<C/>}></Route>
              <Route path="Hs" element={<Hs/>}></Route>
              <Route path="D" element={<D/>}></Route>
              <Route path="Ds" element={<Ds/>}></Route>
              <Route path="E" element={<E/>}></Route>
              <Route path="F" element={<F/>}></Route>
              <Route path="Fs" element={<Fs/>}></Route>
              <Route path="Gs" element={<Gs/>}></Route>
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
