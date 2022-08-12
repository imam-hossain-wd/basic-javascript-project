/* a function that check a file is javascript file or not 
if it is a js file it will return true and it is not a js file 
it will return false */

function isJavaScriptFile(fileName){
   
    const str2 = fileName.endsWith('.js');

    if(typeof fileName !== 'string'){
        return ('Please a js file into string')
    }
    return str2;
};



const getresult = isJavaScriptFile('hello.js');
console.log(getresult);



// check isJavaScriptFile end

