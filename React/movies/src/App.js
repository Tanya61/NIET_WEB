import React from "react";

class App extends React.Component{

  componentDidMount(){
    //i will get data here
    let f = async()=>{
      let result = await fetch("./data.json");
      let json = await result.json;
      console.log(json);
    };
    
  }
  render(){
    return (
      <div>
        
      </div>
    );
  }
  
}

export default App;