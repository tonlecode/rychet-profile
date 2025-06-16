import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import EduDT from './pages/EduDT';
import WatTD from './pages/watTD';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        {/* Navigation */}
        <nav className="bg-black shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl text-white">rychet/profile</Link>
              <div className="flex space-x-8 text-lg">
  <Link to="/" className="hover:text-orange-500 transition">Home</Link>
  <Link to="/blog" className="hover:text-orange-500 transition">Blog</Link>
</div>

            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/eduDT" element={<EduDT />} />
          <Route path="/watDT" element={<WatTD />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black text-white py-8 border-t border-orange-500">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center items-center">
              <p className="text-gray-400 text-center">
                2025, Chet .Ry. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
