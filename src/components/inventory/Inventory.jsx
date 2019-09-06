import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import Cars from '../cars/Cars';


const Inventory = () => {

  useEffect(() => {
    fetchData();
  }, []);

  const [cars, setCars] = useState([]);
  const [locations, setLocations] = useState([]);

  const fetchData = async ()  => {
    const carData = await fetch('http://localhost:8080/api/v1/cars');
    const locData = await fetch('http://localhost:8080/api/v1/locations');

    const cars = await carData.json();
    const locations = await locData.json();
    console.log('CARS: ', cars);
    console.log('LOCATIONS: ', locations);
    setCars(cars);
    setLocations(locations);
  }


  return (
    <Container>
      <Cars
        cars={cars}
        locations={locations}
      />
    </Container>
  );
};

export default Inventory;



// import React, { Component } from 'react';
// import { Container } from 'semantic-ui-react';
// import Cars from '../cars/Cars';
// import AddCar from '../new/AddCar';
//
// class Inventory extends Component {
//   render () {
//     console.log("this.prosps from inve", this.props);
//     return (
//       <Container>
//
//         <Cars
//           cars={this.props.cars}
//           deleteCar={this.props.deleteCar}
//           getOne={this.props.getOne}
//         />
//
//         <AddCar
//           createCar={this.props.createCar}
//           locations={this.props.locations}
//         />
//
//       </Container>
//     );
//   };
// };
//
// export default Inventory;
