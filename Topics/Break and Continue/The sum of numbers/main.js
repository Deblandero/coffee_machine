function sum(numbers) {
  let res = 0;
  for (let index = 0; index <= numbers.length; index++) {
    res = res + numbers[index];
    if (numbers[index] === 0) {
      break;
    }
  }
  return res;
}
