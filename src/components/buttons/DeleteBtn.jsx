import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class DeleteBtn extends Component {
  render () {
    return (
      <div>
        <Button
          onClick={(e) => this.props.deleteCar(this.props.id, e)}
        >
          Delete Car
        </Button>
      </div>
    );
  };
};

export default DeleteBtn;
