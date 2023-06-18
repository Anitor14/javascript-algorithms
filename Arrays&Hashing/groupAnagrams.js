const reorder = (string) => {
  return string
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

var groupAnagrams = (strings) => {
  const outputArray = [];
  for (let index = 0; index < strings.length; index++) {
    const currentString = strings[index];
    let isIncludes = false;
    for (let array of outputArray) {
      isIncludes = array.includes(currentString);
      if (isIncludes) break;
    }
    if (!isIncludes) {
      outputArray.push([currentString]);
      const arrayIndex = outputArray.length === 0 ? 0 : outputArray.length - 1;
      for (let next = index + 1; next < strings.length; next++) {
        let nextString = strings[next];
        let isAnagram = reorder(currentString) === reorder(nextString);
        if (isAnagram) outputArray[arrayIndex].push(nextString);
      }
    }
  }
  return outputArray;
};

console.log(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "fish", "sifh"])
);
