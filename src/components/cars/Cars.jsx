import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Car from './Car';

class Cars extends Component {
  render () {
    console.log("this.props.cars from cars: ", this.props.cars);
    console.log("this.props.locations from cars: ", this.props.locations);
    return (
      <Container>

        <Car
          cars={this.props.cars}
          locations={this.props.locations}
          deleteCar={this.props.deleteCar}
          getOne={this.props.getOne}
        />

      </Container>
    );
  };
};

export default Cars;


// PLACEHOLDER IMAGE
// https://via.placeholder.com/900x350?text=This+Is+Text+For+Car+1
