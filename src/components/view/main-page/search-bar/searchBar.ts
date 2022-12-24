import DomElement from '../../domElement';

class SearchBar extends DomElement {
  searchButton: HTMLElement;
  input: HTMLElement;

  constructor() {
    super();
    this.input = this.createElement('input', 'serch-bar__input form-control', {
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

  public draw(): HTMLElement {
    const searchBar: HTMLElement = this.createElement('div', 'search-bar input-group mt-4 mb-4');

    searchBar.appendChild(this.input);
    searchBar.appendChild(this.searchButton);

    return searchBar;
  }
}

export default SearchBar;
