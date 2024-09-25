import React, { useMemo, useState } from 'react';

function calcularFactorial(numero) {
  console.log('Calculando factorial...');
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}

function Factorial() {
  const [valor, setValor] = useState(5);

  const factorial = useMemo(() => calcularFactorial(valor), [valor]);

  return (
    <div>
      <h1>Factorial de {valor}: {factorial}</h1>
      <input 
        type="number" 
        value={valor} 
        onChange={(e) => setValor(parseInt(e.target.value))} 
      />
    </div>
  );
}

export default Factorial;