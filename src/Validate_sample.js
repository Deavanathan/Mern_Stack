const { useState } = require("react")
export default function Form1()
{
    function formSubmit(formdata)
    {    
        formdata.preventDefault()
        console.log('success............')
    }
    const[name,setName]=useState("")
    return(
        <>
        <form onSubmit={formSubmit}>
Name: <input type="text" onChange={(data)=>{setName(data.target.value)}}></input>
        <input type="submit" value="signup"></input>
        </form>
        <h1>the name is: {name}</h1>
        </>
    )
}