import Display1 from "./display1"

function Data1()
{
    const person={
        empName:'dena',
        city:'cbe'

    }
    let name3='sai'
    let roll=12
    const ans=`my name is ${name3}`
    return(
        <>
        <h1>my name is  {name3}</h1>
        <h1>  {ans} </h1>
       <Display1 n={name3} roll={roll} gender='male' obj={person}/>
        </>
    )
}
export default Data1