const lengthDay = 84600000;
const lastVisitElmnt = document.querySelector("#lastVisit");

const today = Date.now();
let lastVisit = getLastVisit() || 0;

function getLastVisit() {
    try {
        return JSON.parse(localStorage.getItem('lastVisit'));
    } catch {
        return None;
    }
}

function setLastVisit(visitTime) {
    localStorage.setItem('lastVisit', visitTime);
}

if (lastVisit === 0) {
    lastVisitElmnt.textContent = "Welcome! Let us know if you have any questions";
} else {
    const diffBetween = today - lastVisit;
    const numDays = Math.round(diffBetween / lengthDay);
    if (numDays == 1) {
        lastVisitElmnt.textContent = `You last visited ${numDays} day ago.`;
    } else if ( numDays < 1) {
        lastVisitElmnt.textContent = "Back so soon! Awesome!";
    } else {
        lastVisitElmnt.textContent = `You last visited ${numDays} days ago.`;
    }
}

setLastVisit(today);
