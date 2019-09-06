import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Description from '../cars/Description';
import Picture from '../cars/Picture';

const OneCar = ({ match, locations }) => {
  useEffect(() => {
    fetchData();
    console.log('MATCH: ', match);
  }, []);

  const [car, setCar] = useState({});

  const fetchData = async ()  => {
    const carData = await fetch(
      `http://localhost:8080/api/v1/cars/${
        match.params.car_id
      }`
    );


    const car = await carData.json();
    console.log('CAR: ', car);


    setCar(car);

  }

  let gridStyle = {
    border: '1px solid lightgrey',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px'
  };


  return (
    <Container>
      <Grid key={car.id} columns={2} style={gridStyle}>
        <Grid.Row width={10}>
          <Picture image={car.photoUrl} />

          <Description
            car={car}
            locations={locations}
            id={car.id}
          />

        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default OneCar;
