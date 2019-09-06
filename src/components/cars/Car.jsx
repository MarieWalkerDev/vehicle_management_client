import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Description from './Description';
import Picture from './Picture';

const Car = (props) => {
  let gridStyle = {
    border: '1px solid lightgrey',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px'
  };

  let carList = props.cars.map( car => {
    return (
      <Grid key={car.id} columns={2} style={gridStyle}>
        <Grid.Row width={10}>
          <Picture image={car.photoUrl} />

          <Description
            car={car}
            locationName={car.location.name}
            locationAddress={car.location.address}
            id={car.id}
            deleteCar={props.deleteCar}
            getOne={props.getOne}
          />

        </Grid.Row>
      </Grid>
  )
  })
  return (
    <Container>
      {carList}
    </Container>
  );
};

export default Car;
