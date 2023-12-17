import { bubbleSort } from './script/bubbleSort.js';
import { selectionSort } from './script/selectionSort.js';
import { insertionSort } from './script/insertionSort.js';
import { mergeSort } from './script/mergeSort.js';
import { quickSort } from './script/quickSort.js';
import { countingSort } from './script/countingSort.js';
import { generateRandomArray } from './arrGen/arraysGenerator.js';


// Testes com diferentes tamanhos de conjunto de dados
const sizes = [100, 500, 1000, 5000, 30000, 80000, 100000, 150000, 200000];

sizes.forEach(size => {
  const randomArray = generateRandomArray(size);

  // Clone o array original para que os algoritmos não afetem o mesmo array
  const arrayCopy1 = [...randomArray];
  const arrayCopy2 = [...randomArray];
  const arrayCopy3 = [...randomArray];
  const arrayCopy4 = [...randomArray];
  const arrayCopy5 = [...randomArray];
  const arrayCopy6 = [...randomArray];

  console.time(`Bubble Sort - ${size}`);
  bubbleSort(arrayCopy1);
  console.timeEnd(`Bubble Sort - ${size}`);

  console.time(`Selection Sort - ${size}`);
  selectionSort(arrayCopy2);
  console.timeEnd(`Selection Sort - ${size}`);

  console.time(`Insertion Sort - ${size}`);
  insertionSort(arrayCopy3);
  console.timeEnd(`Insertion Sort - ${size}`);

  console.time(`Merge Sort - ${size}`);
  mergeSort(arrayCopy4);
  console.timeEnd(`Merge Sort - ${size}`);

  console.time(`Quick Sort - ${size}`);
  quickSort(arrayCopy5);
  console.timeEnd(`Quick Sort - ${size}`);

  console.time(`Counting Sort - ${size}`);
  countingSort(arrayCopy6);
  console.timeEnd(`Counting Sort - ${size}`);

  console.log('=========================================\n'); // Adicione espaçamento entre os conjuntos de dados
});
  