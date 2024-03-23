const highlightSection = document.querySelector('#company-spotlights');
const directoryDataURL = "https://jorted-runner.github.io/wdd230/chamber/data/members.json";

async function getDirectoryData() {
    const response = await fetch(directoryDataURL);
    const data = await response.json();
    displayHighlights(data);
}

getDirectoryData();

function displayHighlights(data) {
    const goldMembers = [];
    const members = data.members;
    members.forEach((member) => {
        if (member.membership_level === "Gold") {
            goldMembers.push(member);
        }
    });
    for (let i = goldMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [goldMembers[i], goldMembers[j]] = [goldMembers[j], goldMembers[i]];
    }

    const randomChoices = goldMembers.slice(0, 2);
    displayDirectory(randomChoices);
}

const displayDirectory = (data) => {
    data.forEach((member) => {
        const card = document.createElement('section');
        card.setAttribute('class', 'directoryData');
        card.classList.add('directoryCard');

        const memberName = document.createElement('h2');
        memberName.textContent = member.name;

        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Picture from ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '350');
        logo.setAttribute('height', '200');

        const addressElmnt = document.createElement('p');
        addressElmnt.textContent = member.address;

        const phoneNumElmnt = document.createElement('p');
        phoneNumElmnt.textContent = member.phone;

        const aElmnt = document.createElement('a');
        aElmnt.setAttribute('href', member.website);
        aElmnt.textContent = member.website;

        card.appendChild(memberName);
        card.appendChild(logo);
        card.appendChild(addressElmnt);
        card.appendChild(phoneNumElmnt);
        card.appendChild(aElmnt);
        highlightSection.appendChild(card);       
    });
}