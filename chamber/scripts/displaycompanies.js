const requestURL = 'json/data.json';
const companiesObj = document.querySelector('.container');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    companies.forEach(displayCompany);
  });

  function displayCompany(company) {
    // Create elements to add to the document
    let section = document.createElement('section');
    let name = document.createElement('h1');
    let img = document.createElement('img');
    let contact = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement('h2');
    let address = document.createElement('p');



    img.setAttribute('src', company.imageurl);
    img.setAttribute('alt', company.name);
    img.setAttribute('loading', 'lazy');

    name.textContent = company.name;
    contact.innerHTML = company.contact;
    membership.innerHTML = company.membership;
    address.innerHTML = company.address;


    website.setAttribute('href', '#');
    website.textContent = company.website;
    
    section.appendChild(img);
    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(contact);
    section.appendChild(website);
    section.appendChild(membership);

    document.querySelector('div.container').appendChild(section);
  }

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const container = document.querySelector(".container");

gridbutton.addEventListener("click", () => {
	container.classList.add("grid");
	container.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	container.classList.add("list");
	container.classList.remove("grid");
});