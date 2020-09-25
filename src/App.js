import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LocationDetails from './components/LocationsDetails/LocationDetails';
import NotFound from './components/NotFound/NotFound';

import Login from './components/LogIn/Login';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/privateRoute/PrivateRoute';


export const userContext= createContext();

function App() {

  const [loggedInuser, setLoggedInUser] =useState({});
  const [bookingData, setBookingData] =useState([]);
  return (
<userContext.Provider value={[loggedInuser, setLoggedInUser]}>
<userContext.Provider value={[bookingData,setBookingData]}>
    <Router>
    <Header />
      <Switch>
        <Route path='/home'>
            <Home />
        </Route>
        <Route path='/login'>
           <Login></Login>
        </Route>
        <Route path='/booking'>
            
        </Route>
        <Route path='/locationDetail/:locationId'>
           <LocationDetails />
        </Route>
        <PrivateRoute path='/hotelBooking/:book'>
            <Booking></Booking>
        </PrivateRoute>
        
       
        <Route exact path='/'>
            <Home />
        </Route>
        
        <Route  path='*'>
           <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </userContext.Provider>
 </userContext.Provider>
  );
}

export default App;
