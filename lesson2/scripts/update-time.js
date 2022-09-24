const todaysDate = new Date(document.lastModified);
const date = todaysDate.getFullYear();

document.querySelector("#year").innerHTML = date;
document.getElementById("currentdate").innerHTML = todaysDate.toLocaleString('en-GB');