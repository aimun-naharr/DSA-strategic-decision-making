function insertionSort(arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i <= arr.length - 1; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = curr;
  }
  console.log(arr)
}

let arr = [12, 11, 13, 5, 6];
insertionSort(arr);
// console.log(arr)
