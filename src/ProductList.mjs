// ProductList.mjs

export default class ProductList {
    /**
     * @param {string} category - Product category
     * @param {object} dataSource - Object providing product data (e.g., ProductData instance)
     * @param {HTMLElement} listElement - HTML <ul> element to render products into
     */
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.products = []; // will store fetched products
    }

    /**
     * Initialize the product list by fetching data and rendering
     */
    async init() {
        try {
            // Fetch products for this category
            this.products = await this.dataSource.getProducts(this.category);
            this.render(); // render after data is fetched
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    /**
     * Render the products in the listElement
     */
    render() {
        if (!this.listElement) return;

        // Clear the container first
        this.listElement.innerHTML = '';

        // Loop through products and generate HTML
        this.products.forEach(product => {
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