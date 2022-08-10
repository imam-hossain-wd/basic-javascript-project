function isJavaScriptFile(fileName){
   
    const str2 = fileName.endsWith('.js');
    return str2;
};



const getresult = isJavaScriptFile('image.jpg.js')
console.log(getresult);