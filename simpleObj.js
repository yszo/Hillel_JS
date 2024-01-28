let cat = {
    name: "Chip",
    color: "Red",
    nature: "Naughty",
    nutrition: "5 times per day",
    weight: "5 kg",
    age: "11 month",
    getInfo: function() {
        for (property in this) {
            if (typeof cat[property] == 'function') {
                continue;
            } else {
                console.info(property + " : " + this[property])
            }
        }
    }
}

cat.getInfo();
cat.loveToPlay = true;
cat.age = 12;
cat.getInfo();