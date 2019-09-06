import React, { Component } from 'react';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render () {
    let headerStyle = {
      margin: '40px',
      padding: '20px',
      fontSize: '30px'
    }
    return (
      <Container>

        <List horizontal relaxed='very'>

          <List.Item>
            <List.Content>
              <Link to='/'>
                <List.Header><Icon name='sign-in' circular /> Login/SignUp</List.Header>
              </Link>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <Link to='/cars'>
                <List.Header><Icon name='car' circular /> Inventory</List.Header>
              </Link>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <Link to='/cars/new'>
                <List.Header><Icon name='plus' circular /> Add Car</List.Header>
              </Link>
            </List.Content>
          </List.Item>
        </List>


        <Header as='h2' icon textAlign='center' style={headerStyle}>
          <Icon name='mail outline' circular />
          <Header.Content>Marie Walker's Used Vehicles</Header.Content>
          <Header.Subheader>Call Today For New Arrivals: (123) 456-7890</Header.Subheader>
        </Header>

      </Container>
    );
  };
};

export default NavBar;
