let a = [1,2,3];

function sum(a,b){
    return a+b;
}
 let reduceValue = a.reduce(sum);

 console.log("Original Reduce Function");
 console.log(a);
 console.log(reduceValue);

 //----------------

 //MyReduce

 function MyReduce(arr, f){
     let ans = arr[0];
     for(let i=1;i<arr.length;i++){
         ans = f(ans,arr[i]);
     }
     return ans;
 }

 console.log("Created Reduce Function");
 console.log(a);
 console.log(MyReduce(a,sum));