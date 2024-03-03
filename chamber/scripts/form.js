document.addEventListener("DOMContentLoaded", function() {
    const timestampInput = document.getElementById("timestamp");
    timestampInput.value = Date.now();
    console.log(timestampInput.value);
});