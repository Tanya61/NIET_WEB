
import React from "react"
import "./App.css"
import List from "./List.jsx"
class App extends React.Component {
  
  state = {
    tasks:["make coffee", "make notes", "go for a jog"],
    currInput : "",
  }
  
  render = ()=>{
    return (
      <div>
      <input 
      className = "input-box"
      type = "text" 
      onChange={(e)=>{
        this.setState({currInput:e.currentTarget.value});
      }}
      
      onKeyDown={
        (e)=>{
          if(e.key == "Enter"){
            this.setState({
              tasks:[...this.state.tasks,this.state.currInput],
              currInput:"",
            });
          }
        }
      }
      value = {this.state.currInput}/>
      <List tasks = {this.state.tasks}/>
      </div>
    );
  }
  
}

export default App;
