window.addEventListener('scroll', (e) => {
   const wrapper = document.querySelector('.site-wrap');
   const borderPoint = header.offsetHeight + header.offsetTop;
   if (window.scrollY >= borderPoint) {
      wrapper.style.setProperty('--top', main.offsetHeight + 'px');
      main.classList.add('sticky');
   } else {
      wrapper.style.setProperty('--top', '0px');
      main.classList.remove('sticky');
   }
})