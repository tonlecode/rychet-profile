import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import EduDT from "./pages/EduDT";
import WatTD from "./pages/watTD";

// Google Fonts for Khmer Battambang is now loaded in index.html
import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        {/* Navigation */}
        <nav className="bg-blue-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <NavLink
                to="/"
                className="text-2xl text-white hover:text-gray-300 transition"
              >
                rychet/profile
              </NavLink>
              <div className="flex space-x-8 text-lg">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    (isActive
                      ? "border-b-2 border-orange-500 pb-1"
                      : "hover:text-orange-500 transition") + " font-khmer"
                  }
                >
                  ទំព័រដើម
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    (isActive
                      ? "border-b-2 border-orange-500 pb-1"
                      : "hover:text-orange-500 transition") + " font-khmer"
                  }
                >
                  ប្លុក
                </NavLink>
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
              <h1 className="font-khmer">ចិត្ត</h1>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
