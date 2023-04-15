const arr = [4, 6, 1, 8, 2, 10, 26, 4, 100, 65, 88];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class Sort {
  static bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let noswaps = true;
      let t = 0;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noswaps = false;
        }
        t += 1;
      }
      if (noswaps) break;
    }
    return arr;
  }

  static selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          swap(arr, i, j);
        }
      }
    }
    return arr;
  }
}

console.log(Sort.selectionSort(arr));
console.log(Sort.bubbleSort(arr));
