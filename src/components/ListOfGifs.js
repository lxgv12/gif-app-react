import React, {useState, useEffect} from 'react'
import getGifs from '../services/getGifs';
import Gif from './Gif'
import '../styles/Gif.css'

export default function ListOfGifs({keyword}) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
     getGifs({keyword}).then(gifs => setGifs(gifs))
  }, [keyword])
 
  return (
    <div className="gif-container">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}