function calculateEMI() {
  let P = document.getElementById("amount").value;
  let r = document.getElementById("rate").value / 12 / 100;
  let n = document.getElementById("years").value * 12;

  let emi = (P*r*Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);

  document.getElementById("result").innerText = "EMI: ₹" + emi.toFixed(2);
}

function calculateGST() {
  let amount = document.getElementById("gstAmount").value;
  let rate = document.getElementById("gstRate").value;

  let gst = amount * rate / 100;
  let total = parseFloat(amount) + parseFloat(gst);

  document.getElementById("gstResult").innerText =
    "GST: ₹" + gst.toFixed(2) + " | Total: ₹" + total.toFixed(2);
}

function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  document.getElementById("ageResult").innerText =
    "Age: " + age + " years";
}
