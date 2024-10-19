import React, { useState } from 'react';
import axios from 'axios';

const ImagenForm = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!file) return;

    // Crear un objeto FormData para enviar el archivo
    const formData = new FormData();
    formData.append('imagen', file);
    formData.append('nombre','valor');

    const url_servidor = "http://localhost:3002";
    const endpoint = `${url_servidor}/api/imagenes`;

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
        withCredentials: true
      });

      // La respuesta debe tener el estado 200 si todo va bien
      if (response.status !== 201) {
        throw new Error('Falla al subir la imagen');
      }

      // Obtener la ruta de la imagen subida
      setImageUrl(`http://localhost:3002${response.data.filePath}`);
      console.log(imageUrl);
    } catch (error) {
      console.error('Error subiendo imágenes:', error);
    }
  };

  return (
    <div>
      <h1>Subir Imágenes</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button className="btn btn-primary" type="submit">Subir</button>
      </form>
      {imageUrl && (
        <div>
          <h2>Imagen subida</h2>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default ImagenForm;
