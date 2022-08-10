function radianToDegree(radians){

    degree = (radians * (180 / Math.PI)).toFixed(2);
 
    return degree;

}

const getDegree = radianToDegree(10);
const getDegree1 = radianToDegree(25);
const getDegree2 = radianToDegree(199);

console.log(getDegree);
console.log(getDegree1);
console.log(getDegree2);