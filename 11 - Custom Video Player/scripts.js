const pauseButton = document.querySelector('button.player__button.toggle');
const progress = document.querySelector('.progress__filled');
const skip = document.querySelectorAll('.skip');
const volume = document.getElementsByName('volume')[0];
const playbackRate = document.getElementsByName('playbackRate')[0];

[pauseButton, video].forEach(el => el.addEventListener('click', togglePlay));
video.addEventListener('loadedmetadata', load);


function load() {
   video.playbackRate = 1;
   // togglePlay();
   progressCheck();
   console.log({video});
}


function togglePlay() {
   var icon;
   if (video.paused) {
      icon = '❚ ❚';
      video.play();
      progressCheck();
   } else {
      icon = '►';
      video.pause();
   }
   pauseButton.innerHTML = icon;
}


function progressCheck() {
   var percent = (video.currentTime / video.duration) * 100;
   progress.style.flexBasis = percent + '%';
   if (!video.paused) setTimeout(progressCheck, 10);
}


let mousedown = false;
progress.parentElement.addEventListener('click', scrub);
progress.parentElement.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.parentElement.addEventListener('mousedown', () => mousedown = true);
progress.parentElement.addEventListener('mouseup', () => mousedown = false);


function scrub(e) {
   var goal = e.offsetX / video.offsetWidth * video.duration;
   video.currentTime = goal;
   progressCheck();
}


const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

volume.addEventListener('input', () => video.volume = clamp(volume.value, 0, 1));

playbackRate.addEventListener('input', () => video.playbackRate = clamp(playbackRate.value, 0.5, 2));

skip.forEach(button => button.addEventListener('click', () => video.currentTime = clamp(parseInt(button.dataset.skip) + video.currentTime, 0, video.duration)));