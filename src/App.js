import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Qua from "./pages/Qua";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/qualifications" element={<Qua />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;