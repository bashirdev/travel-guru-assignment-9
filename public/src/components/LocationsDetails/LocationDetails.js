import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import City from '../City/City';
import SelectCity from '../SelectCity/SelectCity';
import travelData from '../TravelData/TravelData';

const LocationDetails = () => {
    const {locationId} = useParams();
    const locationData=travelData.find(ld=> ld.title === locationId)
    console.log(locationData);
 return (
        <div>
       
      <SelectCity selectCity={locationData}></SelectCity>
       {
           travelData.map(hotel=> <City hotel={hotel}></City>)
       }
        </div>
    );
};

export default LocationDetails;

  {/* {
            travelData.map(td=><li>{td.title}</li> )
        } */}

{/* <div>
<img style={{height:'200px', width:'200px', borderRadius:'50%'}} src={location.imgUrl} alt=''/>
<h2>{location.title}</h2>
<h5>{location.text}</h5> 

</div> */}


// const {locationId} = useParams();
// const location=travelData.filter(lc => lc.id===lc.id);
// const [dataLocation,setDatalocaton] =useState(location)

// useEffect(()=>{

// },[])