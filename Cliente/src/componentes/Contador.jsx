import {useState} from "react";
import { Button } from "react-bootstrap"; 

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
            <Button variant='primary' onClick={incrementar}>Incrementar</Button>
            <Button onClick={decrementar}>Decrementar</Button>
        </div>
    );

}

export default Contador;