function oilPrice(disealQuantity, patrolQuantity, octenQuantity){

    disealPrice = 114;
    patrolPrice = 130;
    octenPrice = 135;

    totaldisealPrice =  disealQuantity * disealPrice;
    totalPetrolPrice =  patrolQuantity * patrolPrice;
    totalOctenPrice  =  octenQuantity * octenPrice;

    totalPriceOfAll = totaldisealPrice +  totalOctenPrice + totalPetrolPrice;

    return totalPriceOfAll;


}

const getPrice = oilPrice(0,2,3)

console.log(getPrice);