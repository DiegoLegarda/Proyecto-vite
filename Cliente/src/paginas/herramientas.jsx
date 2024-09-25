import Contador from "../componentes/Contador.jsx";

function Herramientas() {
    return (
        <>
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