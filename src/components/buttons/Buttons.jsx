import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import DeleteBtn from './DeleteBtn';
import ViewBtn from './ViewBtn';

class Buttons extends Component {
  render () {
    return (
      <Button.Group size='large'>
        <ViewBtn
          id={this.props.id}
          getOne={this.props.getOne}
        />

        <Button>Edit Car</Button>

        <DeleteBtn
          id={this.props.id}
          deleteCar={this.props.deleteCar}
        />

      </Button.Group>
    );
  };
};

export default Buttons;
