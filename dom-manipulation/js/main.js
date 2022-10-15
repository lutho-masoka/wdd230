const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener('click', function() {
    if (input.value !== "") {
        const listElt = document.createElement("li");
        const delButton = document.createElement("button");

        listElt.innerHTML = input.value;
        delButton.textContent = "❌";
        
        listElt.appendChild(delButton);
        list.appendChild(listElt);

        delButton.addEventListener('click', function() {
            list.removeChild(listElt);
            input.focus();
        });

        input.value = "";
        input.focus();
    }
    
})


 