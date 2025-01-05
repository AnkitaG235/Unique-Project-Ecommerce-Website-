document.addEventListener("DOMContentLoaded", () => {
    // Retrieve product data from local storage or query parameters
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!productData) {
        alert("No product selected!");
        window.location.href = "index.html"; // Redirect to homepage
        return;
    }

    // Populate product details dynamically
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productDescription = document.getElementById("product-description");
    const productRating = document.getElementById("product-rating");

    productImage.src = productData.image;
    productName.textContent = productData.name;
    productPrice.textContent = `Price: ₹${productData.price}`;
    productDescription.textContent = productData.description;

    // Generate star ratings dynamically
    productRating.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("i");
        if (i <= productData.rating) {
            star.className = "fas fa-star"; // Filled star
        } else if (i - productData.rating < 1) {
            star.className = "fas fa-star-half-alt"; // Half star
        } else {
            star.className = "far fa-star"; // Empty star
        }
        productRating.appendChild(star);
    }

    // Add to cart functionality
    const addToCartBtn = document.getElementById("add-to-cart-btn");
    addToCartBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(productData);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    });
});
