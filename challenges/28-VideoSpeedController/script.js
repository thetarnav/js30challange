const video = document.querySelector('video'),
      speed = document.querySelector('.speed'),
      speedbar = document.querySelector('.speed-bar'),
      minSpeed = .5,
      maxSpeed = 4;

let isDown = false;

speed.addEventListener('mousedown', e=>{
   isDown = true;
   changeSpeed(e);
});
speed.addEventListener('mousemove', changeSpeed);
['mouseleave','mouseup'].forEach(ev => speed.addEventListener(ev, ()=>isDown = false));

function changeSpeed(e) {
   if(!isDown) return;
   let max = speed.offsetHeight,
      input = clamp(e.offsetY, 0, max),
      percent = input / max,
      newSpeed = minSpeed + percent * (maxSpeed - minSpeed);
   
   newSpeed = Math.round(newSpeed * 10) / 10;
   newSpeed = clamp(newSpeed, minSpeed, maxSpeed);
   
   video.playbackRate = newSpeed;
   speedbar.style.height = percent*100+'%';
   speedbar.textContent = newSpeed+'x';
}

const clamp = (value, min, max) => Math.max(Math.min(value, max), min);