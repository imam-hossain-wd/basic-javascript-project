//a function that will return  rest passenger tricket cost 

function publicBusFare(passenger){
  
   const busSit = 50;
   const microbusSit = 11;

   const publicBusTricketPrice = 250;
   

        busneed = Math.floor(passenger / busSit);
        carneed = Math.floor((passenger % busSit) / microbusSit);
        restPassenger = (passenger % busSit) % microbusSit;
        totalPublicBusCost = publicBusTricketPrice * restPassenger;


        if(typeof passenger !== 'number' ){
            return  ('Please Enter a number')
         }

    return totalPublicBusCost;

}

const publicTransportCost = publicBusFare(2,5,7);
console.log(publicTransportCost);


// publicBusFare function end