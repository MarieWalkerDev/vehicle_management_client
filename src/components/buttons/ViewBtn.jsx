import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class ViewBtn extends Component {
  render () {
    return (
      <div>
        <Button
          onClick={(e) => this.props.getOne(this.props.id, e)}
        >
          View Car
        </Button>
      </div>
    );
  };
};

export default ViewBtn;
