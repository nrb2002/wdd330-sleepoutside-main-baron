// main.js

// 1. Import your modules
import ProductData from './ProductData.js';
import ProductList from './ProductList.mjs'; // default export

// 2. Create an instance of ProductData
const productData = new ProductData(); // use lowercase variable name
const products = productData.getProducts(); // get the array of products

// 3. Select the <ul> container in HTML
const container = document.querySelector('.product-list'); // make sure <ul class="product-list"> exists

// 4. Create a ProductList instance
const productList = new ProductList('all', productData, container); // pass category, dataSource, listElement

// 5. Render the products
productList.render();

// Example for another category if needed
const tentsList = document.querySelector('.tents-list');
const tents = new ProductList('tents', productData, tentsList);
tents.render();

const bagsList = document.querySelector('.bags-list');
const sleepingBags = new ProductList('sleepingBags', productData, bagsList);
sleepingBags.render();