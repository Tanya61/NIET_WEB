// 3 things---- h1, p, ul
import React from "react";

class MyComp extends React.Component{
    state = {
        someNumber : 0
    }

    render = () => {
        console.log("Rerendered");
        return(
            <div>
                <button 
                    onClick = {() =>{
                        this.setState({someNumber : this.state.someNumber+1});
                    }}
                >
                    increment
                </button>

                
                <button 
                    onClick = {() =>{
                        this.setState({someNumber : this.state.someNumber-1});
                    }}
                >
                    decrement
                </button>
                <h1>{this.state.someNumber}</h1>
            </div>
            
        );
    };
}

export default MyComp;