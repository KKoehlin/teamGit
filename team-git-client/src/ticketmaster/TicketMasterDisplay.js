import React from 'react';

const TMDisplay = (props) => {
    const eventMapper = () => {
        return props.results._embedded.events.map((e) => {
            return (
                <p>{e.name}</p>
            )
        })
    }
    
    return (
        <div>
            {eventMapper()}
        </div>
    )
}

export default TMDisplay;