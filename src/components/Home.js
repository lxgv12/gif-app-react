import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscarGif from "./BuscarGif"
import Carousel from "./Carousel";
import Footer from "./Footer"

export default function Home() {
  return (
    <>
      <Carousel />
      <Router>
      <Routes>
          <Route path="/" element={<BuscarGif />} />
        </Routes>
      </Router>
      <Footer />
    </>
    
  );
}