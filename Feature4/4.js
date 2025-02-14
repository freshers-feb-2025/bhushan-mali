

const  emp=[
    {firstname:"Bhushan",lastName:"Mali",age:23},

    {firstname:"priti",lastName:"talekar",age:24},

 {firstname:"shivanand",lastName:"gadgi",age:23}
]



//1 list full name of emp  map

const output=emp.map((i)=>i.firstname+ " " +i.lastName);
console.log(output);


//2 name age
function nameage(i){
return i.firstname +"  " + i.age;
}

const output5=emp.map(nameage);
console.log(output5);

//3
const arr=["think","be"];


function addlast(i){
    return i+"positive";
}
const output6=arr.map(addlast);
console.log(output6);

///////////////////////////////////////////////
//23:2  24:1  reduce

const output1=emp.reduce(function (acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{

        acc[curr.age]=1;
    }

    return acc;
},{})


console.log(output1);

////////////////////////////////////////////////////////////////////////////////////
//filter
const output2=emp.filter((i)=>i.age==23);
console.log(output2);


const output3=emp.filter((i)=>i.age==23).map((i)=>i.firstname);
console.log(output3);

//firts name 

const output7=emp.filter((i)=>
    i.firstname="Bhushan"
   
   
   


);

console.log(output7);