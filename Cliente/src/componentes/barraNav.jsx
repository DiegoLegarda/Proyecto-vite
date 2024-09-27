//barra de navegacion en el proyecto
import { Link } from 'react-router-dom';

function BarraNavegacion(){
    return (
        <nav>
            <ul>
                <Link  to="/">Inicio </Link>
                <Link  to="/Registro">Registro </Link>
                <Link  to="/Acerca">Acerca de Nosotros </Link>
                <Link  to="/Herramientas">Herramientas </Link>
            </ul>
        </nav>
    );
}

export default BarraNavegacion;
