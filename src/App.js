import React, {useState} from "react"
import {GlobalStyle} from "./GlobalStyles"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="App">
      <GlobalStyle isNavOpen={isNavOpen} />
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Hero />
    </div>
  );
}

export default App
