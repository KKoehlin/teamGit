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
    Typography
} from '@material-ui/core';
import '@fontsource/roboto';

const TMDisplay = (props) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 400,
            marginTop: 12,
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
    });

    const classes = useStyles();

    const eventMapper = () => {
        if (props.results) {
            return props.results.map((e) => {
                return (
                    <Card className={classes.root}>
                        <CardHeader
                            title={e.name}
                            subheader={e.dates.start.dateTime}
                        />
                        <CardMedia
                            className={classes.media}
                            image={e.images[6].url}
                        />
                        <CardActions>
                            <Button size="medium" color="primary" variant="contained">Learn More</Button>
                        </CardActions>
                    </Card>
                )
            })
        }
    }

    return (
        <div>
            {eventMapper()}
        </div>
    )
}

export default TMDisplay;