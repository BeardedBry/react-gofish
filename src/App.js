import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import SocketContext from './contexts/Socketcontext';
import Scratch from './Scratch';


const App = () => {

    useEffect(() => {

    }, [])

    return (
        <SocketContext>
            <div>
                <h2>App</h2>
                <Scratch />
            </div>
        </SocketContext>
    )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));