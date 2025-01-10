import { createContext, useContext, useState } from "react"

const userContext=createContext()
export default function Parent2(){
      const[user,setUser]=useState(10)
return(
    <>
    <userContext.Provider value={{user,setUser}}>
    <h1>welcome useContext Hook</h1>
    <h2>Parent Value : {user}</h2>
    <C1/>
    </userContext.Provider>
    </>
)}
function C1( ){
     return(
         <>
         <h1>C1</h1>
         <C2  />
         </>
    )}
function C2( ){
    return(
         <>
         <h1>C2</h1>
         <C3 />
         </>
    )
}
 function C3( ){
    return(
         <>
         <h1>C3</h1>
         <C4 />
         </>
    )

}function C4( ){
    return(
         <>
         <h1>C4</h1>
         <C5  />
         </>
    )

}
 
 

function C5() {
  const { user, setUser } = useContext(userContext);



  return (
    <>
      <h1>C5: The data is {user}</h1>
      <button onClick={()=>{
        setUser(user +10)
      }}>Change Value</button>
    </>
  );
}