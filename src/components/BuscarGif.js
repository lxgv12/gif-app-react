import React, { useState } from 'react';
import ListOfGifs from './ListOfGifs';
import Footer from "./Footer"
import Carousel from './Carousel';

export default function BuscarGif() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
    <Carousel />
    <header class="p-3 mb-3 border-bottom">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          </ul>
          <form class="col-12 col-lg-auto mb-6 mb-lg-0 me-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Busqueda de GIF"
                  value={searchKeyword}
                  onChange={handleInputChange}
                />
          </form>
        </div>
      </div>
    </header>
    <br/>
    <ListOfGifs keyword={searchKeyword} />
    <br/>
    <Footer />
    </>
  );
}
