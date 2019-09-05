import React from 'react';
import { Grid } from 'semantic-ui-react';
import Buttons from '../buttons/Buttons';

const Description = (props) => {
  return (
    <Grid.Column>
      <h1><b>ID:</b> {props.car.id}</h1>
      <p>
        <b>VEHICLE:</b> {props.car.year} {props.car.make}, {props.car.model}
      </p>
      <p>
        <b>VIN:</b> {props.car.vin}
      </p>
      <p>
        <b>MILES:</b> {props.car.miles.toLocaleString()}
      </p>
      <p>
        <b>PRICE:</b> $ {props.car.price.toLocaleString()}
      </p>
      <p>
        <b>LOCATION:</b> {props.car.location.name}<br />{props.car.location.address}
      </p>

      <Buttons
        id={props.car.id}
        deleteCar={props.deleteCar}
        getOne={props.getOne}
      />

    </Grid.Column>
  );
};

export default Description;
