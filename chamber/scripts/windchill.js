const tempElmnt = document.querySelector("#temperature");
const windElmnt = document.querySelector("#windspeed");
const weatherDiv = document.querySelector("#weather");

var tempActual = tempElmnt.textContent.match(/\d+/)[0];
var windActual = windElmnt.textContent.match(/[\d.]+/)[0];

const windspeedElmnt = document.createElement('p');
windspeedElmnt.setAttribute('id', 'windchill');

if (tempActual <= 50 && windActual > 3.0) {
    var windChill = 35.74 + (0.6215 * tempActual) - (35.75 * Math.pow(windActual, 0.16)) + (0.4275 * tempActual * Math.pow(windActual, 0.16));
    windspeedElmnt.innerHTML = `${windChill}&deg;F`;
} else {
    windspeedElmnt.textContent = 'N/A';
}

weatherDiv.appendChild(windspeedElmnt);
