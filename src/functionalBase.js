import { useState } from "react";
import FunctionalComponentWithParametre from "./functionalComponents/propsFunctional";
import InputBoxEvent from "./functionalComponents/inputboxEvent";

export default function TestFunstionState()
{
    let [firstName,setFirstName]=useState("touhidul");
    let [lastName,setLastName]=useState("Islam");

    let updateFistname=()=>{
        setFirstName("tasmia")
    }
    let updateLastname=()=>{
        setLastName("Touhid")
    }
    
    let studentInfo={
        firstName:'Abdullah',
        lastName:'Hossen',
        Age:30,
        religion:'Islam'
    }

    let [email,setEmail]=useState('touhidulislam256@gmail.com');


    return (
        <div>
         <div>{firstName}</div>
         <div>{lastName}</div>
        
         <FunctionalComponentWithParametre  others={studentInfo} email={email} />
         <button onClick={updateFistname}>Changefirstname</button>
         <button onClick={updateLastname}>Changelastname</button>

         <button onClick={()=>{setEmail('touhidul.developer.2022@gmail.com')}}>ChangeEmail</button>
         
         <InputBoxEvent />

        </div>
    )
}