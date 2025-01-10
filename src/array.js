import { useState } from "react";
 const Array = ()=> {
    let [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const handleMap = () => {
        const Arr = arr.map((d) => {
            const value = d + 10;
            console.log(value); 
            return value;
        });
        setArr(Arr); 
    };

    return (
        <>
            <h1>Array</h1>
            <button onClick={handleMap}>Map</button>
            <h2>{arr.join(", ")}</h2> 
        </>
    );
}

export default Array;
