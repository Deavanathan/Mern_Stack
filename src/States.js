import {useState} from "react";
import dorasearch from './dora_search.jpg'
import dorahappy from './dora_happy.jpg'
export default function States(){
  var [clr,setclr] = useState('')
  var [stnc,setstnc] = useState('Neenga Andha Colour ah paathingala ??')
  var [img,setimg] = useState(dorasearch)
  console.log("The current colour is : ",clr)

    return(
   <><center>
   <h1>{stnc}</h1>
   <img src={img} alt='dora' style={{ width: '200px', height: '200px' }}></img><br></br>
   <button onClick={()=>{setclr(clr='Red');setstnc(stnc='Ippa Therinjudha enna Colour nu');setimg(img=dorahappy)} }>Idho Inga Irukku !! </button>
   <h1 style={{color:'red'}}>{clr}</h1>

   <br>
   </br>
   <button onClick={()=>{setclr(clr='');setstnc(stnc='Neenga Andha Colour ah paathingala ??');setimg(img=dorasearch)} }>Restart </button>
   </center>
   </>
    )
}

/*
export




*/