import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Description from '../cars/Description';
import Picture from '../cars/Picture';

const OneCar = (props) => {
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
      <Grid key={car.id} columns={2} style={gridStyle}>
        <Grid.Row width={10}>
          <Picture image={car.photoUrl} />

          <Description
            car={car}
            id={car.id}
            deleteCar={props.deleteCar}
            getOne={props.getOne}
          />

        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default OneCar;
