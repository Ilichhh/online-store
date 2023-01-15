import DomElement from '../../domElement';
import type { QueryParams } from '../../../../types/types';

class SearchBar extends DomElement {
  searchButton: HTMLElement;
  input: HTMLInputElement;

  constructor() {
    super();
    this.input = <HTMLInputElement>this.createElement('input', 'serch-bar__input form-control', {
      placeholder: 'Search product...',
      'aria-label': 'Search product...',
      'aria-describedby': 'button-find',
    });
    this.searchButton = this.createElement(
      'button',
      'serch-bar__button btn btn-warning',
      {
        type: 'button',
        id: 'button-find',
      },
      'Find'
    );
  }

  public draw(params: QueryParams): HTMLElement {
    const searchBar: HTMLElement = this.createElement('div', 'search-bar input-group mt-4 mb-4');

    this.input.value = params.search || '';
    searchBar.appendChild(this.input);
    searchBar.appendChild(this.searchButton);

    return searchBar;
  }
}

export default SearchBar;
