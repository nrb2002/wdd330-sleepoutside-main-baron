// main.js

// 1. Import your modules
import ProductData from './ProductData.js';
import ProductList from './ProductList.mjs'; // default export

// 2. Create an instance of ProductData
const productData = new ProductData();

// 3. Render all products
const container = document.querySelector('.product-list'); // make sure <ul class="product-list"> exists
const productList = new ProductList('all', productData, container); // pass category, dataSource, listElement
productList.render();

// 4. Render tents category
const tentsList = document.querySelector('.tents-list'); // make sure <ul class="tents-list"> exists
const tents = new ProductList('tents', productData, tentsList);
tents.render();

// 5. Render sleeping bags category
const bagsList = document.querySelector('.bags-list'); // make sure <ul class="bags-list"> exists
const sleepingBags = new ProductList('sleepingBags', productData, bagsList);
sleepingBags.render();
import ProductData from './ProductData.js';
import ProductList from './ProductList.mjs';

const productData = new ProductData();

// Render all products
const container = document.querySelector('.product-list');
const productList = new ProductList('all', productData, container);
productList.init(); // call async init()

// Render tents
const tentsList = document.querySelector('.tents-list');
const tents = new ProductList('tents', productData, tentsList);
tents.init();

// Render sleeping bags
const bagsList = document.querySelector('.bags-list');
const sleepingBags = new ProductList('sleepingBags', productData, bagsList);
sleepingBags.init();

// main.js
import ProductData from './ProductData.js';
import ProductList from './ProductList.mjs'; // default export

const ProductData = new ProductData();

// Render all products
const Container = document.querySelector('.product-list');
const ProductList = new ProductList('all', productData, container);
productList.init(); // use async init method

// Render tents
const TentsList = document.querySelector('.tents-list');
const Tents = new ProductList('tents', productData, tentsList);
tents.init();

// Render sleeping bags
const BagsList = document.querySelector('.bags-list');
const SleepingBags = new ProductList('sleepingBags', productData, bagsList);
sleepingBags.init();