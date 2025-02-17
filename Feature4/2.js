//filter


const arr=[1,2,3,4];



function oddvalue(i){
    return i%2==0;
}
const output=arr.filter(oddvalue);
console.log(output);