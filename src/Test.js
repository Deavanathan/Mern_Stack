import car from './car.jpg';
import car2 from './car2.jpg';
const {useState,useEffect} = require('react');


export default function Test(){
    var [vari,setvari] = useState(0);
    var [aa,setaa] = useState(0)
    useEffect(()=>{
        console.log(`Number increase aaguthu...${vari}`)
        setTimeout(()=>{
            if(vari >= 132){
                console.log('Number 10 Reached');
                vari = 0;
            }
        })
    },[vari])
    return(
        <>
        <br></br>
        
           <img src = {car} alt = "car" style={{position:'relative',width:'200px',height:'200px',left:`${vari*10}px`,transition: 'left 0.5s ease-in-out'}}></img>
           <img src = {car2} alt = "car2" style={{position:'relative',width:'200px',height:'200px',left:`${aa*10}px`,transition: 'left 0.5s ease-in-out'}}></img><br></br>
           <center>
        {/*<button onClick={() => setvari(
            for(let i=0;i<140;i++){
                aa = aa+10;
            }
        )}>Front</button>*/}
        <button onClick={() => setvari(vari + 1)}>Front</button>
        <button onClick={() => setvari(vari - 1)}>Back</button>
        <h1>{vari}</h1>
        <h2>Count</h2>
        </center>
        </>
    );
}