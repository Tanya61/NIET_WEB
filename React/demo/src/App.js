
import React from "react"

class App extends React.Component {
  
  state = {
    tasks:["make coffee", "make notes", "go for a jog"],
    currInput : "abc",
  }
  
  render = ()=>{
    return (
      <div>
      <input type = "text" onChange={(e)=>{
        this.setState({currInput:e.currentTarget.value});
      }} 
      value = {this.state.currInput}/>
      <ul>
        {
          this.state.tasks.map((el)=>{
            return <li>{el}</li>;
          })
        }
        </ul>
      </div>
    );
  }
  
}

export default App;
