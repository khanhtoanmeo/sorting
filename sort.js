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

  static quickSort(arr) {
    return pivot(arr);
  }

  static radixSort(arr) {
    const maxDigit = digitCount(Math.max(...arr));
    for (let i = 0; i < maxDigit; i++) {
      // let buckets = [[], [], [], [], [], [], [], [], [], []];
      const buckets = Array.from({ length: 10 }, () => []);
      for (let j = 0; j < arr.length; j++) {
        const curNum = arr[j];
        const digit = getDigitAt(curNum, i);
        buckets[digit].push(curNum);
      }
      arr = buckets.reduce((pre, cur) => pre.concat(cur), []);
    }
    return arr;
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

function pivot(array) {
  if (array.length === 0 || array.length === 1) return array;
  const pivotElement = array[0];
  let lessThanCount = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivotElement) {
      lessThanCount += 1;
      swap(array, i, lessThanCount);
    }
  }
  swap(array, lessThanCount, 0);

  if (lessThanCount > 0) {
    return pivot(array.slice(0, lessThanCount))
      .concat([array[lessThanCount]])
      .concat(pivot(array.slice(lessThanCount + 1)));
  }

  return pivot(array.slice(0, 1)).concat(pivot(array.slice(lessThanCount + 1)));
}

function digitCount(num) {
  return `${num}`.length;
}

function getDigitAt(num, index) {
  const numStr = num.toString();
  return +numStr[numStr.length - 1 - index] || 0;
}

const arr = new randomArray(100000);

console.log(Sort.radixSort(arr));
