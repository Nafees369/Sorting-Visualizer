import { insertStep } from './helpers';

// Function to perform Merge Sort
const mergeSort = (array, position, arraySteps, colorSteps) => {
  // Base case: if the array has only one element, it is already sorted
  if (array.length === 1) return array;

  // Find the middle index
  let mid = Math.floor(array.length / 2);

  // Recursively sort the left and right halves of the array
  let L = mergeSort(array.slice(0, mid), position, arraySteps, colorSteps);
  let R = mergeSort(array.slice(mid), position + mid, arraySteps, colorSteps);

  // Merge the sorted left and right halves
  let arrayNew = merge(L, R, position, arraySteps, colorSteps);

  // Update array and color steps to reflect the changes made in this step
  arraySteps.push(arraySteps[arraySteps.length - 1].slice());
  colorSteps.push(
    colorSteps[colorSteps.length - 1]
      .slice()
      .fill(arrayNew.length === arraySteps[0].length ? 2 : 0)
  );

  return arrayNew;
};

// Function to merge two sorted arrays
const merge = (L, R, position, arraySteps, colorSteps) => {
  let arrayNew = [];
  let A = 0;
  let B = 0;

  // Merge elements from L and R into arrayNew in sorted order
  while (L.length > 0 && R.length > 0) {
    if (L[A] < R[B]) {
      arrayNew.push(L.shift());
      // Insert a step to capture the current state of the merged array
      insertStep(arrayNew, position, arraySteps);
    } else {
      arrayNew.push(R.shift());
      // Insert a step to capture the current state of the merged array
      insertStep(arrayNew, position, arraySteps);
    }

    // Update the colors to visualize the comparison
    updateColor(position, colorSteps, arrayNew.length - 1, [], []);
  }

  // If there are remaining elements in L or R, append them to arrayNew
  if (L.length !== 0 || R.length !== 0) {
    // Update colors to visualize the remaining elements being added
    updateColor(position, colorSteps, arrayNew.length, L, R);
    arrayNew = arrayNew.concat(L);
    arrayNew = arrayNew.concat(R);

    // Insert a step to capture the final merged array
    insertStep(arrayNew, position, arraySteps);
  }

  return arrayNew;
};

// Function to update colors for visualization
const updateColor = (position, colorSteps, start, L, R) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();
  let end = position + start + L.length + R.length;
  start = start + position;

  // Set colors to visualize the comparison or the addition of remaining elements
  if (end === start) {
    colorKey.fill(1, start, end + 1);
  } else {
    colorKey.fill(0, start, end);
  }

  // Add the updated color key to the color steps
  colorSteps.push(colorKey);
};

export default mergeSort;