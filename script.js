document.addEventListener("DOMContentLoaded", function() {
    // Alert when a button is clicked
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function() {
            console.log("Button clicked: " + this.innerText);
        });
    });
});
