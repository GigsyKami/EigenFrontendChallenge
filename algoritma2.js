const sentence = "Saya sangat senang mengerjakan soal algoritma";
let longestWord = "";

sentence.split(" ").forEach((word) => {
  longestWord = longestWord.length < word.length ? word : longestWord;
});

console.log({
  originalSentence: sentence,
  longestSentence: longestWord,
});
