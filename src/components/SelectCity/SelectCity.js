import React  from 'react';
import './SelectCity.css';
import {Link} from "react-router-dom";


import '../Home/Home.css';

const SelectCity = (props) => {

    const { city, title,imgUrl }= props.selectCity;
   return (
      <>
      <div>
      <div>
      <Link to={'/locationDetail/'+ title}><img className="card-Style"  src={imgUrl} alt='' /></Link>  
      </div>
        <div> <h4>{city}</h4></div>
      </div>
      
  </>
);
};

export default SelectCity;

