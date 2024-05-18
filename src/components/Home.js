import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscarGif from "./BuscarGif"
import DetailGif from './DetailGif'

export default function Home() {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<BuscarGif />} />
            <Route exact path="/detalle-gif/:url" element={<DetailGif />} />
        </Routes>
      </Router>
    </>
  );
}