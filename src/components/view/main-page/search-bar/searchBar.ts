import DomElement from '../../domElement';

class SearchBar {
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

    const searchBar: HTMLElement = new DomElement('div', 'search-bar input-group mt-4 mb-4').create();
    const input: HTMLElement = new DomElement('input', 'serch-bar__input form-control', inputAttributes).create();
    const button: HTMLElement = new DomElement(
      'button',
      'serch-bar__button btn btn-warning',
      buttonAttributes,
      'Find'
    ).create();

    searchBar.appendChild(input);
    searchBar.appendChild(button);

    return searchBar;
  }
}

export default SearchBar;
