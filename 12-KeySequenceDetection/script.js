window.addEventListener('keydown', keyPress);
window.addEventListener('keyup', keyUp);

var keysPressed = [];
var timeout;


function keyPress(e) {
   if (keysPressed.slice(-1)[0] === e.key) return;
   keysPressed.push(e.key);
   console.log(keysPressed);
   
   checkKeysPressed();
   clearTimeout(timeout);
   timeout = setTimeout(clearShortcut, 3000);
}


function keyUp(e) {
   keysPressed = keysPressed.filter(item => item !== e.key);
}


const clearShortcut = () => keysPressed = [];


function checkKeysPressed() {
   if (keysPressed.join('') === 'nier') {
      console.log('SUPER GRA MORDO');
      clearShortcut();
   }
}