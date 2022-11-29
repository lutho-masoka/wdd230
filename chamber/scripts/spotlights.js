const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];

    for (let i = 0; i < 3; i++) {
        if (companies[i].membership == "gold" || companies[i].membership == "silver") {
            displayCompany(companies[i]);
        }
    }
  });

  function displayCompany(company) {
    // Create elements to add to the document
    let article = document.createElement('article');
    let name = document.createElement('h3');
    let spotlightImg = document.createElement('div')
    let spotlightWeb = document.createElement('div')
    let img = document.createElement('img');
    let address = document.createElement('p');
    let hr = document.createElement('hr');
    let website = document.createElement('a');
    let contact = document.createElement('p');

    img.setAttribute('src', company.imageurl);
    img.setAttribute('alt', company.name);
    img.setAttribute('loading', 'lazy');

    name.textContent = company.name;
    contact.innerHTML = company.contact;
    address.innerHTML = company.address;
    spotlightImg.classList.add('spotlight-img');
    spotlightWeb.classList.add('spotlight-web')

    website.setAttribute('href', '#');
    website.textContent = company.website;

    spotlightImg.appendChild(img);
    spotlightWeb.appendChild(website);
    
    article.appendChild(name);
    article.appendChild(address);
    article.appendChild(spotlightImg);
    article.appendChild(hr);
    article.appendChild(spotlightWeb);
    article.appendChild(contact);

    document.querySelector('#spotlights').appendChild(article);
  }