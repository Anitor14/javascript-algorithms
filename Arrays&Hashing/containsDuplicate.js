// var containsDuplicate = (nums) => {
//   for (let right = 0; right < nums.length; right++) {
//     for (let left = 0; left < right; left++) {
//       const isDuplicate = nums[left] === nums[right];
//       if (isDuplicate) return true;
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, , 4]));

// const checkDuplicate = (numbs) => {
//   for (let current = 0; current < numbs.length - 1; current++) {
//     let next = current + 1;
//     let isDuplicate = numbs[current] === numbs[next];
//     if (isDuplicate) return true;
//   }
//   return false;
// };

// const containsDuplicate = (numbs) => {
//   // sort the array numerically
//   numbs.sort((a, b) => a - b);
//   console.log(numbs);
//   return checkDuplicate(numbs);
// };

// console.log(containsDuplicate([1, 3, 3, 6, 4, 8]));

// const containsDuplicate = (numbs) => {
//   const set = new Set(numbs);
//   const isDuplicate = numbs.length === set.size;

//   return !isDuplicate;
// };

const containsDuplicate = (numbs, set = new Set()) => {
  for (let numb of numbs) {
    if (set.has(numb)) return true;
    set.add(numb);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 6, 42, 3, 43]));
