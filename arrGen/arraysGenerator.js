export function generateRandomArray(size) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray[i] = Math.floor(Math.random() * (size + 1));
    }
    return randomArray;
}