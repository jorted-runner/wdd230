const clickButton = document.querySelector(".click");
const hoverElmnt = document.querySelector("#hover");
const inputElmnt = document.querySelector("#inputExp");
const dblClickElmnt = document.querySelector("#dblClick");

const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "teal"];

clickButton.addEventListener("click", () => {
    alert("Warning, a button has been pressed!");
});

hoverElmnt.addEventListener("mouseover", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    hoverElmnt.style.color = randomColor;
});

document.addEventListener("keypress", (event) => {
    if (event.key == "Enter" && inputElmnt.value != "") {
        alert(`You typed in "${inputElmnt.value}"`);
        inputElmnt.value = '';
        inputElmnt.focus();
    }
});

dblClickElmnt.addEventListener("dblclick", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dblClickElmnt.style.backgroundColor = randomColor;
})