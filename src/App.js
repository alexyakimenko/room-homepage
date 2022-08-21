import React, {useState} from "react"
import {GlobalStyle} from "./GlobalStyles"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="App">
      <GlobalStyle isNavOpen={isNavOpen} />
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Hero />
      <About />
    </div>
  );
}

export default App
