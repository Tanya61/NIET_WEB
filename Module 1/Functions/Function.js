function callMe(name){
    console.log("Call me Function called!!")
    console.log(name + "says Hii !!!");
    return 10;
}

//function invocation/call
console.log(callMe);
callMe();

// console.log( callMe  );

// let rVal = callMe();
// console.log( rVal );
// functions and variable me koe difference nhi hai

// callMe( "steve" );
// Functions can be passed as a argument in a function and also they can be returned from the function just like variables !


// let sayHi; // undefined

sayHi();

// valid syntax
let sayHi = function(){
    console.log("Function says Hiii !!!");
}

// sayHi();