
let total = 0;

function order(price) {
    total += price;
    document.getElementById("total").innerHTML = total;
    alert("Food ordered successfully!");
}
