import React, { useState } from 'react';
import Display from './display';
import States from './States'
import Ben10 from './ben10'

function Datas() {
    const [name, setName] = useState(''); 

    return (
        <>
        <center>
            
            <Display sendName={setName} /> 
            <h1>🔥🔥{name}🔥🔥</h1>
            <States />
           
            
            </center>
        </>
    );
}

export default Datas;
