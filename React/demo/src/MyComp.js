// 3 things---- h1, p, ul
import React from "react";

class MyComp extends React.Component{
    state = {
        someNumber : 2
    }

    render = () => {
        return(
            <div>
            <h1> HELLO THIS IS CLASS - BASED COMPONENT</h1>
            <h1>{this.state.someNumber}</h1>
            </div>
        );
    };
}

export default MyComp;