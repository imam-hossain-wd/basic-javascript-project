
//    how to find odd number form an Array



function oddNumberOfArray(numbers){
    for(let i = 0; i<numbers.length; i++){
        let index = i;
        let element = numbers[i];

       if(element % 2 !=0){
         console.log(element);
          }
    }
};


let numbers = [32,65,37,43,24,96,58,13,94];

oddNumberOfArray(numbers);





