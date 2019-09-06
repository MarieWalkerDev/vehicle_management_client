import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inventory from '../components/inventory/Inventory';
import NavBar from '../components/nav/NavBar';
import Footer from '../components/nav/Footer';

import LoginRegister from '../components/enter/LoginRegister';
import OneCar from '../components/car/OneCar';
import EditCar from '../components/edit/EditCar';
import AddCar from '../components/new/AddCar';

class App extends Component {
  // state = {
  //   cars: [],
  //   locations: [],
  // };

  // GET ALL CARS
  // componentDidMount = async () => {
  //   try {
  //     const resCars = await fetch('http://localhost:8080/api/v1/cars');
  //     const resLocs = await fetch('http://localhost:8080/api/v1/locations');
  //     if (!resCars.ok) throw new Error();
  //     if (!resLocs.ok) throw new Error();
  //
  //     const cars = await resCars.json();
  //     const locations = await resLocs.json();
  //
  //     console.log("CARS IN CDM: ", cars);
  //
  //     this.setState({
  //       cars,
  //       locations,
  //     })
  //   } catch (e) {
  //     alert(e);
  //   };
  // };

  // GET ONE
  getOne = id => {
    const oneCar = this.state.cars.filter(car => {
      return (car.id === id);
    });

    console.log("oneCar: ", oneCar);

    return oneCar;

  };
  //
  // // CREATE
  // createCar = async newCar => {
  //   console.log('newCar: ', newCar);
  //
  //
  //   const loc_id = parseInt(newCar.location);
  //   console.log('loc_id: ', loc_id);
  //
  //   const newCarObj = {
  //     vin: newCar.vin,
  //     year: parseInt(newCar.year),
  //     make: newCar.make,
  //     model: newCar.model,
  //     miles: parseInt(newCar.miles),
  //     price: parseInt(newCar.price),
  //     photoUrl: newCar.photoUrl,
  //   };
  //
  //   console.log('newCarObj: ', newCarObj);
  //
  //   const res = await fetch(`http://localhost:8080/api/v1/locations/${loc_id}/new-car`, {
  //     method: 'POST',
  //     body: JSON.stringify(newCarObj),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   });
  //
  //   const newCarWithId = await res.json();
  //
  //   this.setState(prevState => {
  //     return {
  //       cars: [
  //         ...prevState.cars,
  //         newCarWithId
  //       ]
  //     }
  //   });
  //
  //   return;
  // }
  //
  // // EDIT
  // // async editCar(car) {
  // //   const response = await fetch(`http://localhost:8080/api/v1/cars/${id}`, {
  // //     method: 'PUT',
  // //     body: JSON.stringify(car),
  // //     headers: {
  // //       'Content-Type': 'application/json',
  // //       'Accept': 'application/json',
  // //     }
  // //   });
  // //
  // //   const newCar = await response.json();
  // //
  // //   this.setState({
  // //     cars: [
  // //       ...this.state.cars,
  // //       newCar
  // //     ]
  // //   });
  // // };
  //
  // DELETE
  // const deleteCar = (id) => {
  //
  //     fetch(`http://localhost:8080/api/v1/cars/${id}`, {
  //       method: 'DELETE'
  //     })
  //     .then( () => {
  //       this.setState(prevState => {
  //
  //         return {
  //           ...prevState,
  //           cars: prevState.cars.filter( car => car.id !== id)
  //         }
  //       })
  //
  //     })
  //     this.render();
  //
  //     return;
  //
  // };



  render () {
    console.log('thisstataapp', this.state);
    return (
      <Router>
        <div className='App'>
          <NavBar />

          <Switch>
            <Route path='/' exact component={LoginRegister} />
            <Route path='/cars' exact component={Inventory} />
            <Route path='/cars/:car_id' component={OneCar} />
            <Route path='/cars/new' component={AddCar} />
            <Route path='/cars/:car_id/edit' component={EditCar} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;


// <Inventory
//   cars={this.state.cars}
//   deleteCar={this.deleteCar}
//   getOne={this.getOne}
//   createCar={this.createCar}
//   locations={this.state.locations}
//   />
//



// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Inventory from '../components/inventory/Inventory';
// import NavBar from '../components/nav/NavBar';
// import Footer from '../components/nav/Footer';
//
// class App extends Component {
//   state = {
//     cars: [],
//     locations: [],
//   };
//
//   // GET ALL CARS
//   componentDidMount = async () => {
//     try {
//       const resCars = await fetch('http://localhost:8080/api/v1/cars');
//       const resLocs = await fetch('http://localhost:8080/api/v1/locations');
//       if (!resCars.ok) throw new Error();
//       if (!resLocs.ok) throw new Error();
//
//       const cars = await resCars.json();
//       const locations = await resLocs.json();
//
//       console.log("CARS IN CDM: ", cars);
//
//       this.setState({
//         cars,
//         locations,
//       })
//     } catch (e) {
//       alert(e);
//     };
//   };
//
//   // GET ONE
//   getOne = id => {
//     const oneCar = this.state.cars.filter(car => {
//       return (car.id === id);
//     });
//
//     console.log("oneCar: ", oneCar);
//
//     return oneCar;
//
//   };
//
//   // CREATE
//   createCar = async newCar => {
//     console.log('newCar: ', newCar);
//
//
//     const loc_id = parseInt(newCar.location);
//     console.log('loc_id: ', loc_id);
//
//     const newCarObj = {
//       vin: newCar.vin,
//       year: parseInt(newCar.year),
//       make: newCar.make,
//       model: newCar.model,
//       miles: parseInt(newCar.miles),
//       price: parseInt(newCar.price),
//       photoUrl: newCar.photoUrl,
//     };
//
//     console.log('newCarObj: ', newCarObj);
//
//     const res = await fetch(`http://localhost:8080/api/v1/locations/${loc_id}/new-car`, {
//       method: 'POST',
//       body: JSON.stringify(newCarObj),
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
//
//     const newCarWithId = await res.json();
//
//     this.setState(prevState => {
//       return {
//         cars: [
//           ...prevState.cars,
//           newCarWithId
//         ]
//       }
//     });
//
//     return;
//   }
//
//   // EDIT
//   // async editCar(car) {
//   //   const response = await fetch(`http://localhost:8080/api/v1/cars/${id}`, {
//   //     method: 'PUT',
//   //     body: JSON.stringify(car),
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       'Accept': 'application/json',
//   //     }
//   //   });
//   //
//   //   const newCar = await response.json();
//   //
//   //   this.setState({
//   //     cars: [
//   //       ...this.state.cars,
//   //       newCar
//   //     ]
//   //   });
//   // };
//
//   // DELETE
//   deleteCar = id => {
//     console.log('this is id: ', id);
//     console.log('this is typeof id: ', typeof id);
//     fetch(`http://localhost:8080/api/v1/cars/${id}`, {
//       method: 'DELETE'
//     })
//     .then( () => {
//       this.setState(prevState => {
//
//         return {
//           ...prevState,
//           cars: prevState.cars.filter( car => car.id !== id)
//         }
//       })
//
//     })
//     this.render();
//   };
//
//   render () {
//     console.log('thisstataapp', this.state);
//     return (
//       <Router>
//         <div className='App'>
//           <NavBar />
//
//           <Switch>
//
//             <Inventory
//               cars={this.state.cars}
//               deleteCar={this.deleteCar}
//               getOne={this.getOne}
//               createCar={this.createCar}
//               locations={this.state.locations}
//               />
//
//           </Switch>
//
//           <Footer />
//
//         </div>
//       </Router>
//     );
//   };
// };
//
// export default App;


// <Inventory
//   cars={this.state.cars}
//   deleteCar={this.deleteCar}
//   getOne={this.getOne}
//   createCar={this.createCar}
//   locations={this.state.locations}
//   />
