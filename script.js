let total = 0;
let count = 0;

function addToCart(price) {
    total += price;
    count++;

    document.getElementById("total").innerText = total;
    document.getElementById("count").innerText = count;
}

function clearCart() {
    total = 0;
    count = 0;

    document.getElementById("total").innerText = 0;
    document.getElementById("count").innerText = 0;
}
