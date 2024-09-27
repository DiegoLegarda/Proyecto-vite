import Contador from "../componentes/Contador.jsx";
import BarraNav from  "../componentes/barraNav.jsx";
function Herramientas() {
    return (
        <>      
        <h1>Herramientas</h1>
            <Contador />
            <Contador
                inicial={5}
                incremento={3}
                decremento={2}
            />
        </>
    );
}

export default Herramientas;