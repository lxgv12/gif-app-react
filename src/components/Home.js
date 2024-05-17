import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscarGif from "./BuscarGif"
import Footer from "./Footer"
import Carousel from './Carousel';

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