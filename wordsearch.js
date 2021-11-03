const transpose = function (matrix) {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newArr = [];
    for (const cols in matrix) {
      newArr.push(matrix[cols][i]);
    }
    newArray.push(newArr);
  }
  return newArray;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let newfun = transpose(letters);
  const verticalJoin = newfun.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    for (let j of verticalJoin) {
      if (l.includes(word)) {
        return true;
      } else if (j.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "SEINFELD"
);

module.exports = wordSearch;
