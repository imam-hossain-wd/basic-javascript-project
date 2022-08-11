//a function that will return the price of different type of oil

function oilPrice(disealQuantity, patrolQuantity, octenQuantity){

    disealPrice = 114;
    patrolPrice = 130;
    octenPrice = 135;

    totaldisealPrice =  disealQuantity * disealPrice;
    totalPetrolPrice =  patrolQuantity * patrolPrice;
    totalOctenPrice  =  octenQuantity * octenPrice;

    totalPriceOfAll = totaldisealPrice +  totalOctenPrice + totalPetrolPrice;


    if(typeof disealQuantity !== 'number' || typeof patrolQuantity !== 'number' || typeof octenQuantity !== 'number'){
        return  ('Please Enter a Number')
     }

    return totalPriceOfAll;


}

const getPrice = oilPrice(6,2,3)

console.log(getPrice);