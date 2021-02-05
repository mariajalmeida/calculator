window.addEventListener("DOMContentLoaded", setUp);

const button = document.querySelector("#calculate");

function setUp() {
    button.addEventListener("click", calculateClicked);
}

function calculateClicked() {

    const firstNumber = document.querySelector("#firstnumber").value;
    const secondNumber = document.querySelector("#secondnumber").value;
    const operator = document.querySelector("#operator").value;

    let sign = "";
    if (operator == "add") {
        sign = "+";
    } else if (operator == "sub") {
        sign = "-"
    } else if (operator == "mul") {
        sign = "*"
    } else if (operator == "div") {
        sign = "/"
    }

    let result = eval(firstNumber + sign + secondNumber);

    roundNumbers(result);
}

function roundNumbers(res) {

    console.log("initial result", res)
    const checkBox = document.getElementById("doround");
    const value = document.querySelector("#decimals").value;

    let roundedResult = "";
    if (checkBox.checked & value == "0") {
        roundedResult = Math.round((res + Number.EPSILON) * 1) / 1;
    } else if (checkBox.checked & value == "1") {
        roundedResult = Math.round((res + Number.EPSILON) * 10) / 10;
    } else if (checkBox.checked & value == "2") {
        roundedResult = Math.round((res + Number.EPSILON) * 100) / 100;
    } else if (checkBox.checked & value == "3") {
        roundedResult = Math.round((res + Number.EPSILON) * 1000) / 1000;
    } else if (checkBox.checked & value == "4") {
        roundedResult = Math.round((res + Number.EPSILON) * 10000) / 10000;
    } else if (checkBox.checked & value == "5") {
        roundedResult = Math.round((res + Number.EPSILON) * 100000) / 100000;
    } else if (checkBox.checked & value == "6") {
        roundedResult = Math.round((res + Number.EPSILON) * 100000) / 100000;
    } else if (checkBox.checked & value == "7") {
        roundedResult = Math.round((res + Number.EPSILON) * 100000) / 100000;
    } else if (checkBox.checked & value == "8") {
        roundedResult = Math.round((res + Number.EPSILON) * 100000) / 100000;
    } else {
        roundedResult = res;
    }

    soughtResult(roundedResult);
}

function soughtResult(f) {
    console.log("final result", f)

    const parent = document.querySelector("#results");

    const item = document.createElement("li");
    parent.appendChild(item);

    item.textContent = f;

    // parent.insertBefore(item, parent.childNodes[0]);

    parent.scrollTop = parent.scrollHeight;

    const clearResults = document.querySelector("#clear");
    clearResults.addEventListener("click", clearList);
}

function clearList() {
    button.removeEventListener("click", calculateClicked);

    document.querySelector("#firstnumber").value = "";
    document.querySelector("#secondnumber").value = "";
    document.querySelector("#results").textContent = "";
    document.getElementById("doround").checked = false;
    document.querySelector("#decimals").value = "0";
    document.querySelector("#operator").value = "add";

    setUp();
}