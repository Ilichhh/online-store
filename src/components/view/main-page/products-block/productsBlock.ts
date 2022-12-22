import DomElement from '../../domElement';
import ProductCard from '../../product-card/productCard';
import type { ProductsData } from '../../../../types/types';

class ProductsBlock extends DomElement {
  public draw(data: ProductsData): HTMLElement {
    const productsBlock: HTMLElement = this.createElement('div', 'products-block col-9 mb-5');
    const viewParameters: HTMLElement = this.createElement(
      'div',
      'products-block__view-parameters g-5 mb-4 d-flex justify-content-between'
    );
    const productsItems: HTMLElement = this.createElement(
      'div',
      'products-block__items row row-cols-1 row-cols-md-3 g-4'
    );

    productsBlock.appendChild(viewParameters);
    productsBlock.appendChild(productsItems);

    viewParameters.innerHTML = `
      <div class="input-group-sm">
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Price Low to High</option>
          <option value="1">Price Low to High</option>
          <option value="2">Price Low to High</option>
          <option value="3">Price Low to High</option>
        </select>
      </div>

      <div class="product-display__found-count">
        Found all cool items
      </div>

      <div class="product-display__view-switcher btn-group" role="group" aria-label="Basic example">
        <input type="radio" class="btn-check" name="options1" id="option2" autocomplete="off" checked>
        <label class="btn btn-outline-secondary btn-sm" for="option2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
          </svg>
        </label>
        <input type="radio" class="btn-check" name="options1" id="option1" autocomplete="off">
        <label class="btn btn-outline-secondary btn-sm" for="option1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </label>
      </div>
    `;

    data.products.forEach((item) => {
      productsItems.appendChild(new ProductCard().draw(item));
    });

    return productsBlock;
  }
}

export default ProductsBlock;
