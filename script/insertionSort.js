export function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      let currentElement = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentElement;
    }
    return arr;
}