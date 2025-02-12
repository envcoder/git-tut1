// merge two array

let arr = [3, 1, 7, 9, 2];
let arr1 = [1, 2, 3, 4, 5];
function mergeArr(arr, arr2) {
  let merge = [];
  for (let num of arr) merge.push(num);
  for (let num of arr1) merge.push(num);
  return merge;
}

console.log(mergeArr(arr));
