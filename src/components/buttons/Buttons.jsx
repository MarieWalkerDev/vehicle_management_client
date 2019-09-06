import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import DeleteBtn from './DeleteBtn';
import ViewBtn from './ViewBtn';
import EditBtn from './EditBtn';

class Buttons extends Component {
  render () {

    let renderViewCar = this.props.renderViewCar ? <ViewBtn
      id={this.props.id}
      car={this.props.car}
      getOne={this.props.getOne}
    />  : null;

    return (
      <Button.Group size='large'>
        {renderViewCar}

        <EditBtn
          id={this.props.id}
          car={this.props.car}
          getOne={this.props.getOne}
        />

        <DeleteBtn
          id={this.props.id}
          deleteCar={this.props.deleteCar}
        />

      </Button.Group>
    );
  };
};

export default Buttons;
