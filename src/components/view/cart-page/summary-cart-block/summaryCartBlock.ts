import DomElement from '../../domElement';
import { CartItem, ProductsData } from '../../../../types/types';

class summaryCartBlock extends DomElement {
  element: HTMLElement;
  buyNowButton: HTMLElement;
  countPrice: number;
  countProduct: number;
  countOldPrice: number;
  promoCode: string;
  promo: number;

  constructor() {
    super();
    this.promoCode = '';
    this.promo = 0;
    this.countOldPrice = 0;
    this.countPrice = 0;
    this.countProduct = 0;
    this.element = this.createElement(
      'div',
      'cart-block__summary fs-6 mw-100 w-25 p-2 d-flex fw-bold border rounded-4 flex-column justify-content-start align-items-center'
    );
    this.buyNowButton = this.createElement(
      'button',
      'btn btn-warning',
      {
        type: 'button',
        'data-bs-toggle': 'modal',
        'data-bs-target': '#staticBackdrop',
      },
      'BUY NOW'
    );
  }

  public changePromo(promo: number, promoCode: string): void {
    this.promoCode = promoCode;
    this.promo = promo;
  }

  public recalculatePrice(data: ProductsData): void {
    this.promo = Number(localStorage.getItem('promo'));
    const cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart') || '');
    let sum = 0;
    let sumOld = 0;
    let countProduct = 0;
    cart.forEach((itemCart: CartItem) => {
      data.products.forEach((itemData) => {
        if (itemCart.id === itemData.id) {
          sumOld += itemCart.count * itemData.price;
          sum += itemCart.count * itemData.price - ((itemCart.count * itemData.price) / 100) * this.promo;
          countProduct += itemCart.count;
        }
      });
    });
    this.countPrice = Math.floor(sum * 100) / 100;
    this.countOldPrice = Math.floor(sumOld * 100) / 100;
    this.countProduct = countProduct;
  }

  public draw(data: ProductsData): HTMLElement {
    this.element.innerHTML = '';
    localStorage.setItem('promo', '0');
    let append: HTMLElement;
    const promoArr = [
      { name: 'rs', text: 'Rolling Scopes School - 10%', discont: 10 },
      { name: 'ep', text: 'Epam Systems - 10%', discont: 10 },
    ];

    this.recalculatePrice(data);

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

    const summaryOldTotalPriceBlock: HTMLElement = this.createElement(
      'div',
      'text-decoration-line-through mb-1 d-none'
    );

    const summaryOldTotalPriceName: HTMLElement = this.createElement('span', 'me-2', undefined, 'Old price:');

    const summaryOldTotalPriceValue: HTMLElement = this.createElement(
      'span',
      'cart-block__summary__price',
      undefined,
      `$${this.countOldPrice}`
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
      this.recalculatePrice(data);
      summaryTotalPriceValue.innerHTML = `$${this.countPrice}`;
      summaryOldTotalPriceValue.innerHTML = `$${this.countOldPrice}`;
      summaryProductCountValue.innerHTML = `${this.countProduct}`;
    });

    document.addEventListener('changePromo', () => {
      this.changePromo(this.promo, this.promoCode);
      addPromoCheck.textContent = `${this.promoCode}`;
    });

    const addPromoBlock: HTMLElement = this.createElement(
      'div',
      'form-check d-flex flex-column align-items-center justify-content-center w-100 mb-2'
    );

    const addPromoInput: HTMLElement = this.createElement('input', 'fs-6 me-1 w-75 rounded', {
      type: 'text',
      placeholder: 'Enter promo code',
      value: '',
      id: 'add-promo-input',
    });

    const addPromoHint: HTMLElement = this.createElement('div', 'mb-2', undefined, 'Test promo "rs", "ep"');

    const promoCodeButton: HTMLElement = this.createElement('div', 'mt-2 d-flex align-items-center d-none');
    const addPromoCheck: HTMLElement = this.createElement('span', 'me-2 fs-7', undefined, `${this.promoCode}`);

    const addPromoButton: HTMLElement = this.createElement(
      'button',
      'btn btn-secondary',
      {
        type: 'button',
        id: 'add-promo-code',
      },
      'Add'
    );

    const addedPromoCodesUl: HTMLElement = this.createElement(
      'div',
      'fw-normal list-group d-flex mb-2 justify-content-center'
    );
    const addedPromoCodesItem0: HTMLElement = this.createElement('div', 'text-center d-none list-group-item w-100');
    const addedPromoCodesName0: HTMLElement = this.createElement(
      'span',
      'text-center me-2',
      undefined,
      `${promoArr[0].text}`
    );
    const addedPromoCodesDrop0: HTMLElement = this.createElement(
      'button',
      'btn btn-secondary',
      { id: 'drop-promo0' },
      'Drop'
    );

    const addedPromoCodesItem1: HTMLElement = this.createElement('div', 'text-end d-none list-group-item');
    const addedPromoCodesName1: HTMLElement = this.createElement(
      'span',
      'text-center me-2',
      undefined,
      `${promoArr[1].text}`
    );
    const addedPromoCodesDrop1: HTMLElement = this.createElement(
      'button',
      'btn btn-secondary',
      { id: 'drop-promo1' },
      'Drop'
    );

    addPromoInput.addEventListener('input', (e: Event) => {
      const currentText = (<HTMLInputElement>e.target).value;
      e.target?.dispatchEvent(new CustomEvent('changePromo', { bubbles: true }));
      if (currentText === promoArr[0].name && addedPromoCodesItem0.classList.contains('d-none')) {
        promoCodeButton.classList.remove('d-none');
        this.promo += promoArr[0].discont;
        this.promoCode = promoArr[0].text;
        append = addedPromoCodesItem0;
        e.target?.dispatchEvent(new CustomEvent('changePromo', { bubbles: true }));
      } else if (currentText === promoArr[1].name && addedPromoCodesItem1.classList.contains('d-none')) {
        promoCodeButton.classList.remove('d-none');
        this.promo += promoArr[1].discont;
        this.promoCode = promoArr[1].text;
        append = addedPromoCodesItem1;
        e.target?.dispatchEvent(new CustomEvent('changePromo', { bubbles: true }));
      } else {
        promoCodeButton.classList.add('d-none');
      }
      localStorage.setItem('promo', `${this.promo}`);
      addPromoButton.addEventListener('click', () => {
        (<HTMLInputElement>e.target).value = '';
      });
    });

    addPromoButton.addEventListener('click', (e) => {
      e.target?.dispatchEvent(new CustomEvent('recalculatePrice', { bubbles: true }));
      summaryOldTotalPriceBlock.classList.remove('d-none');
      append.classList.remove('d-none');
      promoCodeButton.classList.add('d-none');
    });

    addedPromoCodesDrop0.addEventListener('click', (e) => {
      this.promo -= promoArr[0].discont;
      addedPromoCodesItem0.classList.add('d-none');
      localStorage.setItem('promo', `${this.promo}`);
      e.target?.dispatchEvent(new CustomEvent('recalculatePrice', { bubbles: true }));
      if (this.countOldPrice === this.countPrice) {
        summaryOldTotalPriceBlock.classList.add('d-none');
      }
    });

    addedPromoCodesDrop1.addEventListener('click', (e) => {
      this.promo -= promoArr[1].discont;
      addedPromoCodesItem1.classList.add('d-none');
      localStorage.setItem('promo', `${this.promo}`);
      e.target?.dispatchEvent(new CustomEvent('recalculatePrice', { bubbles: true }));
      if (this.countOldPrice === this.countPrice) {
        summaryOldTotalPriceBlock.classList.add('d-none');
      }
    });

    this.element.appendChild(summaryName);
    this.element.appendChild(summaryDescription);
    summaryDescription.appendChild(summaryProductCountBlock);
    summaryDescription.appendChild(summaryOldTotalPriceBlock);
    summaryDescription.appendChild(summaryTotalPriceBlock);
    summaryDescription.appendChild(addPromoBlock);
    summaryDescription.appendChild(this.buyNowButton);
    summaryProductCountBlock.appendChild(summaryProductCountName);
    summaryProductCountBlock.appendChild(summaryProductCountValue);
    summaryTotalPriceBlock.appendChild(summaryTotalPriceName);
    summaryTotalPriceBlock.appendChild(summaryTotalPriceValue);
    summaryOldTotalPriceBlock.appendChild(summaryOldTotalPriceName);
    summaryOldTotalPriceBlock.appendChild(summaryOldTotalPriceValue);
    addPromoBlock.appendChild(addedPromoCodesUl);
    addPromoBlock.appendChild(addPromoInput);
    addPromoBlock.appendChild(addPromoHint);
    addPromoBlock.appendChild(promoCodeButton);
    promoCodeButton.appendChild(addPromoCheck);
    promoCodeButton.appendChild(addPromoButton);
    addedPromoCodesUl.appendChild(addedPromoCodesItem0);
    addedPromoCodesUl.appendChild(addedPromoCodesItem1);
    addedPromoCodesItem0.appendChild(addedPromoCodesName0);
    addedPromoCodesItem0.appendChild(addedPromoCodesDrop0);
    addedPromoCodesItem1.appendChild(addedPromoCodesName1);
    addedPromoCodesItem1.appendChild(addedPromoCodesDrop1);

    return this.element;
  }
}

export default summaryCartBlock;
