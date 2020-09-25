import React, {  useState } from 'react';
import {Row,CardDeck, Button , Card} from 'react-bootstrap'
import './Home.css';
import travelData from '../TravelData/TravelData';
import SelectCity from '../SelectCity/SelectCity';
import ShowHotel from '../ShowHotel/ShowHotel';


const Home = () => {
  const fakeData=travelData;
  const [travelD, setTravelData] =useState(fakeData);
 const [cityTitle ,setCityTitle] =useState([]);
 
  const handleBooking=(destination)=>{
       console.log('traved facing', destination);
    const newTitle=[...cityTitle, destination];
     setCityTitle(newTitle);
}
   return (
       <>
        <div className="location-heading">
        <div className='location-title' >
         {/* <ShowHotel cityTitle={cityTitle}  handleBooking={handleBooking} /> */}
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