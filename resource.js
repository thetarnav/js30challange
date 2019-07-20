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
   '19-Webcam Fun',
   '20-Speech Detection',
   '22-Follow Along Link Highlighter',
   '23-Speech Synthesis',
   '24-Sticky Nav',
   '25-Event Capture, Propagation, Bubbling and Once',
   '26-Stripe Follow Along Nav',
   '27-Click and Drag',
   '28-Video Speed Controller',
]

export {
   deleteSpaces,
   challanges
};