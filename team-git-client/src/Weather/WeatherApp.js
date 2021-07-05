//import React, { useState, useEffect } from 'react';
//import WeatherDisplay from './WeatherDisplay';
//import GetLocation from '..location/GetLocation';

//let apiKey = "2d765e4fdc07f7fef0fa8fda05c45967";

//let lat = "39.791000"
//let lon = "-86.148003"
//let url='api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2d765e4fdc07f7fef0fa8fda05c45967'
/*
const WeatherApp = (props) => {
    return (
        <div>

        </div>
    )
}
*/
//const fetcher = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=39.791000&lon=-86.148003&appid=2d765e4fdc07f7fef0fa8fda05c45967')
        .then(res => res.json())
        .then(json => {
            console.log(json)

            let tempF = url + 'units=imperial';
            console.log(tempF)

            let tempC = url + 'units=metric';
            console.log(tempC)
        })
    //}

    //export default WeatherApp;