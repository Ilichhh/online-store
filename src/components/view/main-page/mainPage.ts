import SearchBar from './search-bar/searchBar';
import FiltersBlock from './filters-block/filtersBlock';
import ProductsBlock from './products-block/productsBlock';
import DomElement from '../domElement';
import type { ProductsData, CartItem } from '../../../types/types';

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

  public drawMainPage(data: ProductsData, cart: CartItem[]): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    const container = this.createElement('div', 'container');
    const wrapper = this.createElement('div', 'products-filters-wrapper row');

    main.appendChild(container);
    container.appendChild(this.searchBar.draw());
    container.appendChild(wrapper);
    wrapper.appendChild(this.filtersBlock.draw(data));
    wrapper.appendChild(this.productsBlock.draw(data, cart));
  }
}

export default MainPage;
