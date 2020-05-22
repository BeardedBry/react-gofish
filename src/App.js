import React from "react";
import ReactDOM from "react-dom";
import Suit from './Suit';
import Scratch from './Scratch';
import CardContext from './contexts/Cardcontext';


const App = () => {

    return (
        <CardContext>
            <div>
                <Suit name={'Hearts'} />
                <Suit name={'Diamonds'} />
                <Suit name={'Clubs'} />
                <Suit name={'Spades'} />
            </div>
        </CardContext>
    )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));