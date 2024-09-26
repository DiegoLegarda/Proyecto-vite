import { useState } from 'react'
import Saludo2 from './componentes/Saludo2.jsx'
import Saludo from  './componentes/saludo.jsx'
import Inicio from './paginas/inicio.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './componentes/Producto.jsx'
import Herramientas from './paginas/herramientas.jsx'
import Factorial from './componentes/Factorial.jsx'
import Titulo from './componentes/Titulo.jsx'
import ComponentePadre from './componentes/Temacontext.jsx'
import Futbol from './componentes/FuncionGol.jsx'
import Gol from './componentes/Gol.jsx'
import ManejoFormulario from './componentes/manejoFormulario.jsx'
import SaludoFormulario from './componentes/saludoFromulario.jsx'
import SeleccionFormulario from './componentes/seleccionFormulario.jsx'
import Garage from './componentes/garage.jsx'
import ManejoFormulario2 from './componentes/manejoFormulario2.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <ManejoFormulario2/>
     <SaludoFormulario/>
     <SeleccionFormulario/>
     <Garage/>
    </>
  )
}

export default App
