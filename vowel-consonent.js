// find vowel or consonent by if else if

let input = 'w';
let letter = input.toLowerCase()


if(letter == 'a' || letter == 'e' || letter == "i" || letter == 'o' 
        || letter   == 'u' ){
        console.log('vowel');
}
else {
    console.log('consonent');
}



// find vowel consonent by switch case


let input = 'x';
let letter = input.toLowerCase();

switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('vowel');
        break;

        default:
        console.log('consonent');

}


