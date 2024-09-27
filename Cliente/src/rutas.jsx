//Rutas para link en el proyecto
import { Routes, Route } from 'react-router-dom';
import Inicio  from './paginas/inicio.jsx';
import  AcercaDe from './paginas/acercaDe.jsx';
import Herramientas  from './paginas/herramientas.jsx';
import Registro from  './paginas/registro.jsx';

// Definición del componente NotFound
function NotFound() {
    return <h2>404: Page Not Found</h2>;
  }

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Registro" element={<Registro/>} />
      <Route path="/Acerca" element={<AcercaDe />} />
      <Route path="/Herramientas" element={<Herramientas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};



export default Rutas;







