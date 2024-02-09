const inputElement = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

addButton.addEventListener('click', () => {
    if (inputElement.value != '') {
        // This section will execute if the user inputs text.
        const newChap = document.createElement('li');
        const deleteButton = document.createElement('button')
        newChap.textContent = inputElement.value;
        deleteButton.textContent = "❌";
        newChap.append(deleteButton);
        list.appendChild(newChap);
        deleteButton.addEventListener("click", () => {
            list.removeChild(newChap);
        });
        inputElement.focus();
        inputElement.value = '';
    } else {
        // This section executes the the input box was left blank.
        alert("Cannot add a blank chapter. Add a chapter and try again.");
        inputElement.focus();
    }
});

document.addEventListener('keypress', function(event) {
    let keyPressed = event.key;
    if (keyPressed == "Enter" && inputElement.value != "") {
        // This section will execute if the user inputs text.
        const newChap = document.createElement('li');
        const deleteButton = document.createElement('button')
        newChap.textContent = inputElement.value;
        deleteButton.textContent = "❌";
        newChap.append(deleteButton);
        list.appendChild(newChap);
        deleteButton.addEventListener("click", () => {
            list.removeChild(newChap);
        });
        inputElement.focus();
        inputElement.value = '';
    } else if (keyPressed == "Enter" && inputElement.value == "") {
        alert("Cannot add a blank chapter. Add a chapter and try again.");
        inputElement.focus();
    }
});