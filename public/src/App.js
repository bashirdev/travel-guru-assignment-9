import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LocationDetails from './components/LocationsDetails/LocationDetails';
import NotFound from './components/NotFound/NotFound';
import City from './components/City/City';
export const userContext= createContext();
function App() {

  const [isLoggedInUser, setLoggedInUser] = useState([]);
  return (
<userContext.Provider value={[isLoggedInUser,setLoggedInUser]}>
    <Router>
    <Header />
      <Switch>
        <Route path='/home'>
            <Home />
        </Route>
        <Route path='/news'>
       
        </Route>
        <Route path='/locationDetail/:locationId'>
           <LocationDetails />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
        <Route exact path='*'>
           <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </userContext.Provider>
  );
}

export default App;
