
import React from 'react'
import {  BrowserRouter,  Routes,  Route,  Link, Navigate,} from "react-router-dom";
import Contact from './Components/Pages/Contact/Contact.js'
import Home from './Components/Pages/Home/Home.js'
import About from './Components/Pages/About/About.js'
import Portfolio from './Components/Pages/Portfolio/Portfolio.js'
import Navbar from './Components/Pages/Navbar/Navbar.js';
import './App.css'
import NotFound from './Components/Pages/NotFound/NotFound.js';

const App = () => {
  
  return (
      <>
     <Navbar/>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Portfolio />} />
      
      <Route path="/404" element={<NotFound />} />
          	<Route path="*" element={<Navigate to="/404" />} />
    </Routes>
      
    </>
  )
}

export default App
