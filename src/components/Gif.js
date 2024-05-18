import React from 'react';
import '../styles/Gif.css';
import { Link } from 'react-router-dom';

export default function Gif({ title, id, url }) {
  return (
    <div className="gif-card">
        <Link to={`/detalle-gif/${encodeURIComponent(url)}`}>
          <img
              src={url}
              className="gif-img"
              alt={title}
              width={350}
              height={350}
            />
        </Link>
        
        <div className="gif-info">
          <h5 className="gif-title">{id}</h5>
        </div>
    </div>
  );
}
