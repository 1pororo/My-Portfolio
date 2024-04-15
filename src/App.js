import Home from "./Home";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
