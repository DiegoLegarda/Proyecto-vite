import Saludo from "../componentes/saludo.jsx";
import Saludo2 from "../componentes/Saludo2.jsx";
import Producto from "../componentes/Producto.jsx";
import BarraNav from  "../componentes/barraNav.jsx";
import ComponentesT from "../componentes/componentesTailwin.jsx";
import ComponenteDaisyUI from "../componentes/componentesDaisyui.jsx";


function pagInicio(){
    return (
        <>        
            <ComponenteDaisyUI/>
            <ComponentesT/>
        </>
    );
}

export default pagInicio;