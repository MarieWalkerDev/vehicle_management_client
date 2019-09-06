import React from 'react';
import { Grid } from 'semantic-ui-react';
import Buttons from '../buttons/Buttons';
import NumberFormat from 'react-number-format';

const Description = (props) => {
  let convertedMiles = <NumberFormat value={props.car.miles} displayType={'text'} thousandSeparator={true} />

  let convertedPrice = <NumberFormat value={props.car.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />

  console.log('THIS IS WHAT I AM LOOKING FOR: ', props.car.location);

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
        <b>MILES:</b> {convertedMiles}
      </p>
      <p>
        <b>PRICE:</b> {convertedPrice}
      </p>


      <p>
        <b>LOCATION:</b> {props.car.location}<br />{props.car.location}
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
