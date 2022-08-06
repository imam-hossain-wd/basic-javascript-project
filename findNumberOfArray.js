
//find the largest / max number of array

var arr = [3, 6, 2, 56, 32, 5, 89, 32,120];
var max = 0;

for(i=1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);


// find smallest / min number of array


var arr = [3, 6, 2, 56, 32, 5, 89, 32,120];

var min = arr[0];
for(i= 0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i]
    }

}
console.log(min);



