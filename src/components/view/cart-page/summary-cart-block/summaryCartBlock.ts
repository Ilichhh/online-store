import DomElement from '../../domElement';
import { CartItem, ProductsData } from '../../../../types/types';

class summaryCartBlock extends DomElement {
  element: HTMLElement;
  countPrice: number;
  countProduct: number;
  data: ProductsData;

  constructor(data: ProductsData) {
    super();
    this.countPrice = 0;
    this.countProduct = 0;
    this.data = data;
    this.element = this.createElement(
      'div',
      'cart-block__summary fs-6 mw-100 w-25 p-2 d-flex fw-bold border rounded-4 flex-column justify-content-start align-items-center'
    );
  }

  public recalculatePrice(promo: number): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '');
    let sum = 0;
    let countProduct = 0;
    cart.forEach((itemCart: CartItem) => {
      this.data.products.forEach((itemData) => {
        if (itemCart.id === itemData.id) {
          sum += (itemCart.count * itemData.price) - ((itemCart.count * itemData.price) / 100 * promo);
          countProduct += itemCart.count;
        }
      });
    });

    this.countPrice = sum;
    this.countProduct = countProduct;
  }

  public draw(cart: CartItem[]): HTMLElement {
    this.element.innerHTML = '';

    let promo = 0;
    this.recalculatePrice(promo);

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
      `${this.countProduct}`
    );

    let countOldPrice = this.countPrice;

    const summaryOldTotalPriceBlock: HTMLElement = this.createElement('div', 'text-decoration-line-through mb-1 d-none');

    const summaryOldTotalPriceName: HTMLElement = this.createElement('span', 'me-2', undefined, 'Old price:');

    const summaryOldTotalPriceValue: HTMLElement = this.createElement(
      'span',
      'cart-block__summary__price',
      undefined,
      `$${countOldPrice}`
    );

    const summaryTotalPriceBlock: HTMLElement = this.createElement('div', 'mb-1');

    const summaryTotalPriceName: HTMLElement = this.createElement('span', 'me-2', undefined, 'Total:');

    const summaryTotalPriceValue: HTMLElement = this.createElement(
      'span',
      'cart-block__summary__price',
      undefined,
      `$${this.countPrice}`
    );

    document.addEventListener('recalculatePrice', () => {
      this.recalculatePrice(promo);
      summaryTotalPriceValue.innerHTML = `$${this.countPrice}`;
      summaryProductCountValue.innerHTML = `${this.countProduct}`;
    });

    const addPromoBlock: HTMLElement = this.createElement(
      'div',
      'form-check d-flex flex-column align-items-center justify-content-center w-100 mb-2'
    );

    const addPromoInput: HTMLElement = this.createElement('input', 'fs-6 me-1 w-75', {
      type: 'text',
      placeholder: 'Enter promo code',
      value: '',
    });

    let promoCode = 'Test promo rs';

    const promoCodeButton: HTMLElement = this.createElement('div', 'mt-2 d-flex align-items-center');
    const addPromoCheck: HTMLElement = this.createElement('span', 'me-2 fs-7', undefined, `${promoCode}`)

    const addPromoButton: HTMLElement = this.createElement(
      'button',
      'btn btn-secondary',
      {
        type: 'button',
      },
      'Add'
    );

    addPromoInput.addEventListener('input', (e: Event) => {
      console.log(e.target);
      if (addPromoInput.getAttribute('value') === 'rs') {
      }
    });

    addPromoButton.addEventListener('click', (e) => {
      countOldPrice = this.countPrice;
      e.target?.dispatchEvent(new CustomEvent('recalculatePrice', { bubbles: true }));
      summaryOldTotalPriceBlock.classList.remove('d-none');
    })

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
    summaryDescription.appendChild(summaryOldTotalPriceBlock);
    summaryDescription.appendChild(summaryTotalPriceBlock);
    summaryDescription.appendChild(addPromoBlock);
    summaryDescription.appendChild(buyNowButton);
    summaryProductCountBlock.appendChild(summaryProductCountName);
    summaryProductCountBlock.appendChild(summaryProductCountValue);
    summaryTotalPriceBlock.appendChild(summaryTotalPriceName);
    summaryTotalPriceBlock.appendChild(summaryTotalPriceValue);
    summaryOldTotalPriceBlock.appendChild(summaryOldTotalPriceName);
    summaryOldTotalPriceBlock.appendChild(summaryOldTotalPriceValue);
    addPromoBlock.appendChild(addPromoInput);
    addPromoBlock.appendChild(promoCodeButton);
    promoCodeButton.appendChild(addPromoCheck);
    promoCodeButton.appendChild(addPromoButton);

    return this.element;
  }
}

export default summaryCartBlock;
