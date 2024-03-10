const directoryDataURL = "https://jorted-runner.github.io/wdd230/chamber/data/members.json";

async function getDirectoryData() {
    const response = await fetch(directoryDataURL);
    const data = await response.json();
    console.log(data);
    // displayDirectory(data);
}

getDirectoryData();