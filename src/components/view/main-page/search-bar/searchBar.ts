import DomElement from '../../domElement';

class SearchBar extends DomElement {
  public draw(): HTMLElement {
    const inputAttributes = {
      placeholder: 'Search product...',
      'aria-label': 'Search product...',
      'aria-describedby': 'button-find',
      checked: true,
    };
    const buttonAttributes = {
      type: 'button',
      id: 'button-find',
    };

    const searchBar: HTMLElement = this.createElement('div', 'search-bar input-group mt-4 mb-4');
    const input: HTMLElement = this.createElement('input', 'serch-bar__input form-control', inputAttributes);
    const button: HTMLElement = this.createElement(
      'button',
      'serch-bar__button btn btn-warning',
      buttonAttributes,
      'Find'
    );

    searchBar.appendChild(input);
    searchBar.appendChild(button);

    return searchBar;
  }
}

export default SearchBar;
