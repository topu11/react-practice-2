import { useState } from "react";

export default function InputBoxEvent()
{
    let [firstName,setFirstName]=useState(" ")
    let getData=(val)=>{
       
        setFirstName(val.target.value)
    }
    return (
        <div style={{ backgroundColor: "coral", padding: "50px" }}>
            <h1>{firstName}</h1>
          <input type="text" onChange={getData}/>
        </div>
    )
}