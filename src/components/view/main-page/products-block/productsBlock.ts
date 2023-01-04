import DomElement from '../../domElement';
import ProductCard from '../../product-card/productCard';
import type { ProductsData, Product, CartItem, QueryParams } from '../../../../types/types';
// import gridIcon from '../../../../assets/svg/grid.svg';
// import listIcon from '../../../../assets/svg/list-ul.svg';

class ProductsBlock extends DomElement {
  element: HTMLElement;
  sortingFilter: HTMLSelectElement;
  viewSwitcher: HTMLButtonElement;
  productsItemsBlock: HTMLElement;

  constructor() {
    super();
    this.element = this.createElement('div', 'products-block col-9 mb-5');
    this.sortingFilter = <HTMLSelectElement>this.createElement('select', 'products-block__sorting-filter form-select', {
      id: 'sort',
    });
    this.viewSwitcher = <HTMLButtonElement>this.createElement('div', 'products-block__view-switcher btn-group', {
      role: 'group',
      'aria-label': 'view-switcher',
    });
    this.productsItemsBlock = this.createElement('div', 'products-block__items row row-cols-1 row-cols-md-3 g-4');
  }

  public draw(data: ProductsData, cart: CartItem[], params: QueryParams): HTMLElement {
    this.element.innerHTML = '';
    const filteredData: Product[] = this.filterData(data, params);

    const viewParameters: HTMLElement = this.createElement(
      'div',
      'products-block__view-parameters g-5 mb-4 d-flex justify-content-between'
    );
    const sortingFilterWrapper: HTMLElement = this.createElement(
      'div',
      'products-block__sorting-filter-wrapper input-group-sm'
    );

    const sortingFiltersArray: [string, string][] = [
      ['Sort by...', 'placeholder'],
      ['Price Low to High', 'price-asc'],
      ['Price High to Low', 'price-desc'],
      ['Rating Low to High', 'rating-asc'],
      ['Rating High to Low', 'rating-desc'],
    ];

    this.sortingFilter.innerHTML = '';
    sortingFiltersArray.forEach((item) => {
      const sortingFilterItem = <HTMLOptionElement>(
        this.createElement('option', 'products-block__sorting-filter-item', { value: item[1] }, item[0])
      );
      this.sortingFilter.appendChild(sortingFilterItem);
    });

    const searchResults = this.createElement('div', 'products-block__found-count');
    searchResults.textContent = `Found ${data.products.length} items`;

    const gridViewInput = <HTMLInputElement>this.createElement('input', 'btn-check', {
      type: 'radio',
      name: 'view-style',
      id: 'grid',
      autocomplete: 'off',
    });
    const gridViewLabel = this.createElement('label', 'btn btn-outline-secondary btn-sm', { for: 'grid' });
    const listViewInput = <HTMLInputElement>this.createElement('input', 'btn-check', {
      type: 'radio',
      name: 'view-style',
      id: 'list',
      autocomplete: 'off',
    });
    const listViewLabel = this.createElement('label', 'btn btn-outline-secondary btn-sm', { for: 'list' });

    gridViewLabel.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
      </svg>
    `;
    listViewLabel.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
    `;

    this.viewSwitcher.innerHTML = '';

    this.element.appendChild(viewParameters);
    this.element.appendChild(this.productsItemsBlock);
    sortingFilterWrapper.appendChild(this.sortingFilter);
    viewParameters.appendChild(sortingFilterWrapper);
    viewParameters.appendChild(searchResults);
    viewParameters.appendChild(this.viewSwitcher);
    this.viewSwitcher.appendChild(gridViewInput);
    this.viewSwitcher.appendChild(gridViewLabel);
    this.viewSwitcher.appendChild(listViewInput);
    this.viewSwitcher.appendChild(listViewLabel);

    this.sortingFilter.value = params.sort || 'placeholder';
    params['view-style'] === 'list' ? (listViewInput.checked = true) : (gridViewInput.checked = true);

    this.drawProducts(filteredData, cart, params);
    return this.element;
  }

  public drawProducts(data: Product[], cart: CartItem[], params: QueryParams): void {
    this.sortData(data, params);

    this.productsItemsBlock.innerHTML = '';
    if (!data.length) this.productsItemsBlock.innerHTML = "<h3>Oops, looks like we didn't find anything :(</h3>";

    data.forEach((item) => {
      let inCart = 0;
      cart.forEach((e) => (e.id === item.id ? (inCart = e.count) : null));
      const wrapper: HTMLElement = this.createElement('div', 'products-block__item');
      this.productsItemsBlock.appendChild(wrapper);

      if (params['view-style'] === 'list') {
        this.productsItemsBlock.className = 'products-block__items row';
        wrapper.classList.add('mb-3');
        wrapper.appendChild(new ProductCard(item, inCart).drawListView());
      } else {
        this.productsItemsBlock.className = 'products-block__items row row-cols-1 row-cols-md-3 g-4';
        wrapper.appendChild(new ProductCard(item, inCart).drawGridView());
      }
    });
  }

  public toggleAddToCartButton(button: Element): void {
    button.classList.toggle('btn-danger');
    button.classList.toggle('btn-warning');
    button.textContent === 'Remove from Cart'
      ? (button.textContent = 'Add to Cart')
      : (button.textContent = 'Remove from Cart');
  }

  private sortData(data: Product[], params: QueryParams): void {
    if (params.sort === 'price-asc') data = data.sort((a, b) => a.price - b.price);
    if (params.sort === 'price-desc') data = data.sort((a, b) => b.price - a.price);
    if (params.sort === 'rating-asc') data = data.sort((a, b) => a.rating - b.rating);
    if (params.sort === 'rating-desc') data = data.sort((a, b) => b.rating - a.rating);
  }

  private filterData(data: ProductsData, params: QueryParams): Product[] {
    console.log(params);
    const categoryArr = params.category?.split('%') || [];
    console.log(categoryArr);
    let filtered = data.products.filter((item) => categoryArr.includes(item.category));
    if (!filtered.length) filtered = [...data.products];
    return filtered;
  }
}

export default ProductsBlock;
