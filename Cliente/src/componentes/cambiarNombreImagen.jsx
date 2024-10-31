import React, { useState } from 'react';
import axios from 'axios';

const CambiarNombreImagen = ({ imagen }) => {
    const [nuevoNombre, setNuevoNombre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/imagenes/cambiar-nombre', {
                nombreActual: imagen.nombre,
                nuevoNombre,
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
                    value={nuevoNombre}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Cambiar nombre</button>
        </form>
    );
};

export default CambiarNombreImagen;
