import React, { useState } from 'react';

const Card = ({ props }) => {
    const { name, value, suit } = props;
    return (
        <div>
            <p>{name} of {suit}</p>
        </div>
    )
}

export default Card;


//this.nine = {
    //     name: 'Nine',
    //     suit: name,
    //     value: 9,
    //     trump: false,
    //     ownerName: null
    // }

// class Card extends Component {
//     constructor(props) {
//         super(props);

//     }

//     render() {

//         return (<h1>Card</h1>)
//     }
// }
