const text = "NEGIE1";
let reversedText = text.split("").reverse();

reversedText.forEach((t, idx) => {
  if (isFinite(t)) {
    reversedText.splice(idx, 1);
    reversedText.push(t);
  }
});

reversedText = reversedText.join("");

console.log({
  originalText: text,
  reversedText: reversedText,
});
