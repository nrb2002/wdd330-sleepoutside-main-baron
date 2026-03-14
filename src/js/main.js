// main.js

// 1. Import your ProductData module
import ProductData from './Produc.js';  // adjust path if in a different folder

// 2. Create an instance of ProductData
const productData = new ProductData();

// 3. Get the list of products
const products = productData.getProducts();

// 4. Select the container in your HTML to display products
const productContainer = document.getElementById('product-list');  // make sure your HTML has this div

// 5. Loop through products and display them
products.forEach(product => {
    // Check if product is discounted
    const isDiscounted = product.FinalPrice < product.SuggestedRetailPrice;

    // Create HTML for each product
    const productHTML = `
    <div class="product">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      ${isDiscounted ? `<span class="sale">SALE!</span>` : ''}
      <p class="price">
        ${isDiscounted ? `<span class="old-price">$${product.SuggestedRetailPrice}</span>` : ''}
        $${product.FinalPrice}
      </p>
    </div>
  `;

    // Append product HTML to the container
    productContainer.innerHTML += productHTML;
});