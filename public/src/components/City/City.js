import React from 'react';
import {Link} from "react-router-dom";
const City = (props) => {
    console.log(props);
    const {hotelImg} =props.hotel;
   
    return (
        <div>
         <img src={hotelImg} alt='' />
      
             
        </div>
    );
};

export default City;