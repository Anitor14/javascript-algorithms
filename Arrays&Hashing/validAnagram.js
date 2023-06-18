const reorder = (words) => {
  words
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

const isAnagram = (s, t) => {
  const isLengthEquals = s.length === t.length;
  if (!isLengthEquals) return false;
  const isValidAnagram = reorder(s) === reorder(t);
  if (isValidAnagram) return true;
};

console.log(isAnagram("ramosr", "rramos"));
