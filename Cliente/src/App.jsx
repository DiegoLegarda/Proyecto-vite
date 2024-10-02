import { useState } from 'react'
import { BrowserRouter, Router } from 'react-router-dom';

import Rutas from './rutas.jsx'
import Rutas2 from './rutas2.jsx'
import { RouterProvider } from "react-router-dom";
import BarraNavegacion from './componentes/barraNav.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <RouterProvider router={Rutas2} />
      {/* <BrowserRouter>
        <BarraNavegacion />
        <Rutas />
      </BrowserRouter> */}
    </>
  )
}

export default App
