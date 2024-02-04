const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};

function findValueByKey(companyName) {
  function print(item) {
    for (property in item) {
      if (Array.isArray(item[property])) {
        for (partner of item[property]) {
           print(partner);
        }
      } else {
        console.info(property + " : " + item[property]);
      }
    }
  }
  function searchInsideObject(arr) {
    for (const item of arr) {
      if (item.name === companyName) {
        print(item);
      } else {
        if (item.partners) {
          searchInsideObject(item.partners);
        }
      }
    }
  }

  searchInsideObject(company.clients);
}

findValueByKey("Клієнт 1.2");

