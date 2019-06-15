const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('js30plates')) || [];

addItems.addEventListener('submit', addItem);

populateElement(items, itemsList);


function addItem(e) {
   e.preventDefault(); //powoduje że formularz nie odświerza strony

   var name = this.querySelector('[name=item]').value;
   var item = {
      name,
      done: false
   };

   items.push(item);
   populateElement(items, itemsList);
   localStorage.setItem('js30plates', JSON.stringify(items));
   this.reset(); // metoda resetująsa Formularz
}


function populateElement(plates = [], element) {
   element.innerHTML = plates.map((item, i) => `<li>
      <input type="checkbox" data-index="${i}" id="item${i}" ${item.done ? 'checked' : ''}/>
      <label for="item${i}">${item.name}</label>
   </li>`).join('');
}


itemsList.addEventListener('click', toggleDone);


function toggleDone(e) {
   if (!e.target.matches('input[type="checkbox"]')) return;
   var id = e.target.dataset.index;
   items[id].done = !items[id].done;
   localStorage.setItem('js30plates', JSON.stringify(items));
}

delete_btn.addEventListener('click', deleteAll);

function deleteAll() {
   itemsList.innerHTML = '';
   localStorage.removeItem('js30plates');
   items = [];
}


check_all.addEventListener('click', checkAll);

function checkAll() {
   items.forEach(plate => plate.done = true);
   localStorage.setItem('js30plates', JSON.stringify(items));
   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach(el => el.setAttribute('checked', true));
}


uncheck_all.addEventListener('click', uncheckAll);

function uncheckAll() {
   items.forEach(plate => plate.done = false);
   localStorage.setItem('js30plates', JSON.stringify(items));
   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach(el => el.removeAttribute('checked'));
}