import React from 'react';

const CardDisplay = ({ name, suit }) => {

    return (
        <div>
            <p>{name} of {suit}</p>
        </div>
    )
}

export default CardDisplay;