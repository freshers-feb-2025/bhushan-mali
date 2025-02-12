





console.log(n);//hoistiong undefined
console.log(square2);//undefined hoistiong
console.log(square);//code
var n=2;

function square (num){
    var ans=num*num;
    return ans;
}


var square2=square(n);
var square4=square(4);



console.log(n);//2
console.log(square);//code yeil

// console.log(ans);//error beacuse call stack remove zlay


