function randomNumber(start, end) {
  let random = start + Math.random() * (end + 1 - start);
  return Math.floor(random);
}

function checkProbabilityTheory(count) {
  let even = 0;
  let odd = 0;
  let random = 0;
  for (let i = 0; i < count; i++) {
    random = randomNumber(100, 1000);
    console.log("Genered random number: " + random);
    if (random % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  console.log("Q-ty generated random numbers " + count + "\n" + 
  "Even: " + even + "\n" +
  "Odd: " + odd + "\n" +
  "Percentage of even to odd: " + Math.floor((even / count) * 100) + "%");
}

checkProbabilityTheory(20);
