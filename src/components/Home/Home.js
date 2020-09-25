import React, {  useState } from 'react';
import {Row, Button } from 'react-bootstrap'
import './Home.css';
import travelData from '../TravelData/TravelData';
import SelectCity from '../SelectCity/SelectCity';


const Home = () => {
  const fakeData=travelData;
  const [travelD, setTravelData] =useState(fakeData);
 const [cityTitle ,setCityTitle] =useState([]);
 
  const handleBooking=(destination)=>{
       const newTitle=[...cityTitle, destination];
       setCityTitle(newTitle);
     
}
   return (
       <>
        <div className="location-heading">
        <div className='location-title' >
     <p>Choose from a wide range of properties which Booking.com offers. Search now! Book your Hotel near Cox s Bazar Airport. No reservation costs. Great rates. Save 10% with Genius. Get Instant Confirmation. We speak your language. Best Price Guarantee.</p>
         <Button variant="warning">Booking</Button>
        </div>
       
        <Row className='card-item'>
        {
            travelD.map(trd => <div className=' custom-style'> <SelectCity 
            selectCity={trd}
             key={trd.id}  handleBooking={handleBooking}>
             </SelectCity></div> )
        }
      
     
    </Row>
 
        </div>
        
        </>
    );
};

export default Home;