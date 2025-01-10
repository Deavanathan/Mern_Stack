import Printing from './List_print';

export default function Ace(){
 const arr = [1,2,3,4,5,6,7,8,9,10];
return(

    <ul>{
        arr.map((d,i)=> (<li key={i}><Printing value={d}/></li>))
    }
    </ul>
)

}