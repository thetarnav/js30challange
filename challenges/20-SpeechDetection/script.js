window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const voiceReco = new SpeechRecognition();
voiceReco.interimResults = true;
voiceReco.lang = 'pl';

const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

voiceReco.addEventListener('result', e => {
   const results = [...e.results]
      .map(result => result[0].transcript)
      .join('');
   p.textContent = results;
   if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
   }
});

voiceReco.start();

voiceReco.addEventListener('end', voiceReco.start);