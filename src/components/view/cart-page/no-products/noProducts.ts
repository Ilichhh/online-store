import DomElement from '../../domElement';

class NoProducts extends DomElement {
  element: HTMLElement;

  constructor() {
    super();
    this.element = this.createElement('div', '');
  }

  public draw(): HTMLElement {
    this.element.innerHTML = '';
    const noProductsBlock = this.createElement(
      'div',
      'fs-6 mw-100 w-100 p-2 d-flex mt-4 fw-bold border rounded-4 flex-column justify-content-start align-items-center',
      undefined,
      'No product in cart'
    );

    this.element.appendChild(noProductsBlock);

    return this.element;
  }
}

export default NoProducts;
