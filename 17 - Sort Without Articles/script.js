const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


console.log(sortWithoutArtickes(bands));


function sortWithoutArtickes(list) {
   var dividedList = bands.map(item => {
      let article = '';
      if (item.slice(0, 4).toLowerCase() == 'the ') {
         article = item.slice(0, 4);
         item = item.slice(4);
      } else if (item.slice(0, 3).toLowerCase() == 'an ') {
         article = item.slice(0, 3);
         item = item.slice(3);
      } else if (item.slice(0, 2).toLowerCase() == 'a ') {
         article = item.slice(0, 2);
         item = item.slice(2);
      }
      return [item, article];
   }).sort();
   return dividedList.map(pair => [pair[1], pair[0]].join(''));
}


const listElem = document.getElementById('bands');
listElem.innerHTML = '<li>' + sortWithoutArtickes(bands).join('</li><li>') + '</li>';