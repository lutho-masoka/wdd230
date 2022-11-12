const input = document.querySelector('#time');
const currentDate = new Date();

const fullCurrentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(currentDate);

input.value = fullCurrentDate;