//reduce

const arr=[1,2,3,4];


// function sum(arr){

//     let sum=0;
//  for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//  }
//  return sum;
// }



// console.log(sum(arr));








//acc === sum
//curr  arr[i]
const output=arr.reduce(function(acc,curr){
    acc =acc+curr
    return acc; 
},0) 
//0==acc

   console.log(output); 