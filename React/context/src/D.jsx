import {useContext} from "react";
//step 5: import the context you exported in the component where you want to get the state
import {countContext} from "./A";

let D=()=> {
  //step 6: inside the functional component call useContext and give it the context
  // from which you want the value
  let valueObj = useContext(countContext);
    return (
      <div className = "d-div">
        <button onClick={()=>{
          valueObj.setCount(valueObj.count+1)
        }}>
        +
        </button>
        <p>{valueObj.count}</p>
    </div>
    );
  };
  
  export default D;
  