import React, {useState} from "react"
import {GlobalStyle} from "./GlobalStyles"
import Navbar from "./components/Navbar";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </div>
  );
}

export default App
