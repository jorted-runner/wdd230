const directoryDataURL = "https://jorted-runner.github.io/wdd230/chamber/data/members.json";
const mainElmnt = document.querySelector('main');
const gridButtons = document.querySelector('.gridButton');
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

listBtn.addEventListener("click", () => {
    const memberInfoList = document.querySelectorAll('.directoryData');
    mainElmnt.style.gridTemplateColumns = '1fr';
    memberInfoList.forEach(memberInfo => {
        memberInfo.classList.add('directoryList');
        memberInfo.classList.remove('directoryCard');
    });
    gridButtons.style.gridColumn = '1';
});

gridBtn.addEventListener('click', () => {
    const memberInfoList = document.querySelectorAll('.directoryData');
    memberInfoList.forEach(memberInfo => {
        memberInfo.classList.add('directoryCard');
        memberInfo.classList.remove('directoryList');
    });
    const screenWidth = window.innerWidth;

    if (screenWidth > 770) {
        mainElmnt.style.gridTemplateColumns = '1fr 1fr';
        gridButtons.style.gridColumn = '1/3';
    } else {
        mainElmnt.style.gridTemplateColumns = '1fr';
    }
});


async function getDirectoryData() {
    const response = await fetch(directoryDataURL);
    const data = await response.json();
    displayDirectory(data.members);
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
        document.querySelector('main').appendChild(card);       
    });
}

getDirectoryData();