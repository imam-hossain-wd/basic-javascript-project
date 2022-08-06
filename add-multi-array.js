
// addition array value 

// simple way addition array value 

let numbers = [14,54,34,64,87,45,98,67,80,54,24];
let sum = 0;
for(let i =0; i < numbers.length; i++){
  sum+= numbers[i];
}
console.log(sum);



// addition function of an array 


function addArray(numbers){
  let sum = 0;
  for(let i = 0; i< numbers.length; i++){
    sum += numbers[i]
  }
  console.log(sum);
}
let numbers = [14,54,34,64,87,45,98,67,80,54,24];

addArray(numbers);




// simple way multiplication arry value 


let numbers = [14,2,54,34,64,87,45,98];

let mul = 1;

for(let i = 0 ; i < numbers.length; i ++){

  mul *= numbers[i]
}
console.log(mul);






//multiplication of array value by function 



function mulArray(numbers){

  let mul = 1;
  for(let i = 0; i<numbers.length; i++){

    mul *= numbers[i];
  }
  console.log(mul);
}

let numbers = [12,43,6,4];

mulArray(numbers);