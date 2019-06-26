const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

var loaded = false;
speechSynthesis.addEventListener('voiceschanged', () => {
   if (loaded) return

   voices = speechSynthesis.getVoices();

   voicesDropdown.innerHTML = voices.map((voice, index) =>
      `<option value="${index}">${voice.name}</option>`
   );

   msg.voice = voices[0];
   loaded = true;
});

voicesDropdown.addEventListener('input', changeVoice);

function changeVoice() {
   stop();
   msg.voice = voices[this.value];
}

const stop = () => speechSynthesis.speaking && speechSynthesis.cancel();

speakButton.addEventListener('click', () => {
   stop();
   speechSynthesis.speak(msg);
})
stopButton.addEventListener('click', stop);

options.forEach(el => el.addEventListener('input', ()=>{
   stop();
   msg.rate = document.querySelector('[name="rate"]').value;
   msg.pitch = document.querySelector('[name="pitch"]').value;
   msg.text = document.querySelector('[name="text"]').value;
}));