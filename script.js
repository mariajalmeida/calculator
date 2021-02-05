window.addEventListener("DOMContentLoaded", setUp);

function setUp() {
    console.log("hello world")

    const button = document.querySelector("#calculate");
    button.addEventListener("click", calculateClicked)
}

function calculateClicked() {
    console.log("calculations");

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

    console.log(result);
}