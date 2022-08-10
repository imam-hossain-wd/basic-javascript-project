function centimeterToMeter(centimeter){

    const getMeter = centimeter / 100;

    return getMeter;

}

const houseMeter = centimeterToMeter(1500);

console.log(houseMeter);