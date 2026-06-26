// 🔒 Simple password (you can change this later)
const PASSWORD = "1234";

// Login
function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === PASSWORD) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

// Calculate costs
function calculate() {
  const purchase = parseFloat(document.getElementById("purchasePrice").value) || 0;
  const freight = parseFloat(document.getElementById("freight").value) || 0;

  // 🚗 Freight insurance = 2% of purchase price
  const insurance = purchase * 0.02;

  // 🚘 fixed values
  const ctp = 700;
  const rego = 1200;

  // 💰 GST = 10% of (purchase + freight + insurance)
  const gst = (purchase + freight + insurance) * 0.10;

  // 🧮 total
  const total = purchase + freight + insurance + gst + ctp + rego;

  document.getElementById("results").innerHTML = `
    <p>Purchase Price: $${purchase.toFixed(2)}</p>
    <p>Freight: $${freight.toFixed(2)}</p>
    <p>Freight Insurance (2%): $${insurance.toFixed(2)}</p>
    <p>GST: $${gst.toFixed(2)}</p>
    <p>CTP: $${ctp.toFixed(2)}</p>
    <p>Registration: $${rego.toFixed(2)}</p>
    <hr>
    <h2>Total: $${total.toFixed(2)}</h2>
  `;
}

// Reset
function reset() {
  document.getElementById("vehicleName").value = "";
  document.getElementById("purchasePrice").value = "";
  document.getElementById("freight").value = "";
  document.getElementById("exchangeRate").value = 1;
  document.getElementById("results").innerHTML = "Enter values to calculate.";
}
