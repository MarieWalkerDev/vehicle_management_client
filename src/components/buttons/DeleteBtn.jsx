import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class DeleteBtn extends Component {

  // DELETE
  deleteCar = (id) => {

      fetch(`http://localhost:8080/api/v1/cars/${id}`, {
        method: 'DELETE'
      })

      this.render();


  };


  render () {
    return (
      <div>
        <Button
          onClick={(e) => this.deleteCar(this.props.id, e)}
        >
          Delete Car
        </Button>
      </div>
    );
  };
};

export default DeleteBtn;
