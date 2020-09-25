import React, { useContext, useEffect, useState } from 'react';
import './SelectCity.css';
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap'
// import LocationDetails from '../LocationsDetails/LocationDetails';
import '../Home/Home.css';
const SelectCity = (props) => {
  console.log(props);
    const {imgUrl, title, id, city} = props.selectCity;
   return (
      <>
     
      <div className="Card">
      <div>
      
       <img className="card-Style"  src={imgUrl} alt='' />
      <h3><Link to={'/locationDetail/'+title}>{title}</Link></h3>
      
 
         </div>
         
    </div>
   
  </>
);
};

export default SelectCity;

// <Link to={`/locationDetail/${id}`}>{title}</Link>
{/* <h3 onClick={()=>props.handleBooking(props.selectCity)}>{title}</h3> */}