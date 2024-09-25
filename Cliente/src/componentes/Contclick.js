import React,{useState} from "react";

function Contclick(){
    const [contador,setContador]=useState(0);
    function manejo(){
        setContador(contador+1);
    }
    function reset(){
        setContador(0);
    }

    return(
        <div className="Contclick">
            <h1>Contador de clicks: {contador}</h1>
            <button onClick={manejo}>Click</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Contclick;