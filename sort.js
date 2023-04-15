const arr = [4, 6, 1, 8, 2, 10, 26, 4, 100, 65, 88];

class Sort {
  static bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let noswaps = true;
      let t = 0;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noswaps = false;
        }
        t += 1;
      }
      if (noswaps) break;
    }
    return arr;
  }
}

console.log(Sort.bubbleSort(arr));
