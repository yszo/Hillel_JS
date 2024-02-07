function tryRegex(input) {
    let regex = /[^Aa]{6,}$/;
    return regex.test(input);
}

useRegex("12345a"); //false
useRegex("hj56d"); //false
useRegex("1!)Ggt"); //true
useRegex("Lorem Ipsum"); //true
