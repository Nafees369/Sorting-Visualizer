import { swap } from './helpers';

const selectionSort = (array, position, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  for (let i = 0; i < array.length - 1; i++) {
    let min_index = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }

      // Set colors for visualization of comparison
      colorKey[min_index] = 1;
      colorKey[j] = 1;

      // Capture the current state of the array and colors for visualization
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());

      // Reset colors for the next iteration
      colorKey[min_index] = 0;
      colorKey[j] = 0;
    }

    // Swap the found minimum element with the first element of the unsorted part
    swap(array, min_index, i);

    // Set color for visualization of the element in its final sorted position
    colorKey[i] = 2;

    // Capture the current state of the array and colors for visualization
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());
  }

  // Set the color of the remaining bars to green, indicating they are in their final sorted positions
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
  console.log(array);
};

export default selectionSort;