import Saludo from "../componentes/saludo.jsx";
import Saludo2 from "../componentes/Saludo2.jsx";
import Producto from "../componentes/Producto.jsx";
import BarraNav from  "../componentes/barraNav.jsx";
import ComponentesT from "../componentes/componentesTailwin.jsx";
import ComponenteDaisyUI from "../componentes/componentesDaisyui.jsx";
import { Carrusel } from "../componentes/carrusel.jsx";

function pagInicio(){
    return (
        <>        
           <h1>Esta es una pagina de Inicio</h1>

           <Saludo/>
                <div className="bg-red-500">Esto es un test para prueba de estilo</div>
           <Carrusel/>
        </>
    );
}

export default pagInicio;