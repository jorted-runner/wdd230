// 39.02, -94.28

const currentTempElmnt = document.querySelector('#currentWeather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windElmnt = document.querySelector("#windspeed");
const weatherDiv = document.querySelector("#weather");
const threeDayDiv = document.querySelector('#threeDay');
const windspeedElmnt = document.createElement('p');
const windchillElmnt = document.querySelector('#windChill');
const secondsDay = 86400;

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=39.02&lon=-94.28&units=imperial&appid=13f1d9de23b023bde6d8dc7e647aa7ea';
const weatherIconBaseURL = 'https://openweathermap.org/img/wn/';
const fiveDayForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.02&lon=-94.28&units=imperial&appid=13f1d9de23b023bde6d8dc7e647aa7ea';


var temp = '';
var windSpeed = '';

async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(weather) {
    temp = weather.main.temp;
    windspeed = weather.wind.speed;
    currentTempElmnt.innerHTML = `${weather.main.temp}&deg; F`;
    weatherIcon.setAttribute('src', `${weatherIconBaseURL}${weather.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', weather.weather[0].main);
    windElmnt.textContent = `Windspeed: ${weather.wind.speed} mph`;
    captionDesc.textContent = `${weather.weather[0].description}`.toUpperCase();
    addWindChill();
}

apiFetch();

function addWindChill() {
    windspeedElmnt.setAttribute('id', 'windchill');
    if (temp <= 50 && windspeed > 3.0) {
        var windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));
        windspeedElmnt.innerHTML = `Wind Chill Index: ${windChill.toFixed(2)}&deg; F`;
    } else {
        windspeedElmnt.textContent = 'Wind Chill Index: N/A';
    }
    windchillElmnt.appendChild(windspeedElmnt);
}

async function apiFetchFiveDay() {
    try {
        const response = await fetch(fiveDayForecastURL);
        if (response.ok) {
            const data = await response.json();
            var currentDate = new Date();
            var currentTimeInMillis = currentDate.getTime();
            var currentTimeInSeconds = Math.round(currentTimeInMillis / 1000);
            displayThreeWeather(data, currentTimeInSeconds);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayThreeWeather(weather, currentTime) {
    const days = {};
    const currentDay = new Date(currentTime * 1000);
    currentDay.setHours(0, 0, 0, 0);
    weather.list.forEach(element => {
        const elementTime = new Date(element.dt * 1000);
        elementTime.setHours(0, 0, 0, 0);
        if (elementTime > currentDay && Object.keys(days).length < 3) {
            const dayKey = elementTime.toDateString();
            if (!days[dayKey]) {
                days[dayKey] = {
                    high: -Infinity,
                    low: Infinity
                };
            }
            if (element.main.temp > days[dayKey].high) {
                days[dayKey].high = element.main.temp;
            }
            if (element.main.temp < days[dayKey].low) {
                days[dayKey].low = element.main.temp;
            }
        }
    });
    Object.keys(days).forEach(dayKey => {
        const pElmnt = document.createElement('p');
        pElmnt.innerHTML = `${new Date(dayKey).toDateString()}: High ${days[dayKey].high.toFixed(2)}&deg; F, Low ${days[dayKey].low.toFixed(2)}&deg; F`;
        threeDayDiv.appendChild(pElmnt);
    });
}

apiFetchFiveDay();