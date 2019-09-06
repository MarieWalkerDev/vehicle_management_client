import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EditBtn extends Component {
  render () {
    return (
      <div>
        <Button>
          <Link to={`/cars/${this.props.id}/edit`}>
            Edit Car
          </Link>
        </Button>
      </div>
    );
  };
};

export default EditBtn;



//
// import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
//
// class ViewBtn extends Component {
//   render () {
//     return (
//       <div>
//         <Button
//           onClick={(e) => this.props.getOne(this.props.id, e)}
//         >
//           <Link to={`/cars/${this.props.id}`}>
//             View Car
//           </Link>
//         </Button>
//       </div>
//     );
//   };
// };
//
// export default ViewBtn;
