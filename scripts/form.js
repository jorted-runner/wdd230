const passwordElmnt = document.querySelector("#password");
const passwordConfirmElmnt = document.querySelector("#passwordConfirm");
const message = document.querySelector("#formMessage");

passwordConfirmElmnt.addEventListener("focusout", checkMatch);
passwordConfirmElmnt.addEventListener("focus", clearMessage)
function clearMessage() {
    message.textContent = '';
}

function checkMatch() {
    if (passwordElmnt.value !== passwordConfirmElmnt.value) {
        message.textContent = "Passwords do not match";
        message.style.visibility = "show";
        passwordElmnt.value = '';
        passwordConfirmElmnt.value = '';
        passwordElmnt.focus();
    }
}



const ratingValue = document.querySelector("#ratingValue");
const range = document.querySelector("#rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    ratingValue.innerHTML = range.value;
}