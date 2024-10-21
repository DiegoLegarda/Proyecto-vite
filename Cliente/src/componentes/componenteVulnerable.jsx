import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CargarScript = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Hacer la petición al backend para cargar el script en la cookie
    axios.get('http://localhost:3000/envioScript')
      .then(response => {
        console.log('Script enviado a la cookie:', response.data);
        
        // Intentar ejecutar el script que está en la cookie (demostración de vulnerabilidad)
        const cookies = document.cookie.split(';');
        const scriptCookie = cookies.find(cookie => cookie.trim().startsWith('clickScript='));
        
        if (scriptCookie) {
          const scriptContent = decodeURIComponent(scriptCookie.split('=')[1]);
          
          // Insertar y ejecutar el script (demostración de vulnerabilidad)
          const scriptTag = document.createElement('script');
          scriptTag.innerHTML = scriptContent;
          document.body.appendChild(scriptTag);
        }
      })
      .catch(error => {
        console.error('Error al cargar el script:', error);
      });
  }, []);

  // Función para manejar los clics
  const handleClick = () => {
    let newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    localStorage.setItem('contador', newClickCount);

    // Enviar el número de clics al servidor
    axios.post('http://localhost:3000/recepcionInfo', { contador: newClickCount })
      .then(response => {
        console.log('Número de clics enviado al servidor:', newClickCount);
        console.log('Respuesta del servidor:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar los clics al servidor:', error);
      });
  };

  return (
    <div>
      <h1>Demostración de Vulnerabilidad XSS</h1>
      <p>Haz clic en el botón para aumentar el contador:</p>
      <button id="countButton" onClick={handleClick}>Click me</button>
    </div>
  );
};

export default CargarScript;
