// This variable remembers the user's choice.
let hungerLevel = "";

let result = document.getElementById("result");

// This function uses conditional logic to choose an answer.
function showSuggestion() {
    if (hungerLevel === "low") {
        result.textContent = "Try some fruit or a small snack.";
    } else if (hungerLevel === "medium") {
        result.textContent = "A sandwich could be a good choice.";
    } else if (hungerLevel === "high") {
        result.textContent = "You might want a full meal like pizza.";
    }
}

document.getElementById("lowButton").addEventListener("click", function () {
    hungerLevel = "low";
    showSuggestion();
});

document.getElementById("mediumButton").addEventListener("click", function () {
    hungerLevel = "medium";
    showSuggestion();
});

document.getElementById("highButton").addEventListener("click", function () {
    hungerLevel = "high";
    showSuggestion();
});
