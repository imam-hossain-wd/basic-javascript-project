

// a function that check is it best friend or not
// if it is bestfriend will return true and false of object 

const person1 = {name : "abul", friend: "babul"};
const person2 = {name : "babul", friend: "abul"};

function isBestFriend(obj1, obj2){

const  isbestFriendCheck = person1.name === person2.friend  && 
                          person1.friend === person2.name;
           
       if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
          return  ('Please Enter a object')
       }                   

     return  isbestFriendCheck
}

const result = isBestFriend(person1 ,person2);
console.log(result);






