// a function that check a file is javascript file or not 
//if it is a javascript file return true and it is not a js file 
//it will return false

function isJavaScriptFile(fileName){
   
    const str2 = fileName.endsWith('.js');

    if(typeof fileName !== 'string'){
        return ('Please Enter the string')
    }
    return str2;
};



const getresult = isJavaScriptFile('index.html.js');
console.log(getresult);