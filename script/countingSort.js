export function countingSort(arr) {
  let max = arr[0];

  // Encontrar o valor máximo
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  
  const countArray = new Array(max + 1).fill(0);

  for (let num of arr) {
      countArray[num]++;
  }

  let sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
      while (countArray[i] > 0) {
          sortedArray.push(i);
          countArray[i]--;
      }
  }

  return sortedArray;
}
