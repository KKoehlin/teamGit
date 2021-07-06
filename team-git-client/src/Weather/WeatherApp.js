import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
//import GetLocation from '..location/GetLocation';

import { Button } from '@material-ui/core';


//let lat = "39.791000"
//let lon = "-86.148003"
//let url='api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2d765e4fdc07f7fef0fa8fda05c45967'

//let url = 'http://api.openweathermap.org/data/2.5/weather?lat=39.791000&lon=-86.148003&appid=';

const WeatherApp = (props) => {

    const [weatherInfo, setWeatherInfo] = useState();
    const [unit, setUnit] = useState("metric");

    let apiKey = "dcee62d41438be11823b7568498cc8e9";

    const toggleBtn = () => {
        return (
            (unit === "metric") ? setUnit("imperial") : setUnit("metric")
        )
    }

const fetcher = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${apiKey}&units=${unit}`)
        .then(res => res.json())
        .then(json => {
            setWeatherInfo(json)
            console.log(json)

        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Button size="medium" variant="contained" onClick={fetcher}>What's the weather?</Button>
            <br />
            <Button size="small" variant="contained" onClick={toggleBtn}>Change weather Unit</Button>
            <WeatherDisplay weatherInfon={weatherInfo} />
        </div>
    )
}
    export default WeatherApp;