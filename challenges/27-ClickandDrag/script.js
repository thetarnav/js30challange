const container = document.querySelector('.items'),
      maxScroll = container.scrollWidth;


container.addEventListener('mousedown', e_down => {
   const start = container.scrollLeft;
   let mouseDown = true;
   container.classList.add('active');

   container.addEventListener('mousemove', scroll);

   ['mouseleave','mouseup'].forEach(ev => container.addEventListener(ev, e => {
      if(!mouseDown) return;
      scroll(e);
      mouseDown = false;
      container.removeEventListener('mousemove', scroll);
      container.classList.remove('active');
   },{once:true}));

   function scroll(e) {
      e.preventDefault();
      const movement = e_down.x - e.x,
         newX = clamp(start + movement, 0, maxScroll);

      container.scrollLeft = newX;
   }
});


const clamp = (value, min, max) => Math.min(Math.max(value, min), max);