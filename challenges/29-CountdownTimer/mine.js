const buttons = document.querySelectorAll('button'),
      custom = document.querySelector('input'),
   leftDisplay = document.querySelector('.display__time-left'),
   endDisplay = document.querySelector('.display__end-time');

let interval = setInterval(() => {});

buttons.forEach(btn=>btn.addEventListener('click', ()=>startTimer(btn.dataset.time)))

custom.addEventListener('input', () => startTimer(custom.value))

function startTimer(sec) {
   sec = parseInt(sec) || 0;
   
   const startTime = new Date(Date.now()),
      start = startTime.getHours() * 3600 + 
         startTime.getMinutes() * 60 + 
         startTime.getSeconds(),
      end = start + parseInt(sec);
      
   let left = end - start;

   leftDisplay.textContent = getLeftTime(left, true);
   endDisplay.textContent = 'Ends at ' + getLeftTime(end, left<60);

   clearInterval(interval);
   interval = setInterval(() => left > 0 ? updateLeft() : clearInterval(interval), 1000);

   function updateLeft() {
      left--;
      leftDisplay.textContent = getLeftTime(left, true);
   }

   function getLeftTime(sec, hmsFormat=false) {
      let h = Math.floor(sec / 3600);
      sec -= h * 3600;
      let m = Math.floor(sec / 60);
      sec -= m * 60;
      m = m.toString();
      if(m.length < 2) m = '0' + m;
      sec = sec.toString();
      if (sec.length < 2) sec = '0' + sec;
      return hmsFormat ? h +':'+ m + ':' + sec : h+':'+m;
   }
}