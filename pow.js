function pow(a,b){
    let number = a;
    for (let i = 1; i < b; i++){
        number = number * a;
    }
    return number;
}

console.log(pow(5,2));