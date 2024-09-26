import React, { useState } from 'react';
function SeleccionFormulario() {
    const [myCar, setMyCar] = useState("Volvo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
        <>
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
      <p>Este es mi auto: {myCar}</p>
      </>
    )
  }

export  default SeleccionFormulario; 