function Gol() {
    const disparo = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={()=>disparo("Gool!")}>Dispara!</button>
    );
  }

export default Gol;