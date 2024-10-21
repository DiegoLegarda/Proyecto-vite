import BarraNav from  "../componentes/barraNav.jsx";
import { Link } from "react-router-dom";
import styles from '../estilos/acerca.module.css'
import CargarScript from "../componentes/componenteVulnerable.jsx";
const acerca=()=>{
    return (
        <div className={styles.container}>            
            <div className={styles.row}>
                <div className="col-md-12"> 
                    <h1 className={styles.textCenter}>Acerca de Nosotros</h1>
                    <Link to='/Herramientas'>Herramientas</Link>
                    <CargarScript/> 
                </div>
            </div>
        </div>
        );
}
export default acerca;  