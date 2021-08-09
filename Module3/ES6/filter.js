let a = [1,2,3,4,5];

function isEven(x){
    return x%2==0;
}
console.log("Original Filter Function");

let ans = a.filter(isEven);
console.log(a);
console.log(ans);

function myFilter(arr, f){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        if(f(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log("Created Filter Function");
console.log(a);
console.log(myFilter(a,isEven));
