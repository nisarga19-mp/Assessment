function calculateSI() {
    let P = document.getElementById("principal").value;
    let R = document.getElementById("rate").value;
    let T = document.getElementById("time").value;

    if (P === "" || R === "" || T === "" || P <= 0 || R <= 0 || T <= 0) {
        alert("Please enter valid values!");
        return;
    }

    let SI = (P * R * T) / 100;
    let amount = parseFloat(P) + SI;

    document.getElementById("si").innerText = SI.toFixed(2);
    document.getElementById("amount").innerText = amount.toFixed(2);
}