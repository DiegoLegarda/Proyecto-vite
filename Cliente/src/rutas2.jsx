import Inicio  from './paginas/inicio.jsx';
import  AcercaDe from './paginas/acercaDe.jsx';
import Herramientas  from './paginas/herramientas.jsx';
import Registro from  './paginas/registro.jsx';
import { createBrowserRouter } from "react-router-dom";
import Estructura from './paginas/estructura.jsx';

const Rutas2 = createBrowserRouter([
  {
    path: "/",
    element: <Estructura />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "Acerca", element: <AcercaDe /> },
      { path: "Registro", element: <Registro />},
      { path: "Herramientas", element: <Herramientas /> },
      
    ],
  },
]);

export default  Rutas2;