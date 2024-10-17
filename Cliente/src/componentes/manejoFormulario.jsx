import React, { useState } from 'react';
import axios from 'axios';

function ManejoFormulario() {
    const [datosForm, setDatosForm] = useState({ nombre: '', correo: '', contraseña: '' });
    const [datos, setDatos] = useState({});
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(null);
    const [registroExitoso, setRegistroExitoso] = useState(false);

    const manejoCambios = (e) => {
        const { name, value } = e.target;
        setDatosForm({ ...datosForm, [name]: value });
    };
    const URL = 'http://localhost:3000/api/usuariosDB';
    const manejoSumision = (e) => {
        e.preventDefault();
        if (enviando) return;
        setEnviando(true);
        console.log(datosForm);
        axios.post(URL, datosForm)
            .then((response) => {
                setDatos(response.data);
                console.log(datos);
                setRegistroExitoso(true);
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    setError(`Error: ${error.response.data.mensaje}`); 
                } else {
                    setError(`Error: ${error.message}`); 
                }
                console.log('Error al enviar el formulario:',error);
            })
            .finally(() => {
                setEnviando(false);
            });
    }

    return (
        <form onSubmit={manejoSumision}>
            <label>
                Ingrese nombre:
                <input
                    type="text"
                    name="nombre"
                    value={datosForm.nombre || ""}
                    onChange={manejoCambios}
                />
            </label>
            <br />
            <label>
                Ingrese correo:
                <input
                    type="mail"
                    name="correo"
                    value={datosForm.correo || ""}
                    onChange={manejoCambios}
                />
            </label>
            <label>
                Ingrese contraseña:
                <input
                    type="password"
                    name="contraseña"
                    value={datosForm.contraseña || ""}
                    onChange={manejoCambios}
                />
            </label>
            <br />
            <button type="submit" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar'}
            </button>
            {registroExitoso && (
                <div>
                    <p>Usuario registrado exitosamente:</p>
                    <p>Nombre: {datos.nombre}</p>
                    <p>Correo: {datos.correo}</p>
                    <p>Fecha de Registro: {new Date(datos.fechaRegistro).toLocaleString()}</p>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}

export default ManejoFormulario;