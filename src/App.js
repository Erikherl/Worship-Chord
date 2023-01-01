import './App.css';
import { Routes, Route} from "react-router-dom"

import Screen from './components/screen/Screen';
import Homepage from './page/homepage/Homepage';
import About from './page/about/About';
import Category from './page/category/Category';
import Chord from './page/chord/Chord';

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
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
