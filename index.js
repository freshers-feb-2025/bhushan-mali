

//arguments is objects which has fuction scope which stored like Array

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
     


    }

    console.log(arguments.length)
    return sum;
  }

//   console.log(arguments.length)

  console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15