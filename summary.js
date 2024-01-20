let sum = 0;
for (let i = 1; i <= 100; i++) {
    if ((i % 3) == 0) {
        sum = sum + i;
        console.log("current number " + i);
        i++;
    }
}
 console.log("Summary = " + sum);