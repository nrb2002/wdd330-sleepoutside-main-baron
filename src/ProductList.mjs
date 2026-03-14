// ProductList.mjs

export default class ProductList {
    /**
     * @param {string} category - The category of products to display
     * @param {object} dataSource - The object that provides product data
     * @param {HTMLElement} listElement - The HTML element (<ul>) where products will be rendered
     */
    constructor(category, dataSource, listElement) {
        this.category = category;       // category of products
        this.dataSource = dataSource;   // ProductData instance
        this.listElement = listElement; // HTML container (<ul>)
    }

    /**
     * Render products in the listElement
     */
    render() {
        // Clear the container
        this.listElement.innerHTML = '';

        // Get products for this category from the data source
        let products = [];

        // If category is 'all', get all products
        if (this.category === 'all') {
            products = this.dataSource.getProducts();
        } else {
            // Otherwise, filter by category
            products = this.dataSource.getProducts(this.category);
        }

        // Loop through each product and generate HTML
        products.forEach(product => {
            const isDiscounted = product.FinalPrice < product.SuggestedRetailPrice;

            const productHTML = `
        <li class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          ${isDiscounted ? `<span class="sale">SALE!</span>` : ''}
          <p class="price">
            ${isDiscounted ? `<span class="old-price">$${product.SuggestedRetailPrice}</span>` : ''}
            $${product.FinalPrice}
          </p>
        </li>
      `;

            this.listElement.innerHTML += productHTML;
        });
    }
}