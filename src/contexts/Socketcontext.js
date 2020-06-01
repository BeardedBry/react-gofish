import React, { useReducer, useState, useEffect, useRef } from 'react';
//import socketIOClient from "socket.io-client";
import io from 'socket.io-client';
const ENDPOINT = "http://localhost:1111/";

export const SocketCtx = React.createContext();

//Reducer for receiving requests from sever.
function receiver(state, action) {
    //console.log(action.type);
    switch (action.type) {
        case 'SHUFFLE':
        case 'DECK':
            console.log('DECK', action.payload);
            return action.payload;
        case 'START':
            console.log('START', action.payload)
            return action.payload;
            break;
        default:
            return action.payload;
        //return state;
    }
}

const SocketContext = (props) => {
    const [state, dispatch] = useReducer(receiver, {});
    const socketRef = useRef(null);

    // Open socket and add listeners.
    useEffect(() => {
        socketRef.current = io(ENDPOINT).open();
        //console.log('useEffect ran');

        // socketRef event listeners:
        socketRef.current.on('RECEIVE', (state, action) => {
            //console.log('recieved from server');
            dispatch({ type: action, payload: state });
        });

    }, []);


    // Function for sending requests to server.
    // Passed into components.
    function socketRequest(action) {
        socketRef.current.emit('REQUEST', action);
    }

    return (
        <SocketCtx.Provider value={{ state, socketRequest }}>
            {props.children}
        </SocketCtx.Provider>
    )
}

export default SocketContext;