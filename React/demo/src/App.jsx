
import React from "react"
import "./App.css"
import List from "./List.jsx"
import Input from "./Input.jsx"
class App extends React.Component {
  
  state = {
    tasks:["make coffee", "make notes", "go for a jog"],
    currInput : "",
  }
  
  handleCurrInput=(value)=>{
    this.setState({currInput:value});
  }
  handleTasks=()=>{
    this.setState({
      tasks:[...this.state.tasks,this.state.currInput],
      currInput:"",
    });
  }
  deleteTask = (singleTask)=>{
    let currTaskArr = this.state.tasks
    let filteredArr = currTaskArr.filter((element)=>{
    return element!==singleTask;
    })
    this.setState({tasks: filteredArr});
  }

  render = ()=>{
    return (
      <div>
      <Input handleCurrInput = {this.handleCurrInput} handleTasks = {this.handleTasks} currInput = {this.state.currInput}/>
      <List tasks = {this.state.tasks} deleteTask = { this.deleteTask} />
      </div>
    );
  }
  
}

export default App;
