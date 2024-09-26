function Futbol() {
    const disparo = (a, b) => {
      alert(b.type +" " + a);
    };
  
    return (
      <button onClick={(event) => disparo('Gool!', event)}>Dispara!</button>
    );
  }
  
export default Futbol;