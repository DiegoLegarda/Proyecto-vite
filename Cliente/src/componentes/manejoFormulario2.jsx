import React, { useState } from 'react';

function ManejoFormulario2() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

 //Simulacion de envio al servidor
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs, null, 2)); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingrese nombre:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Ingrese edad:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ManejoFormulario2;
