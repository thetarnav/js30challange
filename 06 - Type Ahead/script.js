const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
   .then(data_blob => data_blob.json()
   .then(array => cities.push(...array)));


const searchData = (input, cities) => {
   if (cities.length < 1 || input === '') return [];
   return cities.filter(place => place.city.toLowerCase().includes(input) || place.state.toLowerCase().includes(input));
}

function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function listResults () {
   var matchArray = searchData(this.value, cities);
   var html = matchArray.map(place => {
      let regex = new RegExp(this.value, 'gi');
      let city = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      let state = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
      `;
   }).join('');
   suggestions.innerHTML = html;
}

const suggestions = document.querySelector('.suggestions');
const input = document.querySelector('input.search');
input.addEventListener('input', listResults);

