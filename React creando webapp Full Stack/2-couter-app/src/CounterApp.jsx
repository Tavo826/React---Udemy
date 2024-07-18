import React, { useState } from 'react';

export const CounterApp = () => {
    const [counter, setCounter] = useState(5);

    const counterIncrement = () => {
        setCounter(c => c + 1);
    };

    return (
        <>
            <h2>Contador: {counter}</h2>
            <button onClick={counterIncrement}>Contador + 1</button>
        </>
    );
};