//Libraries

import React from 'react'; // creation logic 

import ReactDOM from 'react-dom'; // render logic

//App is a component we have imported
import MyComp from './MyComp'


ReactDOM.render(
        <div>
        <MyComp />
        <MyComp />
        <MyComp />
        <MyComp />
        <MyComp />
        </div>,
       
       document.querySelector("#root") // ek jgh jha us component ko dikhana hh
);


