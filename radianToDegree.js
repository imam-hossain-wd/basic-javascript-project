
// a function that exicute degree from radian

function radianToDegree(radians){

    degree = (radians * (180 / Math.PI)).toFixed(2);

    if(typeof radians !== 'number'){
        return ('Please Enter the number')
    }
 
    return degree;

}

const getDegree = radianToDegree(30);


console.log(getDegree);
