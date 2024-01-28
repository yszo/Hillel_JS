let services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
  price() {
    let sum = 0;
    for (property in this) {
      if (typeof services[property] == "function") {
        continue;
      } else {
        sum += parseInt(services[property]);
      }
    }
    return console.log("Сума послуг : " + sum);
  },
  maxPrice() {
    let maxPrice = 0;
    for (property in this) {
      if (typeof services[property] == "function") {
        continue;
      } else if (maxPrice < parseInt(services[property])) {
        maxPrice = parseInt(services[property]);
      } else {
        continue;
      }
    }
    return console.log("Максимальна сума послуги : " + maxPrice);
  },
  minPrice() {
    let minPrice = parseInt(Object.values(services)[0]);
    for (property in this) {
      if (typeof services[property] == "function") {
        continue;
      } else if (minPrice > parseInt(services[property])) {
        minPrice = parseInt(services[property]);
      } else {
        continue;
      }
    }
    return console.log("Мінімальна сума послуги : " + minPrice);
  },
};
services.price();
services.maxPrice();
services["Розбити скло"] = "200 грн";
services.price();
services.maxPrice();
services.minPrice();
