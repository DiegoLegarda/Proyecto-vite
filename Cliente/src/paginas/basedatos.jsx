import { useContext, useState } from 'react';
import { AuthContext } from '../contexto';
import ImagenForm from '../componentes/imagenForm';
import ListaImagenes from '../componentes/listaImagenes';
import CambiarNombreImagen from '../componentes/cambiarNombreImagen';

const BaseDatos = () => {
    const { auth, logout } = useContext(AuthContext);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    return (
        <div className="container">
            <h1>Base de datos</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Base de datos</h5>
                            <ImagenForm />
                            <div>
                                <ListaImagenes setImagenSeleccionada={setImagenSeleccionada} />
                                {imagenSeleccionada && <CambiarNombreImagen imagen={imagenSeleccionada} />}
                            </div>
                            <button onClick={logout}>Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseDatos;