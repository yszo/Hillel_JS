function pad(string,addedSymbol,count,place){
    let resultString = string;
    for(let i = 1; i <= count; i++) {
        if(place) {
            resultString = addedSymbol + resultString;
        } else {
            resultString = resultString + addedSymbol;
        }
    }
    return resultString;
  
}
console.log(pad('ampersands', '&', 7, false));
console.log(pad('stars', '*', 10, true));
