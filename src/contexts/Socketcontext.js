import React, { useReducer, useState, useEffect, useMemo } from 'react';
//import socketIOClient from "socket.io-client";
import io from 'socket.io-client';
const ENDPOINT = "http://localhost:1111/";

export const SocketCtx = React.createContext();


function reducer(state, action) {
    switch (action.type) {
        case 'addCard':

        default:
            return state;
    }
}


const SocketContext = (props) => {

    const [state, dispatch] = useReducer(reducer, {});
    const [response, setResponse] = useState("");

    // useEffect(() => {
    //     const socket = io(ENDPOINT);

    //     console.log('Emitting message...');
    //     socket.emit('ping', { msg: 'ping message' });

    //     // receive pink
    //     socket.on("ping", data => {
    //         console.log('recieved ping ', data);
    //         setResponse(data);
    //     });

    // }, [])

    return (
        <SocketCtx.Provider value={response}>
            {props.children}
        </SocketCtx.Provider>
    )
}

export default SocketContext;