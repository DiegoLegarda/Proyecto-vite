import BarraNavegacion from "../componentes/barraNav"
import Pie from "../componentes/pie.jsx";
import { Outlet } from "react-router-dom";

function Estructura() {
    return (
        <div> 
            <BarraNavegacion />
            <main>
                <div className='contenedorPrincipal'>
                    <Outlet />
                </div>
            </main>
            <Pie/>
        </div>
    )
}

export default Estructura;