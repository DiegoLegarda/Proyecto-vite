import React, { useState } from 'react';

function Saludo({ name }) {
  return <p>Hola, {name}!</p>;
}

function SaludoFormulario() {
  const [nombre, setName] = useState("");

  return (
    <div>
      <form>
        <label>Ingrese su nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>      
      <Saludo name={nombre} />
    </div>
  );
}

export default SaludoFormulario;
