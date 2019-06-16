function deleteSpaces(word) {
   "function takes 1 string argument and returns a string without spaces"
   if (!word instanceof String) {
      console.error('argument must be a string');
      return;
   };
   return word.split(' ').join('');
}


const challanges = [
   '01-JavaScript Drum Kit',
   '02-JS and CSS Clock',
   '03-CSS Variables',
   '04-Array Cardio Day 1',
   '05-Flex Panel Gallery',
   '06-Type Ahead',
   '08-Fun with HTML5 Canvas',
   '10-Hold Shift and Check Checkboxes',
   '11-Custom Video Player',
   '12-Key Sequence Detection',
   '13-Slide in on Scroll',
   '15-Local Storage',
   '16-Mouse Move Shadow',
   '17-Sort Without Articles',
   '18-Adding Up Times with Reduce',
]

export {
   deleteSpaces,
   challanges
};