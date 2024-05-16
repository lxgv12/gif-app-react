// SearchGifs.js
import React, { useState } from 'react';
import ListOfGifs from './ListOfGifs';

export default function BuscarGif() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Busqueda de GIF"
        value={searchKeyword}
        onChange={handleInputChange}
      />
      <br/>
      <ListOfGifs keyword={searchKeyword} />
      <br/>
    </div>
  );
}
