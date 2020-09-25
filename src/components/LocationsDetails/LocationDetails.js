import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import City from '../City/City';
import SelectCity from '../SelectCity/SelectCity';
import travelData from '../TravelData/TravelData';
import BookingFrom from '../BookingFrom/BookingFrom';
import { userContext } from '../../App';

const LocationDetails = () => {
    const {locationId} = useParams();
    const locationData=travelData.find(ld=> ld.title === locationId  );

    const history = useHistory()

    const handleStartBooking=(id)=>{
     history.push(`/hotelBooking/${id}`);
    
    console.log('ddd')
  }
    
 return (
     <>
        <div style={{maxWidth:'1400px', display:'flex', marginTop:'100px'}}>
       
       <div style={{marginLeft:'180px', maxWidth:'500px'}}>
      <SelectCity selectCity={locationData}></SelectCity>
      </div>
      
       {
           travelData.map(hotel=> <City hotel={hotel===locationData && hotel.text }></City>)
       }
       
       <div style={{backgroundColor:'#fff', padding:"20px", maxWidth:'500px' }}>
         <BookingFrom handleStartBooking={handleStartBooking}/>
       </div>
        </div>
   
        </>
    );
};

export default LocationDetails;

