// 39.09, -94.42

const currentTempElmnt = document.querySelector('#currentWeather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=39.09&lon=-94.42&units=imperial&appid=13f1d9de23b023bde6d8dc7e647aa7ea';
const weatherIconBaseURL = 'https://openweathermap.org/img/wn/'

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
    currentTempElmnt.innerHTML = `${weather.main.temp}&deg; F`;
    weatherIcon.setAttribute('src', `${weatherIconBaseURL}${weather.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', weather.weather[0].main);
    captionDesc.textContent = `${weather.weather[0].description}`.toUpperCase();
}

apiFetch();
