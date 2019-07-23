const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const highscoreBoard = document.querySelector('.highscore');
const moles = document.querySelectorAll('.mole');
const button = document.getElementById('button');

const randomHole = () => Math.floor(Math.random() * 6);
const randomTime = () => Math.floor(Math.random() * 900) + 500;

let score = 0;
let gametime = false;
let locked = [];

let highscore = parseInt(localStorage.getItem('JS30highscore')) || 0;
highscoreBoard.textContent = highscore;

button.addEventListener('click', () => gametime ? finishGame() : startGame());

function startGame() {
   if (gametime) return;
   score = 0;
   scoreBoard.textContent = score;
   gametime = true;
   button.textContent = 'Stop';

   spawnMole();
   function spawnMole() {
      let hole;
      do hole = randomHole()
      while (locked.some(n=>n==hole));

      locked.push(hole);      

      holes[hole].classList.remove('clicked');
      holes[hole].classList.add('up');

      moles[hole].addEventListener('click', moleClick, {
         once: true
      })

      setTimeout(() => {
         holes[hole].classList.remove('up');
         if (!holes[hole].classList.contains('clicked')) {
            setTimeout(() => !holes[hole].classList.contains('clicked') && finishGame(), 500);
         }
      }, randomTime());

      setTimeout(()=> gametime && spawnMole(), randomTime() / 2);
   }
}

function moleClick() {
   setTimeout(() => locked = locked.filter(n => n != [...moles].indexOf(this)), 1400);
   score++;
   scoreBoard.textContent = score;
   this.parentElement.classList.remove('up');
   this.parentElement.classList.add('clicked');
}

function finishGame() {
   if (!gametime) return;
   gametime = false;
   locked = [];
   holes.forEach(hole => hole.classList.remove('up'));
   moles.forEach(mole => mole.removeEventListener('click', moleClick));
   button.textContent = 'Try Again!';
   if(score > highscore) {
      highscore = score;
      highscoreBoard.textContent = highscore;
      localStorage.setItem('JS30highscore', highscore.toString())
   };
}