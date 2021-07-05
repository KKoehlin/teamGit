import React from 'react';

const WeatherDisplay = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            {console.log(props.name)}
        </div>
    )
}

export default WeatherDisplay;