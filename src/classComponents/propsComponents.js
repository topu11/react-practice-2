import React from "react";



class PropsClasssComponents extends React.Component
{

   
    
    render()
    {
       return(
        <div className="App">
           <div style={{ backgroundColor: "yellow", padding: "50px" }}>
           <div>first Name {this.props.others.firstName}</div>
           <div>last Name {this.props.others.lastName}</div>
            <div>email {this.props.email}</div>
           </div>
        </div>
       )
    }
}

export default  PropsClasssComponents;