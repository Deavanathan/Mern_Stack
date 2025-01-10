const { useState } = require("react")

export default function Validate(){

const [ Data , setData] = useState({
    name:"",
    roll:"",
    gender:"",
    city:"",
    phone:""
});

function formSubmit(Data){
    Data.preventDefault();
    console.log("Form Submit panniyachu...",Data);
}

    return(
<>
<form onSubmit={formSubmit}>
    Name: <input type="text" onChange={(data)=>{setData({...Data,name:data.target.value})}}></input>
    <br></br>
    Roll: <input type="text" onChange={(data)=>{setData({...Data,roll:data.target.value})}}></input>
    <br></br>
    Gender: <input type="text" onChange={(data)=>{setData({...Data,gender:data.target.value})}}></input>
    <br></br>
    City: <input type="text" onChange={(data)=>{setData({...Data,city:data.target.value})}}></input>
    <br></br>
    Phone: <input type="text" onChange={(data)=>{setData({...Data,phone:data.target.value})}}></input>
    <br></br>
    <button type="submit">Submit</button>
</form>
</>
    )
}