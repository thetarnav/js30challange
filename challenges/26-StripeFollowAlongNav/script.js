const flyingBG = document.querySelector('.dropdownBackground');
const navTitles = document.querySelectorAll('.nav_title');
const dropdowns = document.querySelectorAll('.dropdown');
const topEl = document.querySelector('.top');

(function(){
   const firstDim = navTitles[0].getBoundingClientRect(),
         top = firstDim.top,
         left = firstDim.left;
   flyingBG.style.setProperty('--left', left + 'px');
   flyingBG.style.setProperty('--top', top + 'px');
})();

navTitles.forEach((el, index) => el.addEventListener('mouseenter', ()=>{
   const dropdown = dropdowns[index];
   dropdown.classList.add('trigger-enter');
   flyingBG.classList.add('open');
   const dimensions = dropdown.getBoundingClientRect();
   const topDimensions = topEl.getBoundingClientRect();
   
   flyingBG.style.setProperty('--height', dimensions.height + 'px');
   flyingBG.style.setProperty('--width', dimensions.width + 'px');
   flyingBG.style.setProperty('--left', (dimensions.left - topDimensions.left) + 'px');
   flyingBG.style.setProperty('--top', (dimensions.top - topDimensions.top)+'px');
   
   flyingBG.addEventListener('transitionend', () => {
      dropdown.classList.add('trigger-enter-active');
   }, {once: true})

   el.addEventListener('mouseleave', () => {
      dropdown.classList.remove('trigger-enter-active');
      dropdown.classList.remove('trigger-enter');
      flyingBG.classList.remove('open');
   }, { once: true })
}));