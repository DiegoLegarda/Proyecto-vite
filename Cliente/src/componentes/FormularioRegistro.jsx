import React, { useState } from 'react';
import axios from 'axios';

const FormRegistro = () => {
    const [datosForm, setDatosForm] = useState({ nombre: '', correo: '', contraseña: '' });
    const [datos, setDatos] = useState({});
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(null);
    const [registroExitoso, setRegistroExitoso] = useState(false);

    const manejoCambios = (e) => {
        const { name, value } = e.target;
        setDatosForm({ ...datosForm, [name]: value });
    };
    // Lista de roles predefinidos
    const roles = ['Administrador', 'Usuario', 'Editor', 'Supervisor'];
    const URL = 'http://localhost:3000/api/Username/registro';
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
                console.log('Error al enviar el formulario:', error);
            })
            .finally(() => {
                setEnviando(false);
            });
    }

    return (
        <form onSubmit={manejoSumision}>
            <div className="container mx-auto p-13">
                <input
                    type="text"
                    name="nombre"
                    value={datosForm.nombre || ""}
                    onChange={manejoCambios}
                    placeholder="Ingrese el nombre"
                    className="input input-bordered w-full max-w-xs"
                />
                <br />
                <input
                    type="text"
                    name="username"
                    value={datosForm.username || ""}
                    onChange={manejoCambios}
                    placeholder="Ingrese username"
                    className="input input-bordered w-full max-w-xs"
                />
                <br />
                <input
                    type="mail"
                    name="correo"
                    value={datosForm.correo || ""}
                    onChange={manejoCambios}
                    placeholder="Ingrese su correo"
                    className="input input-bordered w-full max-w-xs"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={datosForm.password || ""}
                    onChange={manejoCambios}
                    placeholder="Ingrese contraseña"
                    className="input input-bordered w-full max-w-xs"
                />
                <br />
                <label>
                    Selecciona un Rol:
                    <select value={datosForm.rol||""} onChange={manejoCambios} name='rol' required>
                        <option value="" disabled>Selecciona un rol</option>
                        {roles.map((roleOption, index) => (
                            <option key={index} value={roleOption}>
                                {roleOption}
                            </option>
                        ))}
                    </select>
                </label>


                <br />
                <button type="submit" disabled={enviando}>
                    {enviando ? 'Enviando...' : 'Enviar'}
                </button>
                {registroExitoso && (
                    <div>
                        <p>Usuario registrado exitosamente:</p>                        
                    </div>
                )}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </form>
    )
}

export default FormRegistro;