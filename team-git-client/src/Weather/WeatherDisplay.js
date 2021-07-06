import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from '@material-ui/core';

const WeatherDisplay = (props) => {

    const display = () => {
        if (props.weatherInfo) {
            return (
                <Card>

                    <CardHeader
                        title={props.weatherInfo.name}
                    />
                    <CardContent>
                        <Typography>
                            {props.weatherInfo.weather[0].description}
                        </Typography>
                    </CardContent>
                </Card>
            )
        }
    }


    return(
        <div>
            {display()}
        </div>
    )
}


export default WeatherDisplay;