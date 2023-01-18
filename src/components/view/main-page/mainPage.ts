import SearchBar from './search-bar/searchBar';
import FiltersBlock from './filters-block/filtersBlock';
import ProductsBlock from './products-block/productsBlock';
import DomElement from '../domElement';
import type { ProductsData, CartItem, QueryParams } from '../../../types/types';

class MainPage extends DomElement {
  searchBar: SearchBar;
  filtersBlock: FiltersBlock;
  productsBlock: ProductsBlock;

  constructor() {
    super();
    this.searchBar = new SearchBar();
    this.filtersBlock = new FiltersBlock();
    this.productsBlock = new ProductsBlock();
  }

  public drawMainPage(data: ProductsData, cart: CartItem[], params: QueryParams): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    main.innerHTML = '';
    const container: HTMLElement = this.createElement('div', 'container');
    const wrapper: HTMLElement = this.createElement('div', 'products-filters-wrapper row');

    main.appendChild(container);
    container.appendChild(this.searchBar.draw(params));
    container.appendChild(wrapper);
    wrapper.appendChild(this.filtersBlock.draw(data, params));
    wrapper.appendChild(this.productsBlock.draw(data, cart, params));
  }
}

export default MainPage;
