import DomElement from '../../domElement';
import { CartItem, ProductsData } from '../../../../types/types';

class summaryCartBlock extends DomElement {
  element: HTMLElement;

  constructor() {
    super();
    this.element = this.createElement(
      'div',
      'cart-block__summary bg-light fs-6 mw-100 w-25 p-2 d-flex fw-bold border rounded-4 flex-column justify-content-start align-items-center'
    );
  }

  public draw(data: ProductsData, cart: CartItem[]): HTMLElement {
    this.element.innerHTML = '';

    const summaryName: HTMLElement = this.createElement(
      'div',
      'cart-block__summary__name border-bottom mb-2 fs-4',
      undefined,
      'Summary'
    );

    const summaryDescription: HTMLElement = this.createElement('div', 'd-flex mb-1 flex-column align-items-center');

    const summaryProductCountBlock: HTMLElement = this.createElement('div', 'cart-block__summary mb-1');

    const summaryProductCountName: HTMLElement = this.createElement('span', 'me-2', undefined, 'Product:');

    const summaryProductCountValue: HTMLElement = this.createElement(
      'span',
      'cart-block__summary__count',
      undefined,
      '2'
    );

    const summaryTotalPriceBlock: HTMLElement = this.createElement('div', 'mb-1');

    const summaryTotalPriceName: HTMLElement = this.createElement('span', 'me-2', undefined, 'Total:');

    const summaryTotalPriceValue: HTMLElement = this.createElement(
      'span',
      'cart-block__summary__price',
      undefined,
      '$1798.00'
    );

    const addPromoBlock: HTMLElement = this.createElement(
      'div',
      'form-check d-flex align-items-center justify-content-center'
    );

    const addPromoInput: HTMLElement = this.createElement('input', 'fs-6 mb-2  me-2', {
      type: 'text',
      placeholder: 'Enter promo code',
    });

    const addPromoButton: HTMLElement = this.createElement(
      'button',
      'btn btn-secondary',
      {
        type: 'button',
      },
      'Add'
    );

    const buyNowButton: HTMLElement = this.createElement(
      'button',
      'btn btn-warning',
      {
        type: 'button',
        'data-bs-toggle': 'modal',
        'data-bs-target': '#staticBackdrop',
      },
      'BUY NOW'
    );

    this.element.appendChild(summaryName);
    this.element.appendChild(summaryDescription);
    summaryDescription.appendChild(summaryProductCountBlock);
    summaryDescription.appendChild(summaryTotalPriceBlock);
    summaryDescription.appendChild(addPromoBlock);
    summaryDescription.appendChild(buyNowButton);
    summaryProductCountBlock.appendChild(summaryProductCountName);
    summaryProductCountBlock.appendChild(summaryProductCountValue);
    summaryTotalPriceBlock.appendChild(summaryTotalPriceName);
    summaryTotalPriceBlock.appendChild(summaryTotalPriceValue);
    addPromoBlock.appendChild(addPromoInput);
    addPromoBlock.appendChild(addPromoButton);

    return this.element;
  }
}

export default summaryCartBlock;
