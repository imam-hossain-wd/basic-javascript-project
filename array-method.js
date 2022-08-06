
//*******************get number from array ************* 


let arri = [12,65,78,23,54,44,87,13,74,60]

let number = arri.sort();


//get max number from array

var maxnumber = number.length-1;

console.log(arri[maxnumber]);

//get second max number from array

var secondmax = number.length-2;
console.log(number[secondmax]);

// get third max number from array

var thirdmax = number.length-3;
console.log(number[thirdmax]);


// get min number from arry
console.log(arri[0]);

//get second min number from array

console.log(number[1]);




console.log('hello js array function');



// **************a function that show addition of frist largest 5 number ******************



let number2 = [12,65,78,23,54,44,87,13,74,60];

let minNumber = number2.sort();
let maxNumber = minNumber.reverse();


function addarray(){

    let sum = 0;
    for(let i = 0; i < 5; i ++){
        sum += maxNumber[i];
        console.log(maxNumber[i]);

    }
    console.log('Sum of five largest number : ' + sum);
}

addarray(maxNumber);



// a function that show addition of frist smallest  5 number



let numbers = [12,65,78,23,54,44,87,13,74,60];

let minNumbers = numbers.sort();

function AddMinNumbers(){
    let add = 0;
    for(let i=0; i < 5; i++ ){
       
        add += maxNumber[i];
        console.log(maxNumber[i]);


    }
    console.log('Sum of five largest number : ' + add);
}
AddMinNumbers(minNumbers);



