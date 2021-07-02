import React from 'react';

const GetLocation = () => {
    
    const location = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(`Latitude is ${position.coords.latitude}`);
            console.log(`Longitude is ${position.coords.longitude}`);
        }) 
    }
    
    return (
        <div>
            <h4>Geolocation JS API in React</h4>
            {location()}
        </div>
    )
}

export default GetLocation;