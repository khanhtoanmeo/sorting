function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function randomArray(num) {
  const arr = [];
  let fakeNum = num;
  while (fakeNum > 0) {
    fakeNum--;

    arr.push(Math.round(Math.random() * num));
  }
  return arr;
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
  static insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let cur = arr[i];
      let curJ = i;
      for (let j = i - 1; j >= 0 && arr[j] > cur; j--) {
        arr[j + 1] = arr[j];
        curJ = j;
      }
      arr[curJ] = cur;
    }
    return arr;
  }

  static mergeSort(arr) {
    if (arr.length === 1 || arr.length === 0) return arr;
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < Math.floor(arr.length / 2)) arr1.push(arr[i]);
      else arr2.push(arr[i]);
    }
    return merge(this.mergeSort(arr1), this.mergeSort(arr2));
  }
}

function merge(arr1, arr2) {
  let newArr = [];
  let currentIndex1 = 0,
    currentIndex2 = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    const currentElement1 = arr1[currentIndex1];
    const currentElement2 = arr2[currentIndex2];

    if (currentElement1 <= currentElement2 || currentIndex2 >= arr2.length) {
      newArr.push(currentElement1);
      currentIndex1++;
      continue;
    }
    if (currentElement1 > currentElement2 || currentIndex1 >= arr1.length) {
      newArr.push(currentElement2);
      currentIndex2++;
      continue;
    }
  }
  return newArr;
}

const arr = randomArray(100);
console.log(Sort.mergeSort(arr));
