const insertionSort = (array, position, arraySteps, colorSteps) => {
	let colorKey = colorSteps[colorSteps.length - 1].slice();
  
	let i, j, key;
	for (i = 1; i < array.length; i++) {
	  key = array[i];
	  j = i - 1;
  
	  // While loop to shift elements greater than key to the right
	  while (j >= 0 && array[j] > key) {
		array[j + 1] = array[j];
  
		// Capture the current state of the array and colors for visualization
		arraySteps.push(array.slice());
  
		colorKey[i] = 3; // Set color of the current element being moved to its final position
		if (i === j + 1) {
		  colorKey[j + 1] = 4; // Set color of the current position where the element is moved
		} else {
		  colorKey[j + 1] = 1; // Set color of the next position where the element is moved
		}
		colorKey[j] = 1; // Set color of the compared element
		colorSteps.push(colorKey.slice());
  
		// Reset colors
		colorKey[j + 1] = 0;
		colorKey[i] = 0;
		colorKey[j] = 0;
  
		j = j - 1;
	  }
  
	  // Place the key in its correct position
	  array[j + 1] = key;
  
	  // Capture the current state of the array and colors for visualization
	  arraySteps.push(array.slice());
	  colorSteps.push(colorKey.slice());
	}
  
	// Set the color of the remaining bars to green, indicating they are in their final sorted positions
	colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
  };
  
  export default insertionSort;
  