var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"d.porohov1@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"123.porohovyahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function validateEmail(arr) {
    let result = [];
    let regexp = /^[\w-\.]+@?(gmail.com|yahoo.com)$/;
    for (let value of arr) {
        if (value.email.indexOf("@") == -1) {
            console.warn("invalid email format: " + value.email);
        } else if (value.email.match(regexp)) {
            result.push(value.email);
        }
    }
    return result;

}

console.info("Valid emails: " + validateEmail(arr));