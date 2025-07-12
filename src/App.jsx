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
import AboutM from './pages/ShowMobile/About'
import SoftwareM from "./pages/ShowMobile/SoftwareM";
import EduDTM from "./BlogDT/EduDTM";
import WatTDM from "./BlogDT/watTDM";
import MoreFileM from "./dropdownPages/MoreFileM";
import PhotosM from "./Library/PhotosM";
import VideosM from "./Library/VideosM";
import ContactM from "./pages/ShowMobile/Contact";

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
            <Route path="/about" element={<AboutM />} />
            <Route path="/software" element={<SoftwareM />} />
            <Route path="/EduDT" element={<EduDTM />} />
            <Route path="/EduDT" element={<EduDTM />} />
            <Route path="/wat" element={<WatTDM />} />
            <Route path="/morefile" element={<MoreFileM />} />
            <Route path="/photos" element={<PhotosM />} />
            <Route path="/videos" element={<VideosM />} />
            <Route path="/contact" element={<ContactM />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
