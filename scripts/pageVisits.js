const visitsElmnt = document.querySelector("#pageVisits");

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
    visitsElmnt.textContent = `Page Visits: ${numVisits}`;
} else {
    visitsElmnt.textContent = 'This is your first visit. Welcome to my page!';
}

numVisits++;
localStorage.setItem("numVisits", numVisits);