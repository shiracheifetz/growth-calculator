/*
  Investment Growth Calculator
  Calculates future value using the compound interest formula.
*/
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Materialize components at once
    M.AutoInit();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements by their IDs
    const form = document.getElementById("investmentForm");
    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");

    // Listens for form submission
    form.addEventListener("submit", function (event) {
        // Prevent page refresh
        event.preventDefault();

        // calculate the future value of the investment and display the result
        const initialInvestment = document.getElementById("initialInvestment").value;
        const interestRate = document.getElementById("interestRate").value;
        const retirementYear = document.getElementById("retirementYear").value;

        const date = new Date(); //current date
        const year = date.getFullYear();
        const yearsToGrow = retirementYear - year;


        const futureValue = initialInvestment * Math.pow((1 + interestRate/100), yearsToGrow) ;

        resultText.innerHTML += futureValue.toFixed(2);
        resultText.hidden = false;

        // TIP: You can view the form input values using the console for debugging
        console.log("Form submitted " + resultText.value);
    });
});
