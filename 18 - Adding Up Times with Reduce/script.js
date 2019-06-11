var seconds = [...document.querySelectorAll('[data-time]')]
   .map(item => item.dataset.time)
   .map(item => {
      let [min, sec] = item.split(':').map(parseFloat);
      return min * 60 + sec;
   })
   .reduce((total, sec) => total + sec);


var hours = Math.floor(seconds / 3600);
seconds -= hours * 3600;
var minutes = Math.floor(seconds / 60);
seconds -= minutes * 60;

console.log(`seconds time duration: ${hours}:${minutes}:${seconds}`);