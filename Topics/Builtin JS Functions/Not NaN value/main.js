let data = [11, null, NaN, 'Hello', 24];
let count = 0
for (let item of data) {
  if (!isNaN(item)) {
    count ++
  }
}
console.log(count)
