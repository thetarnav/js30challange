import {
   deleteSpaces,
   challanges
} from './resource.js';


// Building the content of the page and navigation
challanges.forEach(item => {
   const [number, name] = item.split('-');
   let listItem = `
   <li id="${number}">
      <p>${number}</p>
      <a href="challenges/${deleteSpaces(item)}/mine.html">
         <header>${name}</header>
         <img src="img/${number}.png" alt=" ">
      </a>
   </li>
   `;
   content_html.innerHTML += listItem;

   listItem = `
   <a href="#${number}">
      <p class='number'>${number}</p>
      <p class='name'>${name}</p>
   </a>
   `;
   timeline_html.innerHTML += listItem;
});


window.addEventListener('scroll', _.debounce(handleScroll, 25));
window.addEventListener('resize', _.debounce(handleScroll, 25));

function handleScroll() {
`this function shows the representation of scroll progress on the nav`
   const contentItems = [...content_html.children];
   const windowY = window.innerHeight;
   const scroll = window.scrollY;

   const currentItem = contentItems.reduce((onScrollItem, item) => scroll + item.offsetHeight/2 >= item.offsetTop ? item : onScrollItem);

   [...timeline_html.children].forEach((item, index) => currentItem === contentItems[index] ? item.classList.add('highlight') : item.classList.remove('highlight'));

   const navItem = document.querySelector('#timeline_html .highlight');

   timeline_html.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': navItem.offsetTop - windowY/2 + navItem.offsetHeight/2
   });
}
handleScroll();


// makes the smooth scroll effect then using the nav
timeline_html.addEventListener('click', (e) => {
   e.preventDefault();
   const target = e.path.find(el => "matches" in el ? el.matches('a') : false);
   if (target === undefined) return;

   const index = [...timeline_html.children].indexOf(target);
   window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': content_html.children[index].offsetTop
   });
})