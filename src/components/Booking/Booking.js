import React, { useContext } from 'react';
import ShowHotel from '../ShowHotel/ShowHotel';
import { rooms } from '../TravelData/TravelData';
import { userContext } from '../../App';

const Booking = () => {
    const [loggedInuser, setLoggedInUser ] = useContext(userContext);
    return (
        <div style={{maxWidth:'800px' , textAlign:'center'}}>
         <div><h3>{loggedInuser.name}</h3> <img style={{width:'50px' , height:'50px', borderRadius:'50%'}} src={loggedInuser.photo} alt=''/> </div>
         {
             rooms.map(room => <ShowHotel  key={room.bedType} room={room}></ShowHotel>)
             
             }
        </div>
    );
};

export default Booking;