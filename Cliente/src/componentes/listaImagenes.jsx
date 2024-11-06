import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './listaImagenes.css';

const ListaImagenes = ({ setImagenSeleccionada }) => {
    const [imagenes, setImagenes] = useState([]);
    //const url_servidor = "https://servidorimagenes-production.up.railway.app";
    const url_servidor="http://localhost:3002"
    const endpoint = `${url_servidor}/api/imagenes`;

    useEffect(() => {
        const fetchImagenes = async () => {
            
            try {
                const response = await axios.get(endpoint);
                setImagenes(response.data);
                console.log(imagenes);
            } catch (error) {
                console.error('Error al obtener imágenes:', error);
            }
        };

        fetchImagenes();
    }, []);

    return (
        <div>
            <h1>Lista de Imágenes</h1>
            <div className="grid-container">
                {imagenes.map((imagen) => (
                    <div className="grid-item" key={imagen._id} onClick={() => setImagenSeleccionada(imagen)}>
                        <img src={url_servidor+imagen.url} alt={imagen.nombre} />
                        <span>{imagen.nombre}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaImagenes;
