import React, { useContext } from 'react';
import { userContext } from '../../App';

const ShowHotel = ({room}) => {



  const style = {

   display: 'flex',
    margin: '40px',
    justifyContent: 'space-between',
    textAlign:'center',
    color:'black'
}
    return (
        <>
        
        <div  style={style}  >
         <div> <img style={{height:"200px"}}  src={room.imgUrl} alt=''/> </div>
    <div style={{marginLeft:'50px', textAlign:'center'}}>
    <h3>{room.title}</h3>
    <h4>{room.description}</h4>
    <h4>{room.capacity}</h4>
    <h4>{room.bedType}</h4>
    <h3 style={{backgroundColor:'red',textAlign:"center", height:'50px',width:'50px', borderRadius:'50%'}}>{room.avatar}</h3> 
    <h4>${room.price}</h4>
         </div>
        </div>
        </>
    );
};

export default ShowHotel;


