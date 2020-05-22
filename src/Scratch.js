import React, { useContext } from 'react';
import { CardCtx } from './contexts/Cardcontext';

const Scratch = () => {

    const ctx = useContext(CardCtx);

    return (
        <pre>
            Scratch
            {ctx}
            end of scratch
        </pre>
    )
}

export default Scratch;