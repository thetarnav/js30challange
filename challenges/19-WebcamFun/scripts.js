const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


navigator.mediaDevices.getUserMedia({ // promise that gets media from devices
      video: true,
      audio: false
   })
   .then(localMediaStream => {
      video.srcObject = localMediaStream; // video srcObject will be returned localMediaStream from promise
      video.play();
   })
   .catch(err => {
      console.error(`promise rejected: `, err);
   });

function paintToCanvas() {
   const width = video.videoWidth;
   const height = video.videoHeight;
   canvas.width = width;
   canvas.height = height;

   return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height); // painting canvas from video
   }, 16);
}

video.addEventListener('canplay', paintToCanvas); // paintToCanvas can only be called when video is playing (ready to play)