import React, { useReducer } from 'react';

const initialState = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    case 'reset':
      return { contador: 0 };
    case 'set':
      return { contador: action.value };
    default:
      throw new Error();
  }
}

function Contador2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Contador: {state.contador}</h1>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'set', value: 5 })}>Set 5</button>
    </div>
  );
}

export default Contador2;
