const directoryDataURL = "https://jorted-runner.github.io/wdd230/chamber/data/members.json";

async function getDirectoryData() {
    const response = await fetch(directoryDataURL);
    const data = await response.json();
    displayDirectory(data.members);
}

const displayDirectory = (data) => {
    data.forEach((member) => {
        const card = document.createElement('section');
        card.setAttribute('class', 'directory');
        const memberName = document.createElement('h2');
        memberName.textContent = member.name;
        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Picture from ${member.name}`);
        logo.setAttribute('loading', 'lazy');

        card.appendChild(memberName);
        card.appendChild(logo);
        document.querySelector('main').appendChild(card);       
    });
}

getDirectoryData();