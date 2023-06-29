let array = [10, 5, 2, 4, 20, 15, 8, 13, 11];

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

let answer = quickSort(array);
console.log(answer);

// first select the pivot element consider first (i.e. 0th index ) element
//then push the elemnts that are smaller than pivot to left and greater to the right
//repeat this function until we get sorted array
//using spread operator get the sorted elements