import { useState } from "react";


function FunctionalComponet()
{
     let [firstname,setfirstname]=useState('Touhidul');
     let [lastname,setlastname]=useState('Islam');
     let [count,setCount]=useState(1000);

     let updateName=()=>{
        setfirstname('Touhidul  Modified')
        setlastname('Islam Modified')
       
     }
     let updateCount=()=>{
        setCount(count+1)
     }

     return(
        <div className="App">

        <div style={{ backgroundColor: "blue", padding: "50px" }}>
          <div>{firstname}</div>
          <div>{lastname}</div>         
          <div>{count}</div> 
          <button onClick={updateName}>Click Me</button>
          <button onClick={updateCount}>Click Me</button>
        </div>
        </div>
     )

}
export default FunctionalComponet;