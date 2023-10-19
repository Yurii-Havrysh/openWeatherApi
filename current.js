//finding each element to display them
let infoLondon = document.querySelector('#infoLondon');
let imgLondon = document.querySelector('#imgLondon');
let degreeLondon = document.querySelector('#degreeLondon');

let infoKyiv = document.querySelector('#infoKyiv');
let imgKyiv = document.querySelector('#imgKyiv');
let degreeKyiv = document.querySelector('#degreeKyiv');

let infoNewYork = document.querySelector('#infoNewYork');
let imgNewYork = document.querySelector('#imgNewYork');
let degreeNewYork = document.querySelector('#degreeNewYork');

//units = metric - pointing degrees in Celcius as a default
let units = 'metric';
let letter = 'C°';

//finding and creating family of radio inputs
const radioButtons = document.querySelectorAll('input[name="unit"]');
//finding these inputs
let celsiusBtn = document.getElementById('celsius');
let fahrenheitBtn = document.getElementById('fahrenheit');

//setting eventListener to each of these inputs
for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', function() {
        if (fahrenheitBtn.checked) {
            units = 'imperial';
            letter = 'F°';
        } else if(celsiusBtn.checked) {
            units = 'metric';
            letter = 'C°';
        }
        fetchData();      
    });
}

function fetchData() {
    fetchWeatherData('London', 'imgLondon', 'degreeLondon', 'infoLondon');
    fetchWeatherData('Kyiv', 'imgKyiv', 'degreeKyiv', 'infoKyiv');
    fetchWeatherData('New York', 'imgNewYork', 'degreeNewYork', 'infoNewYork');
}

//formula for showing all info about cities and their weather
function fetchWeatherData(city, imgId, degreeId, infoId) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9cb5685b6cf4a10f421cf4e03a11f72f&units=" + units)
    .then(resObj => resObj.json())
    .then(res => {
        const imgElement = document.querySelector(`#${imgId}`);
        const degreeElement = document.querySelector(`#${degreeId}`);
        const infoElement = document.querySelector(`#${infoId}`);

        imgElement.src = imgElement.src = "https://openweathermap.org/img/wn/" + res.weather[0].icon+"@2x.png";
        degreeElement.textContent =  Math.round(res.main.temp) + `${letter}`;
        infoElement.textContent = res.weather[0].description;
    });
}

fetchData() //fetching data by default in Celsius

