




function x(){
var i=1;
setTimeout(function(){
   console.log(i);
},3000);


console.log("inside x")
}
console.log("outside x")

x();