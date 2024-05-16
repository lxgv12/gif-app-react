import React from 'react';
import '../styles/Gif.css';

export default function Gif({ title, id, url }) {
  return (
    <div className="gif-card">
        
          <img
            src={url}
            className="gif-img"
            alt={title}
            width={350}
            height={350}
          />
       
        <div className="gif-info">
          <h5 className="gif-title">{id}</h5>
        </div>
    </div>
  );
}
