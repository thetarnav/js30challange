const links = document.querySelectorAll('a');

links.forEach((a => a.addEventListener('mouseenter', changeLink)));

let pill = document.createElement('span');
pill.classList.add('highlight');
document.body.appendChild(pill);

const getAbsolutePosition = (element, direction) =>
   typeof (direction) === 'string' ?
   element.getBoundingClientRect()[direction] :
   console.error('direction must be a string: top, left, right or bottom only');

function changeLink() {
   const h = this.offsetHeight,
         w = this.offsetWidth,
         x = getAbsolutePosition(this, 'left'),
         y = getAbsolutePosition(this, 'top') + window.scrollY;
   
   pill.style.setProperty('--top', y + 'px');
   pill.style.setProperty('--left', x + 'px');
   pill.style.setProperty('--width', w + 'px');
   pill.style.setProperty('--height', h + 'px');
}