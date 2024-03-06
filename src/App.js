import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
function App() {
  return (
     <div className="App" > 
        <div>
          <Navbar />
          <Home/>
          <About/>
          <Projects/>
          <Contact/>


          {/* for routing
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> */}

        </div>
      
    </div>
  );
}

export default App;
