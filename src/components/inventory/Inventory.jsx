import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Cars from '../cars/Cars';
import AddCar from '../new/AddCar';

class Inventory extends Component {
  render () {
    console.log("this.prosps from inve", this.props);
    return (
      <Container>

        <Cars
          cars={this.props.cars}
          deleteCar={this.props.deleteCar}
          getOne={this.props.getOne}
        />

        <AddCar
          createCar={this.props.createCar}
          locations={this.props.locations}
        />

      </Container>
    );
  };
};

export default Inventory;
