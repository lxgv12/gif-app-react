import React from 'react';

export default function DetailGif(props) {
  const { id } = props.match.params; // Obtiene el valor de "id" desde la URL
  // Lógica específica para DetailGif
  console.log('id', id)
  return (
    <div>
      {/* Utiliza la propiedad id aquí */}
      <h1>Detalle del gif {id}</h1>
      {/* Agrega más contenido específico para DetailGif */}
    </div>
  );
}
