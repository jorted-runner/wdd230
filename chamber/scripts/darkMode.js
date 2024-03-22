const darkModeButton = document.querySelector("input");
const documentBody = document.querySelector("body");

darkModeButton.addEventListener("click", () => {
    documentBody.classList.toggle("darkMode");
});

function navigateToJoinPage() {
    window.location.href = "join.html";
}

var currentPage = window.location.href;

var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    if (link.href === currentPage) {
        link.classList.add('active');
    }
});