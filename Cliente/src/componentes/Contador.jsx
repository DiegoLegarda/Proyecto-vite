import React,{useState} from "react";

function Contador(props){
    const { inicial = 0, incremento = 1, decremento=1 } = props;
    const[contador,setContador]=useState(parseInt(inicial));

    const incrementar=()=>{
        setContador(contador+parseInt(incremento));
    }

    const decrementar=()=>{
        setContador(contador-parseInt(decremento));
    }

    return(
        <div className="Contador">
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );

}

export default Contador;