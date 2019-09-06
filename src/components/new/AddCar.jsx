import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

const AddCar = ({match}) => {
  useEffect(() => {
    fetchLocations();
    console.log('MATCH: ', match);
  }, []);

  const [locations, setLocations] = useState([]);

  const fetchLocations = async ()  => {
    const locationData = await fetch('http://localhost:8080/api/v1/locations');

    const locations = await locationData.json();
    console.log('Locations in ADDCAR: ', locations);


    setLocations(locations);

  }

  const [vin, setVin] = useState("");
  const [year, setYear] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [miles, setMiles] = useState(0);
  const [price, setPrice] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");
  const [location, setLocation] = useState(1);

  // state = {
  //   vin: '',
  //   year: 0,
  //   make: '',
  //   model: '',
  //   miles: 0,
  //   price: 0,
  //   photoUrl: '',
  //   location: 0,
  // };
  //
  // handleChange = e => {
  //   const { name, value } = e.target
  //   console.log("target", e.target);
  //   console.log("name", name);
  //   console.log("value", value);
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.createCar(this.state);
  //   this.resetForm();
  // }
  //
  // resetForm = () => {
  //   document.getElementById('addCarForm').reset();
  //   this.setState({
  //     vin: '',
  //     year: 0,
  //     make: '',
  //     model: '',
  //     miles: 0,
  //     price: 0,
  //     photoUrl: '',
  //     location: 0,
  //   })
  // }
  //

  // CREATE
  const handleChange = e => {
    e.preventDefault();

    const loc_id = parseInt(location);

    const newCarObj = {
      vin: vin,
      year: parseInt(year),
      make: make,
      model: model,
      miles: parseInt(miles),
      price: parseInt(price),
      photoUrl: photoUrl,
    };

    console.log('newCarObj: ', newCarObj);

    fetch(`http://localhost:8080/api/v1/locations/${loc_id}/new-car`, {
      method: 'POST',
      body: JSON.stringify(newCarObj),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return;

  }



  const locationOptions = () => locations.map( location => {
    location["key"] = location.id;
    location["value"] = location.id;
    location["text"] = location.name.concat(', ').concat(location.address);
    return location;
  })

  return (
    <Container>

      {/*
        <Form onSubmit={this.handleChange} id='addCarForm'>
      */}

      <Form id='addCarForm'>


      <Form.Field>
        <label htmlFor='vin'>Vin</label>
        <input
          type='text'
          name='vin'
          id='vin'
          placeholder='Vin'
          onChange={e => setVin(e.target.value)}
          value={vin}
        />
      </Form.Field>

      <Form.Field>
        <label htmlFor='year'>Year</label>
        <input
          type='number'
          name='year'
          id='year'
          placeholder='Year'
          onChange={e => setYear(e.target.value)}
          value={year}
        />
      </Form.Field>

      <Form.Field>
        <label htmlFor='make'>Make</label>
        <input
          type='text'
          name='make'
          id='make'
          placeholder='Make'
          onChange={e => setMake(e.target.value)}
          value={make}
        />
      </Form.Field>

      <Form.Field>
        <label htmlFor='model'>Model</label>
        <input
          type='text'
          name='model'
          id='model'
          placeholder='Model'
          onChange={e => setModel(e.target.value)}
          value={model}
        />
      </Form.Field>

      <Form.Field>
        <label htmlFor='miles'>Miles</label>
        <input
          type='number'
          name='miles'
          id='miles'
          placeholder='Miles'
          onChange={e => setMiles(e.target.value)}
          value={miles}
        />
      </Form.Field>

      <Form.Field>
        <label htmlFor='price'>Price</label>
        <input
          type='number'
          name='price'
          id='price'
          placeholder='Price'
          onChange={e => setPrice(e.target.value)}
          value={price}
        />
      </Form.Field>

      <Form.Field>
        <label htmlFor='photoUrl'>Photo URL</label>
        <input
          type='text'
          name='photoUrl'
          id='photoUrl'
          onChange={e => setPhotoUrl(e.target.value)}
          value={photoUrl}
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
          onChange={e => setLocation(e.target.value)}
          value={location}
        >
          {locationOptions().map(opt => <option key={opt.id} value={opt.id}>{opt.text}</option>)}

        </select>
      </Form.Field>

      <Button type='submit'>Submit</Button>
    </Form>
    </Container>

  );
};

export default AddCar;




// import React, { Component } from 'react';
// import { Form, Button, Container } from 'semantic-ui-react';
//
// class AddCar extends Component {
//
//   state = {
//     vin: '',
//     year: 0,
//     make: '',
//     model: '',
//     miles: 0,
//     price: 0,
//     photoUrl: '',
//     location: 0,
//   };
//
//   handleChange = e => {
//     const { name, value } = e.target
//     console.log("target", e.target);
//     console.log("name", name);
//     console.log("value", value);
//     this.setState({
//       [name]: value
//     });
//   };
//
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.createCar(this.state);
//     this.resetForm();
//   }
//
//   resetForm = () => {
//     document.getElementById('addCarForm').reset();
//     this.setState({
//       vin: '',
//       year: 0,
//       make: '',
//       model: '',
//       miles: 0,
//       price: 0,
//       photoUrl: '',
//       location: 0,
//     })
//   }
//
//
//   locationOptions = () => this.props.locations.map( location => {
//     location["key"] = location.id;
//     location["value"] = location.id;
//     location["text"] = location.name.concat(', ').concat(location.address);
//     return location
//   })
//
//   render () {
//     return (
//       <Container>
//         <Form onSubmit={this.handleSubmit} id='addCarForm'>
//
//         <Form.Field>
//           <label htmlFor='vin'>Vin</label>
//           <input
//             type='text'
//             name='vin'
//             id='vin'
//             placeholder='Vin'
//             onChange={this.handleChange}
//             value={this.state.vin}
//           />
//         </Form.Field>
//
//         <Form.Field>
//           <label htmlFor='year'>Year</label>
//           <input
//             type='number'
//             name='year'
//             id='year'
//             placeholder='Year'
//             onChange={this.handleChange}
//             value={this.state.year}
//           />
//         </Form.Field>
//
//         <Form.Field>
//           <label htmlFor='make'>Make</label>
//           <input
//             type='text'
//             name='make'
//             id='make'
//             placeholder='Make'
//             onChange={this.handleChange}
//             value={this.state.make}
//           />
//         </Form.Field>
//
//         <Form.Field>
//           <label htmlFor='model'>Model</label>
//           <input
//             type='text'
//             name='model'
//             id='model'
//             placeholder='Model'
//             onChange={this.handleChange}
//             value={this.state.model}
//           />
//         </Form.Field>
//
//         <Form.Field>
//           <label htmlFor='miles'>Miles</label>
//           <input
//             type='number'
//             name='miles'
//             id='miles'
//             placeholder='Miles'
//             onChange={this.handleChange}
//             value={this.state.miles}
//           />
//         </Form.Field>
//
//         <Form.Field>
//           <label htmlFor='price'>Price</label>
//           <input
//             type='number'
//             name='price'
//             id='price'
//             placeholder='Price'
//             onChange={this.handleChange}
//             value={this.state.price}
//           />
//         </Form.Field>
//
//         <Form.Field>
//           <label htmlFor='photoUrl'>Photo URL</label>
//           <input
//             type='text'
//             name='photoUrl'
//             id='photoUrl'
//             onChange={this.handleChange}
//             value={this.state.photoUrl}
//           />
//         </Form.Field>
//
//         <Form.Field>
//           <label htmlFor='location'>Location</label>
//           {/*<Select
//             name='location'
//             placeholder='Select a Location'
//             options={this.locationOptions()}
//             onChange={this.handleChange}
//             value={this.state.location}
//           />*/}
//           <select
//             name='location'
//             placeholder='Select a Location'
//             onChange={this.handleChange}
//             value={this.state.location}
//           >
//             {this.locationOptions().map(opt => <option key={opt.id} value={opt.id}>{opt.text}</option>)}
//
//           </select>
//         </Form.Field>
//
//         <Button type='submit'>Submit</Button>
//       </Form>
//       </Container>
//
//     );
//   };
// };
//
// export default AddCar;
