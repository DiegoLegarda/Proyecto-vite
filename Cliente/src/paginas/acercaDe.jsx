import BarraNav from  "../componentes/barraNav.jsx";
import { Link } from "react-router-dom";
const acerca=()=>{
    return (
        <div className="container">            
            <div className="row">
                <div className="col-md-12"> 
                    <h1 className="text-center">Acerca de Nosotros</h1>
                    <Link to='/Herramientas'>Herramientas</Link> 
                </div>
            </div>
        </div>
        );
}
export default acerca;  