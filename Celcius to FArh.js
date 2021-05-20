function convertFahrToCelsius(fahrenheit){
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var n = fToCel.toFixed(4);
  
     if(!isNaN(fTemp)){
    var message = n;}

    else if(typeof fahrenheit == "string"){
       {
    var message = fTemp+' is not a valid number but a string.';}
}
else if(Array.isArray(fahrenheit)){
     var message = '['+fTemp+']'+' is not a valid number but an array.';
}
else if(typeof fahrenheit === "object"){
     var message = '{'+Object.keys(fTemp)+':'+Object.values(fTemp)+'}'+' is not a valid number but an oblect.';
}
console.log(message); 
}
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius("me");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});

