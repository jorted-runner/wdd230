const highlightSection = document.querySelector('#company-spotlights');
const directoryDataURL = "https://jorted-runner.github.io/wdd230/chamber/data/members.json";

async function getDirectoryData() {
    const response = await fetch(directoryDataURL);
    const data = await response.json();
    displayHighlights(data);
}

getDirectoryData();

function displayHighlights(data) {
    const members = data.members;
    members.forEach((member) => {
        if (member.membership_level == "Gold") {
            console.log(member.name);
        }
    });
}