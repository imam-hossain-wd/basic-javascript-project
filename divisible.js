

for(let i = 1; i <= 50; i ++){
    let number = i;


    if (number % 3 === 0 && number % 5 == 0){
        console.log('foobar');
    }
    else if(number % 5 === 0) {
        console.log('bar');

    }
    else if(number % 3 === 0){
        console.log('foo');
    }
    else{
        console.log(i);
    }
}