function publicBusFare(passenger){
  
   const busSit = 50;
   const microbusSit = 11;

   const publicBusTricketPrice = 250;
   

        busneed = Math.floor(passenger / busSit);
        carneed = Math.floor((passenger % busSit) / microbusSit);
        restPassenger = (passenger % busSit) % microbusSit;
        totalPublicBusCost = publicBusTricketPrice * restPassenger;
    

    // console.log('bus need : ',busneed);
    // console.log('microbus need : ',carneed);
    // console.log(restPassenger);
    // console.log('Total Public Bus cost : ',totalPublicBusCost );

    return totalPublicBusCost;

}


const publicTransportCost = publicBusFare(235);
console.log(publicTransportCost);