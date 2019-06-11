_midValues = [];
changeScreen();
const text = document.querySelector('h1');

window.addEventListener('mousemove', paintShadow);
window.addEventListener('resize', changeScreen);


function changeScreen() {
   _midValues = [window.innerWidth / 2, window.innerHeight / 2]
}


function paintShadow(e) {
   var distance = {
      x: (e.pageX - _midValues[0]),
      y: (e.pageY - _midValues[1])
   }
   text.style.setProperty('--shadowX', distance.x / 20 + 'px');
   text.style.setProperty('--shadowY', distance.y / 20 + 'px');

   var blur = Math.abs(distance.x) + Math.abs(distance.y);
   text.style.setProperty('--blur', blur / 400 + 'px');
}