window.addEventListener("DOMContentLoaded", setUp);

function setUp() {
    const button = document.querySelector("#calculate");
    button.addEventListener("click", calculateClicked)
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

    // console.log(result);
    // const parent = document.querySelector("#results");
    // const finalResult = parent.lastElementChild;

    // finalResult.textContent = result;

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
        console.log("fail");
    }

    soughtResult(roundedResult);
}

function soughtResult(f) {
    console.log("final result", f)
}