const buttonsEl = document.querySelectorAll("button");

const inputEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", ()=> {
        const buttonValue = (buttonsEl[i].textContent);
        if (buttonValue === "C") {
            clearResults();
        }
        else if (buttonValue === "=") {
            calculateResults();
        }
        else {
            appendValue(buttonValue);
        }
    })
}

function clearResults() {
    inputEl.value = ""
}

function calculateResults() {
    inputEl.value = eval(inputEl.value);
}

function appendValue(buttonValue) {
    inputEl.value += buttonValue;
}