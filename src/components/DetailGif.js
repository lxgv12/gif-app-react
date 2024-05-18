import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Card.css';

export default function DetailGif() {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);

  return (  
    <>
      <Link to={'/'}>
          <button type="button" class="btn btn-success">Inicio</button>
      </Link>
      <br/>
      <div class="card-container">
        <div class="card">
          <div class="card-body">
              <h5 class="card-title">Detalle del Gif</h5>
              <p class="card-text">
                  <img 
                      src={decodedUrl} alt="Gif" 
                      className="gif-img"
                      width={500}
                      height={500}
                  />
              </p>
          </div>
        </div>
      </div>
      
    </>
  );
}
