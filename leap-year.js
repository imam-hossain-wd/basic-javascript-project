// a program to check leap year


function leapYear(year){

    if((year % 400 == 0 && year % 100 !=0) || (year % 4 == 0)) {
        console.log( year  + ' leap year');
    }
    else{
        console.log(year + ' not a leap year');
    }

   };

   const year =2017;

// add another new year input value   
   let newYear = year;
   newYear = 2016

   leapYear(year);
   leapYear(newYear);

