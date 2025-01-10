import React from 'react';

const Display = ({ sendName }) => { 
    sendName('Namma thaan'); 

    return (
        <>
            <h1>React la naama app panna porom 😎😍</h1>
            <h2>Illa Website panna porom 😮</h2>
        </>
    );
};

export default Display;
