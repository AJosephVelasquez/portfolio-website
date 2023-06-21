import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Themes from "./components/themes/Themes";
import Navbar from './components/navbar/Navbar';
import Portfolio from "./pages/portfolio/Portfolio";

function App(){
    return(
        <BrowserRouter>
        <Navbar />
        <Themes />
            <Routes>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;