// Populate products dynamically in `products.html`
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Winterwear", price: 800, image: "https://i.ibb.co/47Sk9QL/product-1.jpg" },
        { id: 2, name: "Jackets", price: 1500, image: "https://i.ibb.co/b7ZVzYr/product-2.jpg" },
        // Add more products
    ];

    const productGrid = document.querySelector(".product-grid");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        `;
        productGrid.appendChild(productCard);
    });
});

function viewProduct(productId) {
    // Redirect to product-details.html with product ID in URL
    window.location.href = `product-details.html?id=${productId}`;
}
