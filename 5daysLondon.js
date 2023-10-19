let londonBtn = document.querySelector('#londonBtn');

let firstDayL = document.querySelector('#firstDayL');
let secondDayL = document.querySelector('#secondDayL');
let thirdDayL = document.querySelector('#thirdDayL');
let fourthDayL = document.querySelector('#fourthDayL');
let fifthDayL = document.querySelector('#fifthDayL');

const firstDayInfoL = document.querySelector('#firstDayInfoL');
const secondDayInfoL = document.querySelector('#secondDayInfoL');
const thirdDayInfoL = document.querySelector('#thirdDayInfoL');
const fourthDayInfoL = document.querySelector('#fourthDayInfoL');
const fifthDayInfoL = document.querySelector('#fifthDayInfoL');

const firstDayImgL = document.querySelector('#firstDayImgL');
const secondDayImgL = document.querySelector('#secondDayImgL');
const thirdDayImgL = document.querySelector('#thirdDayImgL')
const fourthDayImgL = document.querySelector('#fourthDayImgL');
const fifthDayImgL = document.querySelector('#fifthDayImgL');

londonBtn.addEventListener('click', function() {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=London&appid=9cb5685b6cf4a10f421cf4e03a11f72f&units=" + units)
        .then(resObj => resObj.json())
        .then(res => {
        console.log(res);

    let elements = res.list;

    elements.forEach(element => {
        let hour = element.dt;
        const date = new Date(hour * 1000);

        let index = elements.indexOf(element);
        if ((date.getHours() + 1) === 15) { 
            if (index >= 0 && index <= 8) {
                firstDayL.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                firstDayInfoL.textContent = Math.round(element.main.temp) + letter;
                firstDayImgL.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"
            } else if (index >= 8 && index <= 16) {
                secondDayL.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                secondDayInfoL.textContent = Math.round(element.main.temp) + letter;
                secondDayImgL.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"; 
            } else if (index >= 16 && index <= 24) {
                thirdDayL.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                thirdDayInfoL.textContent = Math.round(element.main.temp) + letter;
                thirdDayImgL.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"; 
            } else if (index >= 24 && index <= 32) {
                fourthDayL.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                fourthDayInfoL.textContent = Math.round(element.main.temp) + letter;
                fourthDayImgL.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"; 
            } else if (index >= 32 && index <= 40) {
                fifthDayL.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                fifthDayInfoL.textContent = Math.round(element.main.temp) + letter;
                fifthDayImgL.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"
            }
        }
    });
    });
});



