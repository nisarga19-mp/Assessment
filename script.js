function calculateFactorial() {
    let num = document.getElementById("a").value;
    let result = 1;

    if (num === "" || num < 0) {
        document.getElementById("result").innerText = "Invalid Input";
        return;
    }

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    document.getElementById("result").innerText = result;
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}