const checkboxes = [...document.querySelectorAll('input[type=checkbox]')]

var shiftPressed = false;
var timeout;
var lastIndex;

window.addEventListener('keydown', (e) => {
   if (e.key === 'Shift') shiftPressed = true;
   else shiftPressed = false;
   clearTimeout(timeout);
   timeout = setTimeout(() => shiftPressed = false, 1000);
});
window.addEventListener('keyup', () => shiftPressed = false);

checkboxes.forEach((checkbox, index) => checkbox.addEventListener('input', () => {
   if (shiftPressed && lastIndex !== undefined) {
      let direction = index < lastIndex? 1 : -1;
      for (let i = index; i !== lastIndex; i+= direction) {
         checkboxes[i].checked = checkbox.checked;
      }
      checkboxes[lastIndex].checked = checkbox.checked;
   }
   lastIndex = index;
}));