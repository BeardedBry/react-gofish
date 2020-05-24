import React, { useContext, useEffect, useState, useRef } from 'react';
import { SocketCtx } from './contexts/Socketcontext';
import CardDisplay from './CardDisplay';
// import io from 'socket.io-client';
// const ENDPOINT = "http://localhost:1111/";

const Scratch = () => {

    const [msg, setMsg] = useState('');

    const inputEl = useRef(null);
    //const socketRef = useRef(null);
    //const dispatch = useContext(SocketCtx);
    const { state, socketRequest } = useContext(SocketCtx);

    // useEffect(() => {
    //     socketRef.current = io(ENDPOINT).open();
    //     console.log(socketRef.current);

    //     socketRef.current.on('hello', function (data) {
    //         console.log("receiving msg");
    //         setMsg(data);
    //         // socketEmit.current = socketRef.current.emit;
    //     });

    // }, [])

    const handleClick = (e) => {
        console.log('handle click');
        let request = inputEl.current.value;
        inputEl.current.value = '';

        //dispatch({ type: request });
        socketRequest(request);
        e.preventDefault();
        //REQUEST_DECK();
    }

    useEffect(() => {
        console.log('state', state);
    }, [state])

    return (
        <div>
            <h3>Console</h3>
            <form>
                <input ref={inputEl} />
                <button onClick={handleClick}>Submit</button>
            </form>
            <div>
                {
                    state.length ?
                        state.map((card) => {
                            return <CardDisplay
                                name={card.name}
                                suit={card.suit}
                                key={card.name + card.suit} />
                        })
                        : null
                }
            </div>
        </div>
    )
}

export default Scratch;