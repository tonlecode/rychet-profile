import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeM from "./pages/ShowMobile/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Library from "./pages/Library";
import Home from "./pages/Home";
import Photos from "./Library/Photos";
import Videos from "./Library/Videos";
// dropdown pages
import Software from "./dropdownPages/Software";
import MoreFile from "./dropdownPages/MoreFile";
import Wat from "./BlogDT/watTD";
import EduDT from "./BlogDT/EduDT";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hidden lg:block">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/library" element={<Library />} />
            <Route path="/software" element={<Software />} />
            <Route path="/morefile" element={<MoreFile />} />
            <Route path="/EduDT" element={<EduDT />} />
            <Route path="/wat" element={<Wat />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </Router>
      </div>

      <div className='lg:hidden'>
        <Router>
          <Routes>
            <Route path="/" element={<HomeM />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
