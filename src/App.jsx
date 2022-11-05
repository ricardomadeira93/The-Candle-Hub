import "./App.css";
import React from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import MenuSelector from "./components/MenuSelector";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MenuSelector />
    </div>
  );
}

export default App;
