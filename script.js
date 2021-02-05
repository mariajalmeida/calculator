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

    console.log(firstNumber, secondNumber);
}