// 49.76, 6.64

const currentTempElmnt = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherIconBaseURL = 'https://openweathermap.org/img/wn/'

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.64&units=imperial&appid=13f1d9de23b023bde6d8dc7e647aa7ea'

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
    captionDesc.textContent = `${weather.weather[0].description}`.toTitleCase();
}

apiFetch();