import Saludo from "../componentes/saludo.jsx";
import Saludo2 from "../componentes/Saludo2.jsx";
import Producto from "../componentes/Producto.jsx";
import BarraNav from  "../componentes/barraNav.jsx";

function pagInicio(){
    return (
        <>        
        <h1>Esta es la pagina de inicio</h1>
        <Saludo/>
        <Saludo2/>
        <Producto
        nombre="zapatos"
        precio={100}
        imagen="vite.svg"
        alternativo="imagen de zapatos"
        descripcion="nuevos zapatos de coleccion"
        />
        <Producto
        nombre="camisa"
        precio={300}
        imagen="imagen1.jpeg"
        alternativo="imagen de camisa"
        descripcion="camisas de marca nueva"
        />
        </>
    );
}

export default pagInicio;