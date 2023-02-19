function checkEvenOrOdd(numbers) {
  for (let num of numbers) {
    if (num % 2 === 0) {
      if (num === 0) {
        break;
      }
      console.log("even");
    } else {
      console.log("odd");
    }
  }
}
