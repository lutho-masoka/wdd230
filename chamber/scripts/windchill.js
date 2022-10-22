const speed = document.querySelector('#speed').value;
const temp = document.querySelector('.temp').value;
const chill = document.querySelector('#chill');
let windChill = 0;

const celsToFahr = temp * 9/5 + 32;
const kmphToMph = speed * 0.6214;

if (celsToFahr >= 50 && kmphToMph > 3.0) {
    windChill = 35.74 + 0.6215 * celsToFahr - 35.75 * Math.pow(kmphToMph, 0.16) + 0.4275 * celsToFahr * Math.pow(kmphToMph, 0.16);
    chill.innerHTML = `${windChill.toFixed(2)} °C`;
} else { 
    windChill = 'N/A';
    chill.innerHTML = windChill;
}
