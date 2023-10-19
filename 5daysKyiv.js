let kyivBtn = document.querySelector('#kyivBtn');

let firstDayK = document.querySelector('#firstDayK');
let secondDayK = document.querySelector('#secondDayK');
let thirdDayK = document.querySelector('#thirdDayK');
let fourthDayK = document.querySelector('#fourthDayK');
let fifthDayK = document.querySelector('#fifthDayK');

const firstDayInfoK = document.querySelector('#firstDayInfoK');
const secondDayInfoK = document.querySelector('#secondDayInfoK');
const thirdDayInfoK = document.querySelector('#thirdDayInfoK');
const fourthDayInfoK = document.querySelector('#fourthDayInfoK');
const fifthDayInfoK = document.querySelector('#fifthDayInfoK');

const firstDayImgK = document.querySelector('#firstDayImgK');
const secondDayImgK = document.querySelector('#secondDayImgK');
const thirdDayImgK = document.querySelector('#thirdDayImgK');
const fourthDayImgK = document.querySelector('#fourthDayImgK');
const fifthDayImgK = document.querySelector('#fifthDayImgK');

kyivBtn.addEventListener('click', function() {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&appid=9cb5685b6cf4a10f421cf4e03a11f72f&units=" + units)
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
                firstDayK.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                firstDayInfoK.textContent = Math.round(element.main.temp) + letter;
                firstDayImgK.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"; 
            } else if (index >= 8 && index <= 16) {
                secondDayK.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                secondDayInfoK.textContent = Math.round(element.main.temp) + letter; 
                secondDayImgK.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png";
            } else if (index >= 16 && index <= 24) {
                thirdDayK.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                thirdDayInfoK.textContent = Math.round(element.main.temp) + letter;
                thirdDayImgK.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png"; 
            } else if (index >= 24 && index <= 32) {
                fourthDayK.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                fourthDayInfoK.textContent = Math.round(element.main.temp) + letter; 
                fourthDayImgK.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png";
            } else if (index >= 32 && index <= 40) {
                fifthDayK.textContent = `${date.getDate()}.${date.getMonth() + 1}`
                fifthDayInfoK.textContent = Math.round(element.main.temp) + letter;
                fifthDayImgK.src = "https://openweathermap.org/img/wn/" + element.weather[0].icon+"@2x.png";
            }
        }
    });
    });
});