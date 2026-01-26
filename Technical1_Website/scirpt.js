function productClicked(productName) {
    alert("You clicked on " + productName);
}

function submitForm() {
    alert("Thank you for your message!");
}

function loginUser() {
    alert("Login successful (placeholder)");
    window.location.href = "profile.html";
}

let cart = [];
let total = 0;
let payment = "";
let delivery = "";

function addToCart(product, price) {
    cart.push(product + " - ₱" + price);
    total += price;
    alert(product + " added to cart");
}

function loadCart() {
    let cartDiv = document.getElementById("cartItems");
    let totalSpan = document.getElementById("totalPrice");

    if (!cartDiv) return;

    cartDiv.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        cartDiv.innerHTML += "<p>" + cart[i] + "</p>";
    }

    totalSpan.innerHTML = total;
}

function placeOrder() {
    payment = document.getElementById("paymentMethod").value;
    delivery = document.getElementById("deliveryOption").value;
    window.location.href = "confirmation.html";
}

function loadConfirmation() {
    if (!document.getElementById("showPayment")) return;

    document.getElementById("showPayment").innerHTML = payment;
    document.getElementById("showDelivery").innerHTML = delivery;
    document.getElementById("showTotal").innerHTML = total;
}

window.onload = function () {
    loadCart();
    loadConfirmation();
};
