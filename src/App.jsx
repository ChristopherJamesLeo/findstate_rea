

import {BrowserRouter, Routes, Route} from "react-router-dom";


import Nav from "./sections/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Agent from "./components/Agent";
import Contact from "./components/Contact";
import Listing from "./components/Listing";
import Services from "./components/Services";

function App() {
  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/agent" element={<Agent/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/listing" element={<Listing/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
