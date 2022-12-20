import SearchBar from './search-bar/searchBar';
import FiltersBlock from './filters-block/filtersBlock';
import ProductsBlock from './products-block/productsBlock';
import DomElement from '../domElement';

class MainPage {
  searchBar: SearchBar;
  filtersBlock: FiltersBlock;
  productsBlock: ProductsBlock;

  constructor() {
    this.searchBar = new SearchBar();
    this.filtersBlock = new FiltersBlock();
    this.productsBlock = new ProductsBlock();
  }

  public drawMainPage(): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    const container = new DomElement('div', 'container').create();
    const wrapper = new DomElement('div', 'products-filters-wrapper row').create();

    main.appendChild(container);
    container.appendChild(this.searchBar.draw());
    container.appendChild(wrapper);
    wrapper.appendChild(this.filtersBlock.draw());
    wrapper.appendChild(this.productsBlock.draw());
  }
}

export default MainPage;
