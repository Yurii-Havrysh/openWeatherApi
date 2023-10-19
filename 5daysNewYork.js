let newYorkBtn = document.querySelector('#newYorkBtn');

let firstDayN = document.querySelector('#firstDayN');
let secondDayN = document.querySelector('#secondDayN');
let thirdDayN = document.querySelector('#thirdDayN');
let fourthDayN = document.querySelector('#fourthDayN');
let fifthDayN = document.querySelector('#fifthDayN');

const firstDayInfoN = document.querySelector('#firstDayInfoN');
const secondDayInfoN = document.querySelector('#secondDayInfoN');
const thirdDayInfoN = document.querySelector('#thirdDayInfoN');
const fourthDayInfoN = document.querySelector('#fourthDayInfoN');
const fifthDayInfoN = document.querySelector('#fifthDayInfoN');

const firstDayImgN = document.querySelector('#firstDayImgN');
const secondDayImgN = document.querySelector('#secondDayImgN');
const thirdDayImgN = document.querySelector('#thirdDayImgN');
const fourthDayImgN = document.querySelector('#fourthDayImgN');
const fifthDayImgN = document.querySelector('#fifthDayImgN');

newYorkBtn.addEventListener('click', function() {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=New York&appid=9cb5685b6cf4a10f421cf4e03a11f72f&units=" + units)
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
                firstDayN.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                firstDayInfoN.textContent = Math.round(element.main.temp) + letter; 
                firstDayImgN.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png";
            } else if (index >= 8 && index <= 16) {
                secondDayN.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                secondDayInfoN.textContent = Math.round(element.main.temp) + letter;
                secondDayImgN.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"; 
            } else if (index >= 16 && index <= 24) {
                thirdDayN.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                thirdDayInfoN.textContent = Math.round(element.main.temp) + letter; 
                thirdDayImgN.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png";
            } else if (index >= 24 && index <= 32) {
                fourthDayN.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                fourthDayInfoN.textContent = Math.round(element.main.temp) + letter; 
                fourthDayImgN.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png";
            } else if (index >= 32 && index <= 40) {
                fifthDayN.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                fifthDayInfoN.textContent = Math.round(element.main.temp) + letter;
                fifthDayImgN.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png";
            }
        }
    });
    });
});