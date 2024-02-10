const darkModeButton = document.querySelector("input");
const documentBody = document.querySelector("body");

darkModeButton.addEventListener("click", () => {
    documentBody.classList.toggle("darkMode");
});