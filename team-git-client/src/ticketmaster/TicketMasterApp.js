import React, { useEffect, useState } from 'react';
import Geohash from 'latlon-geohash';

import TMDisplay from './TicketMasterDisplay';

const TicketMasterApp = (props) => {
    const [geoPoint, setGeoPoint] = useState('');
    const [results, setResults] = useState();

    // const geohash = Geohash.encode(`${props.lat}`, `${props.long}`, [9]);
    // console.log(geohash);

    const propTest = () => {
        console.log(props.lat);
        console.log(props.long);
    }

    const fetcher = () => {
        const staticGeoPt = "dp4ffxb79";
        const staticEndDate = "2021-08-03T00:00:00Z";
        const staticSort = "date,name,desc";
        const apiKey = "tNGTJR4arQoc6d5dHyQ4HOamibbgtO8g";
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${staticGeoPt}&endDateTime=${staticEndDate}&staticSort=${staticSort}&apikey=${apiKey}`)
            .then (res => {
                if (res.status !== 200) {
                    throw new Error ('Fetch Error');
                } else return res.json();
            })
            .then (json => {
                console.log(json);
            })
            .catch (err => console.log(err))
    }
    
    return (
        <div>
            <button onClick={fetcher}>Find Events Nearby!</button>
            {propTest()}
        </div>
    )
}

export default TicketMasterApp;

// https://app.ticketmaster.com/discovery/v2/events?apikey=tNGTJR4arQoc6d5dHyQ4HOamibbgtO8g&locale=*&geoPoint=dp4ffxb79