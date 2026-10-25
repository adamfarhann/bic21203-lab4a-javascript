
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
    const inputText = userInput.value.trim();

    if (inputText === "") {
        result.textContent = "Please enter a valid number!";
    } else if (!Number.isFinite(Number(inputText))) {
        result.textContent = "Please enter a valid number!";
    } else if (Number(inputText) < 10) {
        result.textContent = "The number is lower than 10";
    } else if (Number(inputText) > 10) {
        result.textContent = "The number is higher than 10";
    } else {
        result.textContent = "The number is equal to 10";
    }
}

checkBtn.addEventListener("click", checkInput);
