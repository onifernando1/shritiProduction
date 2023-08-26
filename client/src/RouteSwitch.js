import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Workshops from "./pages/Workshops";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Abstract from "./pages/Abstract";
import Landscape from "./pages/Landscape";
import Figurative from "./pages/Figurative";
import Portrait from "./pages/Portrait";
import Animals from "./pages/Animals";
import Asian from "./pages/Asian";
import Other from "./pages/Other";
import LogInForm from "./components/LogInForms";
import SignUpForm from "./components/SignUpForm";
import Nudes from "./pages/Nudes";
import Cyclists from "./pages/Cyclists";
import Littlepeople from "./pages/Littlepeople";
import Dancers from "./pages/Dancers";
import Seascape from "./pages/Seascape";

const RouteSwitch = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/figurative" element={<Figurative />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/asian" element={<Asian />} />
          <Route path="/nudes" element={<Nudes />} />
          <Route path="/cyclists" element={<Cyclists />} />
          <Route path="/littlepeople" element={<Littlepeople />} />
          <Route path="/dancers" element={<Dancers />} />
          <Route path="/seascape" element={<Seascape />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
