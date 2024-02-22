const inputElement = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

addButton.addEventListener('click', () => {
    if (inputElement.value != '') {
        // This section will execute if the user inputs text.
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = '';
        inputElement.focus();
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
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = '';
        inputElement.focus();
    } else if (keyPressed == "Enter" && inputElement.value == "") {
        alert("Cannot add a blank chapter. Add a chapter and try again.");
        inputElement.focus();
    }
});

function displayList(item) {
    const newChap = document.createElement('li');
    const deleteButton = document.createElement('button')
    newChap.textContent = item;
    deleteButton.textContent = "❌";
    newChap.append(deleteButton);
    list.appendChild(newChap);
    deleteButton.addEventListener("click", () => {
        list.removeChild(newChap);
        deleteChapter(li.textContent);;
        inputElement.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMChapters'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}