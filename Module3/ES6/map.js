let a = [1,2,3,4,5];

function double(x){
    return 2*x;
}

let ansArr = a.map(double);
console.log("Original Map Function");
console.log(a);
console.log(ansArr);

function myMap(a, func){
    let ans = [];
    for(let i=0;i<a.length;i++){
        ans.push(func(a[i]));
    }
    return ans;
}

console.log("Created Map Function");
console.log(a);
console.log(myMap(a,double));