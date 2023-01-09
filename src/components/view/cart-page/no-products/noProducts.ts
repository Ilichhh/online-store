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
      'fs-6 mw-100 w-25 p-2 d-flex fw-bold border rounded-4 flex-column justify-content-start align-items-center'
    );

    const noProductsBlockContent = this.createElement(
      'div',
      'fs-6 mw-100 w-25 text-danger p-2 d-flex fw-bold border rounded-4 flex-column justify-content-start align-items-center',
      undefined,
      'No product in cart. KLJhlkjhlkjhlk lkjhl kjhl kjh lkjhlkjhl kjhl kjh'
    );

    this.element.appendChild(noProductsBlock);
    noProductsBlock.appendChild(noProductsBlockContent);

    return this.element;
  }
}

export default NoProducts;
