function Display1(values) 
{
  
    const {n, roll,gender, obj}=values
    const {empName,city}=obj
    return (
        <>
        <h1>im coming from Datas.js {n} {roll} {gender} </h1>
        <h2>{empName}, {city}</h2>
        <h3>this is from display</h3>
        <h4>im the sec line</h4>
        </>
    )
}
export default Display1