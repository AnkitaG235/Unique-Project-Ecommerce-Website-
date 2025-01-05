let cart = [];

function addToCart(product) {
    cart.push(product);
    alert("Added to cart!");
    updateCart();
}

function updateCart() {
    const cartContainer = document.querySelector(".cart-items");
    const cartTotal = document.querySelector("#cart-total");

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}
