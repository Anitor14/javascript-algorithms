const encode = (strs) => {
  return strs
    .map((str) => {
      return `${str.length}#${str}`;
    })
    .join("");
};

const delimitWords = (str, index) => {
  const delimiter = str.indexOf("#", index);
  const length = Number(str.slice(index, delimiter));
  const [start, end] = [delimiter + 1, delimiter + length + 1];
  const word = str.slice(start, end);
  return {
    nextIndex: end,
    word,
  };
};

const decode = (str, index = 0, decodedWords = []) => {
  while (index < str.length) {
    const { nextIndex, word } = delimitWords(str, index);
    decodedWords.push(word);
    index = nextIndex;
  }
  return decodedWords;
};

const words = ["rat", "cat", "pat", "swap", "rain"];

const encodedWords = encode(words);

console.log(encodedWords);

console.log(decode(encodedWords));
