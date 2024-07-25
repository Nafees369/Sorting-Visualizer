// Import the swap function from the 'helpers' module
import { swap } from './helpers';

// Bubble Sort algorithm implementation for visualizing sorting in React

const bubbleSort = (array, position, arraySteps, colorSteps) => {
  // Create a copy of the colorKey array from the previous step
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  // Outer loop for iterating through the entire array
  for (let i = 0; i < array.length - 1; i++) {
    // Inner loop for iterating through the unsorted portion of the array
    for (let j = 0; j < array.length - i - 1; j++) {
      // Compare adjacent elements and swap if necessary
      if (array[j] > array[j + 1]) {
        array = swap(array, j, j + 1);
      }

      // Capture the current state of the array for visualization
      arraySteps.push(array.slice());

      // Highlight the compared elements in the colorKey array
      colorKey[j] = 1;
      colorKey[j + 1] = 1;
      
      // Capture the color-coded state for visualization
      colorSteps.push(colorKey.slice());

      // Reset the colorKey for the compared elements after visualization
      colorKey[j] = 0;
      colorKey[j + 1] = 0;
    }

    // Mark the last element (now in its correct position) with a different color
    colorKey[array.length - 1 - i] = 2;

    // Capture the state of the array and color for visualization after each pass
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());
  }

  // Set the color of the remaining bars to green (indicating their final positions)
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);

  // No need to return anything explicitly (undefined is returned by default)
  return;
}

// Export the bubbleSort function as the default export of the module
export default bubbleSort;