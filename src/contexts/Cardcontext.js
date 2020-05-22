import React, { useReducer, useMemo } from 'react';


export const CardCtx = React.createContext();


function reducer(state, action) {
    switch (action.type) {
        case 'addCard':

        default:
            return state;
    }
}


const CardsContext = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <CardCtx.Provider value="test">
            {props.children}
        </CardCtx.Provider>
    )
}

export default CardsContext;



const initialState = {
    cards: [
        { name: "Two", value: 2, owner: null, suit: 'Hearts' },
        { name: "Three", value: 3, owner: null, suit: 'Hearts' },
        { name: "Four", value: 4, owner: null, suit: 'Hearts' },
        { name: "Five", value: 5, owner: null, suit: 'Hearts' },
        { name: "Six", value: 6, owner: null, suit: 'Hearts' },
        { name: "Seven", value: 7, owner: null, suit: 'Hearts' },
        { name: "Eight", value: 8, owner: null, suit: 'Hearts' },
        { name: "Nine", value: 9, owner: null, suit: 'Hearts' },
        { name: "Ten", value: 10, owner: null, suit: 'Hearts' },
        { name: "Jack", value: 11, owner: null, suit: 'Hearts' },
        { name: "Queen", value: 12, owner: null, suit: 'Hearts' },
        { name: "King", value: 13, owner: null, suit: 'Hearts' },
        { name: "Ace", value: 14, owner: null, suit: 'Hearts' },
        { name: "Two", value: 2, owner: null, suit: 'Diamonds' },
        { name: "Three", value: 3, owner: null, suit: 'Diamonds' },
        { name: "Four", value: 4, owner: null, suit: 'Diamonds' },
        { name: "Five", value: 5, owner: null, suit: 'Diamonds' },
        { name: "Six", value: 6, owner: null, suit: 'Diamonds' },
        { name: "Seven", value: 7, owner: null, suit: 'Diamonds' },
        { name: "Eight", value: 8, owner: null, suit: 'Diamonds' },
        { name: "Nine", value: 9, owner: null, suit: 'Diamonds' },
        { name: "Ten", value: 10, owner: null, suit: 'Diamonds' },
        { name: "Jack", value: 11, owner: null, suit: 'Diamonds' },
        { name: "Queen", value: 12, owner: null, suit: 'Diamonds' },
        { name: "King", value: 13, owner: null, suit: 'Diamonds' },
        { name: "Ace", value: 14, owner: null, suit: 'Diamonds' },
        { name: "Two", value: 2, owner: null, suit: 'Clubs' },
        { name: "Three", value: 3, owner: null, suit: 'Clubs' },
        { name: "Four", value: 4, owner: null, suit: 'Clubs' },
        { name: "Five", value: 5, owner: null, suit: 'Clubs' },
        { name: "Six", value: 6, owner: null, suit: 'Clubs' },
        { name: "Seven", value: 7, owner: null, suit: 'Clubs' },
        { name: "Eight", value: 8, owner: null, suit: 'Clubs' },
        { name: "Nine", value: 9, owner: null, suit: 'Clubs' },
        { name: "Ten", value: 10, owner: null, suit: 'Clubs' },
        { name: "Jack", value: 11, owner: null, suit: 'Clubs' },
        { name: "Queen", value: 12, owner: null, suit: 'Clubs' },
        { name: "King", value: 13, owner: null, suit: 'Clubs' },
        { name: "Ace", value: 14, owner: null, suit: 'Clubs' },
        { name: "Two", value: 2, owner: null, suit: 'Spades' },
        { name: "Three", value: 3, owner: null, suit: 'Spades' },
        { name: "Four", value: 4, owner: null, suit: 'Spades' },
        { name: "Five", value: 5, owner: null, suit: 'Spades' },
        { name: "Six", value: 6, owner: null, suit: 'Spades' },
        { name: "Seven", value: 7, owner: null, suit: 'Spades' },
        { name: "Eight", value: 8, owner: null, suit: 'Spades' },
        { name: "Nine", value: 9, owner: null, suit: 'Spades' },
        { name: "Ten", value: 10, owner: null, suit: 'Spades' },
        { name: "Jack", value: 11, owner: null, suit: 'Spades' },
        { name: "Queen", value: 12, owner: null, suit: 'Spades' },
        { name: "King", value: 13, owner: null, suit: 'Spades' },
        { name: "Ace", value: 14, owner: null, suit: 'Spades' }
    ],
};