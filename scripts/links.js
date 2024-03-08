const baseURL = "https://jorted-runner.github.io/wdd230/";
const linksURL = "https://jorted-runner.github.io/wdd230/data/links.json";

async function getLinks() {
    const responses = await fetch(linksURL);
    const data = await responses.json();
    console.log(data);
}

getLinks();