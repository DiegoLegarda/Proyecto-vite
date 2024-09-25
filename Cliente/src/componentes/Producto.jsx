
function Producto(props){
    return(
        <div>
            <h1>{props.nombre}</h1>
            <img src={props.imagen} alt={props.alternativo}></img>
            <p>{props.descripcion}</p>
            <p>${props.precio}</p>
        </div>
    );
}

export default Producto;