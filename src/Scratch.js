import React, { useContext, useEffect, useState, useRef } from 'react';
// import { SocketCtx } from './contexts/Socketcontext';
import io from 'socket.io-client';
const ENDPOINT = "http://localhost:1111/";

const Scratch = () => {

    const [msg, setMsg] = useState('');

    const inputEl = useRef(null)
    const socketRef = useRef(null)
    const socketEmit = useRef(null);
    // const ctx = useContext(SocketCtx);
    useEffect(() => {
        socketRef.current = io(ENDPOINT).open();
        console.log(socketRef.current);

        // socketRef.current.on('connect', function () {
        //     console.log("emitting msg");
        //     socketEmit.current = socketRef.current.emit;
        // });

    }, [])

    useEffect(() => {
        console.log('useEffect');
        if (socketRef.current !== null) {
            let t = socketRef.current.emit('ping');
            console.dir(t);
        }
    }, [msg])

    const handleClick = (e) => {
        e.preventDefault();
        setMsg(inputEl.current.value);
    }

    return (
        <div>
            <h1>{msg}</h1>
            <form>
                <input ref={inputEl} />
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Scratch;