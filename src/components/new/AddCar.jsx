import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

class AddCar extends Component {

  state = {
    vin: '',
    year: 0,
    make: '',
    model: '',
    miles: 0,
    price: 0,
    photoUrl: '',
    location: 0,
  };

  handleChange = e => {
    const { name, value } = e.target
    console.log("target", e.target);
    console.log("name", name);
    console.log("value", value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createCar(this.state);
    this.resetForm();
  }

  resetForm = () => {
    document.getElementById('addCarForm').reset();
    this.setState({
      vin: '',
      year: 0,
      make: '',
      model: '',
      miles: 0,
      price: 0,
      photoUrl: '',
      location: 0,
    })
  }


  locationOptions = () => this.props.locations.map( location => {
    location["key"] = location.id;
    location["value"] = location.id;
    location["text"] = location.name.concat(', ').concat(location.address);
    return location
  })

  render () {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} id='addCarForm'>

        <Form.Field>
          <label htmlFor='vin'>Vin</label>
          <input
            type='text'
            name='vin'
            id='vin'
            placeholder='Vin'
            onChange={this.handleChange}
            value={this.state.vin}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor='year'>Year</label>
          <input
            type='number'
            name='year'
            id='year'
            placeholder='Year'
            onChange={this.handleChange}
            value={this.state.year}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor='make'>Make</label>
          <input
            type='text'
            name='make'
            id='make'
            placeholder='Make'
            onChange={this.handleChange}
            value={this.state.make}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor='model'>Model</label>
          <input
            type='text'
            name='model'
            id='model'
            placeholder='Model'
            onChange={this.handleChange}
            value={this.state.model}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor='miles'>Miles</label>
          <input
            type='number'
            name='miles'
            id='miles'
            placeholder='Miles'
            onChange={this.handleChange}
            value={this.state.miles}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            name='price'
            id='price'
            placeholder='Price'
            onChange={this.handleChange}
            value={this.state.price}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor='photoUrl'>Photo URL</label>
          <input
            type='text'
            name='photoUrl'
            id='photoUrl'
            onChange={this.handleChange}
            value={this.state.photoUrl}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor='location'>Location</label>
          {/*<Select
            name='location'
            placeholder='Select a Location'
            options={this.locationOptions()}
            onChange={this.handleChange}
            value={this.state.location}
          />*/}
          <select
            name='location'
            placeholder='Select a Location'
            onChange={this.handleChange}
            value={this.state.location}
          >
            {this.locationOptions().map(opt => <option key={opt.id} value={opt.id}>{opt.text}</option>)}

          </select>
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
      </Container>

    );
  };
};

export default AddCar;
