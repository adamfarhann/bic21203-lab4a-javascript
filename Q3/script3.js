
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
    numberList.textContent = "";

    for (let number = 1; number <= 5; number++) {
        const listItem = document.createElement("li");

        listItem.textContent = `The number is ${number}`;

        numberList.appendChild(listItem);
    }
}

generateBtn.addEventListener("click", generateNumbers);
