function isNaN(value) {
    if(typeof(value) == 'number') {
        console.log(value + " - is Number");
        return true
    } else {
        console.log(value + " - is not a Number");
         return false 
    }
}

console.log(isNaN(3));

