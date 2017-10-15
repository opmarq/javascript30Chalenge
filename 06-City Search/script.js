const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];

fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities = data);


var findMatch = function (word, cities) {

    if(word === "")
        return [];

    return cities.filter((place) => {

        let regEx = new RegExp(word, "gi");

        return place.city.match(regEx) || place.state.match(regEx);

    });
}

var displayData = function () {

    var matchedCities = findMatch(this.value,cities);

    let regEx = new RegExp(this.value,"gi");

    var displayed = matchedCities.map((place)=>{

        let city = place.city.replace(regEx,`<span class="high">${ this.value }</span>`);
        let state = place.state.replace(regEx,`<span class="high">${ this.value }</span>`);

        return `<li>
           <span class="name">${ city }</span>
           <span class="population">${ state }</span>
          </li>`;

    }).join("");

    suggestions.innerHTML = displayed;

};

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayData);
searchInput.addEventListener("keyup", displayData);

