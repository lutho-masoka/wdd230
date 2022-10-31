const visits = document.querySelector('#visits');

let dayPrior = Number(window.localStorage.getItem('prior-visit-ls'));

const days = Math.floor((Date.now() - dayPrior) / 86400000);

if (days !== 0) {
    visits.textContent = `${days} day(s) since visit.`;
} else {
    visits.textContent = 'This is your first visit!';
}

localStorage.setItem("prior-visit-ls", Date.now());
