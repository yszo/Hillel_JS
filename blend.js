function myBlend(arr) {
    for (let i = 0; i < arr.length; i++){
        let index = Math.floor(Math.random() * arr.length);
        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
 return console.info("Blended arr: " + arr)
}

let arr = [1,2,3,4,"test",NaN,8,0,10]
let arr2 = [1,2,3,4,5,6,7,8,9,10]

myBlend(arr);
myBlend(arr2);