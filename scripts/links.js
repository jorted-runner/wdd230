const baseURL = "https://jorted-runner.github.io/wdd230/";
const linksURL = "https://jorted-runner.github.io/wdd230/data/links.json";
const learningActivities = document.querySelector("#lesson-links");


async function getLinks() {
    const responses = await fetch(linksURL);
    const data = await responses.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const liElmnt = document.createElement('li');
        const lessonText = document.createElement('span');
        lessonText.textContent = `Lesson ${week.lesson}: `;
        liElmnt.appendChild(lessonText);

        const linksContainer = document.createElement('span');
        week.links.forEach((link, index) => {
            const aElmnt = document.createElement('a');
            aElmnt.setAttribute('href', link.url);
            aElmnt.setAttribute('target', '_blank');
            aElmnt.setAttribute('rel', 'noopener');
            aElmnt.textContent = link.title;

            linksContainer.appendChild(aElmnt);

            if (index < week.links.length - 1) {
                const separator = document.createElement('span');
                separator.textContent = ' | ';
                linksContainer.appendChild(separator);
            }
        });

        liElmnt.appendChild(linksContainer);
        learningActivities.appendChild(liElmnt);
    });
}

getLinks();