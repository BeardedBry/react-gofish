import React, { useContext, useEffect, useState, useRef } from 'react';
import { SocketCtx } from './contexts/Socketcontext';
import CardDisplay from './CardDisplay';

const Scratch = () => {

    const [msg, setMsg] = useState('');
    const [player1, setPlayer1] = useState(false);
    const [player2, setPlayer2] = useState(false);

    const inputEl = useRef(null);
    const { state, socketRequest } = useContext(SocketCtx);

    const handleClick = (e) => {
        let request = inputEl.current.value;
        inputEl.current.value = '';

        socketRequest(request);
        e.preventDefault();
        console.log(state);
    }

    const joinGame = (player) => {
        socketRequest(player);
    }

    useEffect(() => {
        console.log('State: ', state);
    }, [state])

    var player1Hand, player2Hand = '';

    if (state.player1 && state.player1.hand.length) {
        for (var { name, suit } of state.player1.hand) {
            player1Hand += `${name} of ${suit}, `;
        }
    }

    if (state.player2 && state.player2.hand.length) {
        for (var { name, suit } of state.player2.hand) {
            player2Hand += `${name} of ${suit}, `;
        }
    }

    return (

        <div>
            <h3>Console</h3>
            <form>
                <input ref={inputEl} />
                <button onClick={handleClick}>Submit</button>
            </form>
            <section id="console-cards">
                <div className="all-cards">
                    <h3>Deck</h3>
                    {
                        state.deck && state.deck.length ?
                            state.deck.map((card) => {
                                return <CardDisplay
                                    name={card.name}
                                    suit={card.suit}
                                    key={card.name + card.suit} />
                            })
                            : null
                    }
                </div>
                <div className="player-cards">
                    <h3>Player1</h3>
                    <p>
                        {state.player1 && state.player1.id
                            ? state.player1.id
                            : <button onClick={() => joinGame("JOIN_PLAYER1")}>Join</button>
                        }
                    </p>
                    <div>
                        {state.player1
                            ? (<ul>
                                <li>Name: {state.player1.name}</li>
                                <li>Turn: {state.player1.turn.toString()}</li>
                                <li>Hand: {player1Hand}</li>
                                <li>Books: {state.player1.books}</li>
                            </ul>)
                            : null
                        }
                    </div>
                </div>
                <div className="player-cards">
                    <h3>Player2</h3>
                    <p>
                        {state.player2 && state.player2.id
                            ? state.player2.id
                            : <button onClick={() => joinGame("JOIN_PLAYER2")}>Join</button>
                        }
                    </p>
                    <div>
                        {state.player2
                            ? (<ul>
                                <li>Name: {state.player2.name}</li>
                                <li>Turn: {state.player2.turn.toString()}</li>
                                <li>Hand: {player2Hand}</li>
                                <li>Books: {state.player2.books}</li>
                            </ul>)
                            : null
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Scratch;