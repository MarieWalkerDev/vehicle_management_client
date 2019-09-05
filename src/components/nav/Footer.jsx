import React, { Component } from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

class Footer extends Component {
  render () {
    let headerStyle = {
      margin: '40px',
      padding: '20px',
      fontSize: '30px',
      backgroundColor: 'lightyellow',
      borderRadius: '10px'
    }
    return (
      <Container>
        <Header as='h2' icon textAlign='center' style={headerStyle}>
          <Header.Subheader>Call Today For New Arrivals: (123) 456-7890</Header.Subheader>
        </Header>
      </Container>
    );
  };
};

export default Footer;
