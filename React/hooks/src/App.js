import { useEffect, useState } from "react";

let App=()=> {

let[count, setCount] = useState(0);  //used for state in function using hooks 
                                    //and we can write as many state as needed by writing like this multiple times.

console.log("render was called");

  useEffect(()=>{
    console.log("case 2 useEffect was called");
    return()=>{
      console.log("clean-up function");
    };
  });

  return (
    <div>
      <button onClick={()=>{
        setCount(count+1);
      }}
      >
        +
      </button>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count-1);
      }}
      >
        -
      </button>
      
    </div>
  );
}

export default App;
