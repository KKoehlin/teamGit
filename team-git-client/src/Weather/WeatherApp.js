import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
//import GetLocation from '..location/GetLocation';



//let lat = "39.791000"
//let lon = "-86.148003"
//let url='api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2d765e4fdc07f7fef0fa8fda05c45967'



let url = 'http://api.openweathermap.org/data/2.5/weather?lat=39.791000&lon=-86.148003&appid=';

const WeatherApp = (props) => {

    const [weather, setWeather] = useState();

    let apiKey = "2d765e4fdc07f7fef0fa8fda05c45967";

    const fetcher = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${apiKey}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setWeather(json)

                //let tempF = url + apiKey + '&units=imperial';
                //console.log(tempF)

                //let tempC = url + apiKey + '&units=metric';
                //console.log(tempC)
            })
    }

    return (
        <div>
            <WeatherDisplay weather={weather} />
        </div>
    )
}



export default WeatherApp;