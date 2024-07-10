function calculateEMI() {
  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate =
    parseFloat(document.getElementById("interest").value) / 12 / 100;
  const duration = parseInt(document.getElementById("duration").value);

  if (isNaN(principal) || isNaN(interestRate) || isNaN(duration)) {
    alert("Please enter valid numbers");
    return;
  }

  const emi =
    (principal * interestRate * Math.pow(1 + interestRate, duration)) /
    (Math.pow(1 + interestRate, duration) - 1);

  document.getElementById("emi").textContent = emi.toFixed(2);
}
