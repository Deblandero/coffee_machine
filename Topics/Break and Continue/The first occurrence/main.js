function find5(numbers) {
  let res = -1;
  for (let index = 0; index <= numbers.length; index++) {
    if (numbers[index] === 5) {
      res = index;
      break;
    }
  }
  return res;
}
