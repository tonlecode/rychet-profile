import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// Pages
import About from './pages/About'
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'
import Library from './pages/Library'
import Home from './pages/Home'
import Photos from './Library/Photos';
import Videos from './Library/Videos';
// dropdown pages
import Software from './dropdownPages/Software';
import Wat from './BlogDT/watTD';
import EduDT from './BlogDT/EduDT';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/library" element={<Library />} />
        <Route path="/software" element={<Software />} />
        <Route path="/EduDT" element={<EduDT />} />
        <Route path="/wat" element={<Wat />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>


    </Router>
    </>
  )
}

export default App
