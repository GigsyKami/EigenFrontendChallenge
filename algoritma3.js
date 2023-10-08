const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];
let queryMatch = [0, 0, 0];

input.forEach((inputText) => {
  query.forEach((queryText, index) => {
    queryMatch[index] = inputText == queryText ? queryMatch[index] + 1 : queryMatch[index];
  });
});

console.log({
  output: queryMatch,
});
