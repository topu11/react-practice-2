import React, { Component } from "react";

class ClickEventPractice extends Component
{

    constructor()
    {
        super();
        this.state={
            firstlan:'Allah Akbar',
            secondlan:'Allah Akbar',
            count:0
                                     
        }
    
    }

    changeStateLn()
    {
        this.setState({
            firstlan:'Allah Akbar Allah Akbar Allah Akbar',
            secondlan:'Allah Akbar Allah Akbar Allah Akbar Alhamdulliah'
        })
    }

    changeStateCunt()
    {
        let countAdd=this.state.count+1;
        this.setState({
            count:countAdd
        })
    }

    render()
    {
        return(
        <div className="App">

        <div style={{ backgroundColor: "yellowgreen", padding: "50px" }}>
          <div>{ this.state.firstlan}</div>
          <div>{this.state.secondlan}</div>         
          <div>{this.state.count}</div> 
          <button onClick={()=>this.changeStateLn()}>Click Me</button>
          <button onClick={()=>this.changeStateCunt()}>Click Me</button>
        </div>
        </div>
        )
    }
}

export default ClickEventPractice;