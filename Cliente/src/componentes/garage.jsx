function Car(props) {
    return <li>Yo soy un { props.modelo }</li>;
  }
  
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Que auto tengo en mi garaje?</h1>
        <ul>
          {cars.map((car, index) => <Car key={index} modelo={car} />)}
        </ul>
      </>
    );
  }
export default Garage;