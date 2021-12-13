function merge_array(array1, array2) {
  let result_array = [];
  let arr = array1.concat(array2);
  let len = arr.length;
  let assoc = {};

  while (len--) {
    let item = arr[len];

    if (!assoc[item]) {
      result_array.unshift(item);
      assoc[item] = true;
    }
  }

  return result_array;
}

let array1 = [1, 2, 3];

let array2 = [2, 30, 1];

console.log(merge_array(array1, array2));
