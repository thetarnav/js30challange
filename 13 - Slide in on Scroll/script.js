function debounce(func, wait = 20, immediate = true) {
   var timeout;
   return function () {
      var context = this,
         args = arguments;
      var later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}


window.addEventListener('scroll', debounce(slideInImages, 16));


function slideInImages() {
   var images = document.querySelectorAll('img.slide-in:not(.active)');
   var scrollValue = window.scrollY + window.innerHeight;

   images.forEach(img => {
      if (scrollValue > img.offsetTop) {
         img.classList.add('active');
      }
   })
}