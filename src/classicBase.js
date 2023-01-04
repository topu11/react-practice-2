import React from "react";
import PropsClasssComponents from "./classComponents/propsComponents";
import ClickEventPractice from './classComponents/clickEvent';
import './App.css';

class ClassicComponentBaseFile extends React.Component
{
    constructor()
   {
      super();
      this.state={
         email:'touhidulislam256@gmail.com'
      }
   }
    
    render()
    {
        let studentInfo={
            firstName:'Abdullah',
            lastName:'Hossen',
            Age:30,
            religion:'Islam'
        }

        return(
            <div className="App">
                <ClickEventPractice />
                <PropsClasssComponents others={studentInfo} email={this.state.email}></PropsClasssComponents>
                <button onClick={()=>{this.setState({email:'touhidul.developer.2022@gmail.com'})}}>Click ME</button>
            </div>
           )
    }
}

export default ClassicComponentBaseFile;