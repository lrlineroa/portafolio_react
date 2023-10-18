import "./App.css";
import "./assets/css/tailwind.css";
import "./assets/css/main.css";
import { useEffect } from "react";
import Setup from "./bootstrap/Setup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import Blog from "./modules/blog";
function App() {
  useEffect(() => {
    require("./assets/js/main.js");
  }, []);
  return (
    <Setup>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </Setup>
  );
}

export default App;
