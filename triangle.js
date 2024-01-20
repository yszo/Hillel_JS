//option 1
function drawTriangle(height, drawSymbol) {
    let currentSymbol = "";
    for (let i = 1; i <= height; i++){
        for (let k = 1; k<= i; k++) {
            currentSymbol = currentSymbol + drawSymbol;
        }
        currentSymbol = currentSymbol + "\n";
    }
    return console.log(currentSymbol);
}

drawTriangle(5, "@");


//option 2

function drawTriangle2(height, drawSymbol) {
    let currentSymbol = "";
    while (height >= 0) {
        currentSymbol = currentSymbol + drawSymbol
        height--;
       console.log(currentSymbol + "\n");
    }
}

drawTriangle2(6, "+");
