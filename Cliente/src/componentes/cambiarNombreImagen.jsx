import React, { useState } from 'react';
import axios from 'axios';

const CambiarNombreImagen = ({ imagen }) => {
    const [nuevoNombre, setNuevoNombre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url_servidor="http://localhost:3002"
        const endpoint = `${url_servidor}/api/imagenes/${imagen._id}`;
        try {
            const response = await axios.put(endpoint, {
                nombreActual: imagen.nombre,
                nombre:nuevoNombre+".jpg",
            });

            if (response.status === 200) {
                alert('Nombre cambiado con éxito');                
            }
        } catch (error) {
            alert('Error al cambiar el nombre');
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Cambiar nombre para {imagen.nombre}:               
                <input
                    type="text"
                value={nuevoNombre||""}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Cambiar nombre</button>
        </form>
    );
};

export default CambiarNombreImagen;
