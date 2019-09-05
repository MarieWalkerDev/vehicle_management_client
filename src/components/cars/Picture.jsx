import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const Picture = (props) => {
  return (
    <Grid.Column>
      <Image src={props.image} verticalAlign='middle' />
    </Grid.Column>
  );
};

export default Picture;
