import React from 'react';



const City = (props) => {
    console.log(props);
    const {hotelImg} =props.hotel;
   const hotelStyling={
       margin:"10px",
       width:"200px",
       textAlign:'center',
       color:"white"
   }
    return (
        <>
        <div style={{maxWidth:'600px'}} >
        <div style={{display:'flex', textAlign:'center'}}>
         <img style={hotelStyling} src={hotelImg} alt='' />
     <p style={{position:'absolute',right:'700px', width:'300px'}}>{props.hotel}</p>
     
         </div>
      
      
      </div>
    
      </>
    );
};

export default City;