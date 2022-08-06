

//how to find even numbers of an array

  function evenNumber(number){

    for(let i = 0; i < number.length ; i++){
        if(number[i] % 2 == 0){
            console.log(number[i]);
        }
    }
  }
  let number = [13,23,12,45,22,48,66,100];

  evenNumber(number);